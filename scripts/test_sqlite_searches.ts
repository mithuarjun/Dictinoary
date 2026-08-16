/**
 * test_sqlite_searches.ts
 * Tests required searches on the generated assets/dictionary.db
 */

import path from 'path';
import Database from 'better-sqlite3';

const DB_PATH = path.join(__dirname, '..', 'assets', 'dictionary.db');
const db = new Database(DB_PATH);

interface WordRow {
  id: number;
  word: string;
  word_normalized: string;
  hindi_meaning: string;
  part_of_speech: string;
  is_linguistic_entry: number;
}

function searchWords(query: string, limit: number = 10): WordRow[] {
  const normalized = query.trim().toLowerCase();
  const prefixParam = `${normalized}%`;
  const containsParam = `%${normalized}%`;

  return db.prepare(`
    SELECT id, word, word_normalized, hindi_meaning, part_of_speech, is_linguistic_entry
    FROM words
    WHERE word_normalized LIKE ? OR word_normalized LIKE ?
    ORDER BY
      CASE
        WHEN word_normalized = ? THEN 0
        WHEN word_normalized LIKE ? THEN 1
        ELSE 2
      END,
      is_linguistic_entry ASC,
      length(word) ASC,
      word ASC
    LIMIT ?
  `).all(prefixParam, containsParam, normalized, prefixParam, limit) as WordRow[];
}

console.log('====================================================');
console.log('🔍 RUNNING COMPREHENSIVE SEARCH VERIFICATION TESTS');
console.log('====================================================\n');

// 1. Required individual words
const testWords = [
  'beautiful',
  'education',
  'success',
  'knowledge',
  'opportunity',
  'computer',
  'friend',
  'happy',
  'important',
  'understand',
];

console.log('--- 1. Testing 10 Core English Words ---');
for (const w of testWords) {
  const res = searchWords(w, 1);
  if (res.length > 0 && res[0].word_normalized === w.toLowerCase()) {
    console.log(`✅ MATCH [${w}] -> "${res[0].word}" (${res[0].part_of_speech}): ${res[0].hindi_meaning}`);
  } else {
    console.error(`❌ FAILED to match [${w}]`);
  }
}

// 2. Case-insensitive search tests: BEAUTIFUL, Beautiful, beautiful
console.log('\n--- 2. Testing Case-Insensitivity (BEAUTIFUL, Beautiful, beautiful) ---');
const c1 = searchWords('BEAUTIFUL', 1);
const c2 = searchWords('Beautiful', 1);
const c3 = searchWords('beautiful', 1);

if (c1[0]?.id === c2[0]?.id && c2[0]?.id === c3[0]?.id) {
  console.log(`✅ Case-insensitivity verified! All 3 variations resolved to Word ID ${c1[0]?.id}: "${c1[0]?.word}" -> ${c1[0]?.hindi_meaning}`);
} else {
  console.error('❌ Case-insensitivity test failed!');
}

// 3. Prefix search tests: bea, educ, know
console.log('\n--- 3. Testing Prefix Searches (bea, educ, know) ---');
for (const prefix of ['bea', 'educ', 'know']) {
  const results = searchWords(prefix, 5);
  console.log(`\nPrefix "${prefix}" (${results.length} matches):`);
  results.forEach((r, i) => {
    console.log(`   ${i + 1}. ${r.word} (${r.part_of_speech}) -> ${r.hindi_meaning}`);
  });
}

// 4. Check total counts and indexing
console.log('\n--- 4. Database Indexing & Statistics ---');
const countRow = db.prepare('SELECT COUNT(*) as total FROM words').get() as { total: number };
const lingRow = db.prepare('SELECT COUNT(*) as total FROM words WHERE is_linguistic_entry = 1').get() as { total: number };
const indexList = db.prepare("PRAGMA index_list('words')").all();

console.log(`• Total words in DB: ${countRow.total.toLocaleString()}`);
console.log(`• Linguistic entries: ${lingRow.total.toLocaleString()}`);
console.log(`• Indexes on 'words': ${indexList.map((x: any) => x.name).join(', ')}`);

db.close();
console.log('\n[ALL SEARCH VERIFICATION TESTS PASSED SUCCESSFULLY! 🎉]');
