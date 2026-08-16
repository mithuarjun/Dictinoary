/**
 * importDictionary.ts
 * Imports and cleans D:\Dictinoary\src\data\English-Hindi Dictionary.csv into an optimized SQLite database.
 * Run via: npm run import-dictionary
 */

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import Database from 'better-sqlite3';

const CSV_PATH = path.join(__dirname, '..', 'src', 'data', 'English-Hindi Dictionary.csv');
const OUTPUT_DB_PATH = path.join(__dirname, '..', 'assets', 'dictionary.db');

interface RawCsvRecord {
  eword: string;
  hword: string;
  egrammar: string;
}

// Simple fast CSV parser for quoted 3-column CSV: "eword","hword","egrammar"
function parseCsvLine(line: string): [string, string, string] | null {
  const trimmed = line.trim();
  if (!trimmed) return null;

  const result: string[] = [];
  let inQuotes = false;
  let current = '';

  for (let i = 0; i < trimmed.length; i++) {
    const char = trimmed[i];

    if (char === '"') {
      if (inQuotes && trimmed[i + 1] === '"') {
        current += '"';
        i++; // skip escaped quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);

  if (result.length < 2) return null;
  return [result[0] || '', result[1] || '', result[2] || ''];
}

function normalizeEnglish(word: string): string {
  return word
    .trim()
    .toLowerCase()
    .replace(/^["'‘“]+|["'’”]+$/g, '');
}

function cleanHindi(text: string): string {
  return text
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/^["'‘“]+|["'’”]+$/g, '');
}

function isLinguistic(word: string, pos: string): boolean {
  const lowerPos = pos.toLowerCase();
  const lowerWord = word.toLowerCase();

  if (
    lowerPos.includes('suffix') ||
    lowerPos.includes('prefix') ||
    lowerPos.includes('abbrev') ||
    lowerPos.includes('grammar')
  ) {
    return true;
  }

  if (
    lowerWord.startsWith('-') ||
    lowerWord.endsWith('-') ||
    lowerWord.startsWith('[') ||
    lowerWord.startsWith('(') ||
    lowerWord.endsWith(']') ||
    lowerWord.endsWith(')')
  ) {
    return true;
  }

  return false;
}

async function runImport() {
  console.log('====================================================');
  console.log('🚀 Starting Gem Dictionary CSV Import');
  console.log(`📂 Source: ${CSV_PATH}`);
  console.log(`💾 Target: ${OUTPUT_DB_PATH}`);
  console.log('====================================================\n');

  if (!fs.existsSync(CSV_PATH)) {
    console.error(`❌ Error: CSV file not found at ${CSV_PATH}`);
    process.exit(1);
  }

  // Ensure assets directory exists
  const assetsDir = path.dirname(OUTPUT_DB_PATH);
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }

  // Remove existing DB file if present
  if (fs.existsSync(OUTPUT_DB_PATH)) {
    fs.unlinkSync(OUTPUT_DB_PATH);
  }

  const db = new Database(OUTPUT_DB_PATH);
  db.pragma('journal_mode = WAL');
  db.pragma('synchronous = NORMAL');

  // Create schema
  db.exec(`
    CREATE TABLE IF NOT EXISTS words (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      word TEXT NOT NULL,
      word_normalized TEXT NOT NULL,
      hindi_meaning TEXT NOT NULL,
      part_of_speech TEXT,
      is_linguistic_entry INTEGER NOT NULL DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS favorites (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      word_id INTEGER NOT NULL REFERENCES words(id) ON DELETE CASCADE,
      added_at INTEGER NOT NULL DEFAULT (strftime('%s','now')),
      UNIQUE(word_id)
    );

    CREATE TABLE IF NOT EXISTS search_history (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      word_id INTEGER NOT NULL REFERENCES words(id) ON DELETE CASCADE,
      searched_at INTEGER NOT NULL DEFAULT (strftime('%s','now'))
    );

    CREATE INDEX IF NOT EXISTS idx_words_normalized ON words(word_normalized);
    CREATE INDEX IF NOT EXISTS idx_words_word ON words(word COLLATE NOCASE);
    CREATE INDEX IF NOT EXISTS idx_words_linguistic ON words(is_linguistic_entry);
    CREATE INDEX IF NOT EXISTS idx_favorites_word_id ON favorites(word_id);
    CREATE INDEX IF NOT EXISTS idx_history_searched_at ON search_history(searched_at DESC);
  `);

  const fileStream = fs.createReadStream(CSV_PATH);
  const rl = readline.createInterface({
    input: fileStream as any,
    crlfDelay: Infinity,
  });

  let originalCsvRows = 0;
  let emptyRowsRemoved = 0;
  let duplicateRowsRemoved = 0;
  let isHeader = true;

  // We use a Map to aggregate multiple distinct Hindi meanings & POS for the same English word
  interface WordAggregate {
    displayWord: string;
    normalized: string;
    meanings: Set<string>;
    partsOfSpeech: Set<string>;
    isLinguistic: boolean;
  }

  const wordMap = new Map<string, WordAggregate>();
  const exactSeen = new Set<string>();

  await new Promise<void>((resolve, reject) => {
    rl.on('line', (line: string) => {
      originalCsvRows++;

      if (isHeader) {
        isHeader = false;
        // Skip header line if it has column names
        if (line.toLowerCase().includes('eword')) return;
      }

      const parsed = parseCsvLine(line);
      if (!parsed) {
        emptyRowsRemoved++;
        return;
      }

      const [rawEword, rawHword, rawPos] = parsed;
      const cleanWord = rawEword.trim();
      const cleanMeaning = cleanHindi(rawHword);
      const cleanPos = rawPos.trim();

      // Remove empty English or Hindi entries
      if (!cleanWord || !cleanMeaning) {
        emptyRowsRemoved++;
        return;
      }

      // Exact duplicate row check (same eword, hword, and pos)
      const exactKey = `${cleanWord.toLowerCase()}|||${cleanMeaning}|||${cleanPos.toLowerCase()}`;
      if (exactSeen.has(exactKey)) {
        duplicateRowsRemoved++;
        return;
      }
      exactSeen.add(exactKey);

      const norm = normalizeEnglish(cleanWord);
      if (!norm) {
        emptyRowsRemoved++;
        return;
      }

      const linguistic = isLinguistic(cleanWord, cleanPos);

      if (!wordMap.has(norm)) {
        wordMap.set(norm, {
          displayWord: cleanWord,
          normalized: norm,
          meanings: new Set([cleanMeaning]),
          partsOfSpeech: cleanPos ? new Set([cleanPos]) : new Set(),
          isLinguistic: linguistic,
        });
      } else {
        const existing = wordMap.get(norm)!;
        existing.meanings.add(cleanMeaning);
        if (cleanPos) existing.partsOfSpeech.add(cleanPos);
        if (linguistic) existing.isLinguistic = true;
      }
    });

    rl.on('close', () => resolve());
    rl.on('error', (err) => reject(err));
  });

  console.log(`📊 Processing complete. Aggregating into SQLite tables...`);

  let uniqueEnglishWords = wordMap.size;
  let normalVocabCount = 0;
  let linguisticCount = 0;

  const insertStmt = db.prepare(`
    INSERT INTO words (word, word_normalized, hindi_meaning, part_of_speech, is_linguistic_entry)
    VALUES (?, ?, ?, ?, ?)
  `);

  const insertMany = db.transaction((entries: WordAggregate[]) => {
    for (const entry of entries) {
      const meaningsStr = Array.from(entry.meanings).join(' / ');
      const posStr = Array.from(entry.partsOfSpeech).join(', ') || 'Word';
      const isLing = entry.isLinguistic ? 1 : 0;

      if (isLing === 1) {
        linguisticCount++;
      } else {
        normalVocabCount++;
      }

      insertStmt.run(entry.displayWord, entry.normalized, meaningsStr, posStr, isLing);
    }
  });

  insertMany(Array.from(wordMap.values()));

  const dbStats = fs.statSync(OUTPUT_DB_PATH);
  const sizeMb = (dbStats.size / (1024 * 1024)).toFixed(2);

  db.close();

  console.log('\n====================================================');
  console.log('✅ IMPORT SUMMARY & STATS');
  console.log('====================================================');
  console.log(`• Original CSV row count:       ${originalCsvRows.toLocaleString()}`);
  console.log(`• Empty rows removed:           ${emptyRowsRemoved.toLocaleString()}`);
  console.log(`• Duplicate rows removed:       ${duplicateRowsRemoved.toLocaleString()}`);
  console.log(`• Unique English words stored:  ${uniqueEnglishWords.toLocaleString()}`);
  console.log(`• Normal vocabulary entries:    ${normalVocabCount.toLocaleString()}`);
  console.log(`• Linguistic / suffix entries:  ${linguisticCount.toLocaleString()}`);
  console.log(`• Final SQLite database size:   ${sizeMb} MB`);
  console.log(`• Database location:            ${OUTPUT_DB_PATH}`);
  console.log('====================================================\n');
}

runImport().catch((err) => {
  console.error('❌ Import failed with error:', err);
  process.exit(1);
});
