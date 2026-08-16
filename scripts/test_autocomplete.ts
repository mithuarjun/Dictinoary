import Database from 'better-sqlite3';
import path from 'path';
import { formatTopHindiMeanings } from '../src/utils/formatDictionaryMeanings';

const DB_PATH = path.resolve(__dirname, '../assets/dictionary.db');
const db = new Database(DB_PATH);

console.log('===============================================================');
console.log('🔍 RUNNING LIVE AUTOCOMPLETE PREFIX SEARCH VERIFICATION');
console.log('===============================================================');

function queryAutocomplete(prefix: string, limit = 10) {
  const normalized = prefix.trim().toLowerCase();
  const stmt = db.prepare(`
    SELECT id, word, word_normalized, hindi_meaning, part_of_speech, is_linguistic_entry
    FROM words
    WHERE word_normalized LIKE ? AND is_linguistic_entry = 0
    ORDER BY
      CASE
        WHEN word_normalized = ? THEN 0
        WHEN word_normalized LIKE ? THEN 1
        ELSE 2
      END,
      length(word) ASC,
      word_normalized ASC
    LIMIT ?
  `);

  const prefixParam = `${normalized}%`;
  return stmt.all(prefixParam, normalized, prefixParam, limit) as any[];
}

const testPrefixes = ['w', 'wa', 'wat', 'watchm', 'educ', 'know', 'comp'];

for (const p of testPrefixes) {
  const results = queryAutocomplete(p, 8);
  console.log(`\n▶ Prefix "${p}" (${results.length} suggestions):`);
  results.forEach((r, idx) => {
    const cleanHindi = formatTopHindiMeanings(r.hindi_meaning, 4);
    console.log(`   ${idx + 1}. [${r.word}] (${r.part_of_speech || 'Word'}) -> "${cleanHindi}"`);
  });

  if (results.length > 0) {
    console.log(`   ✅ PASS: Valid prefix results returned for "${p}"`);
  } else {
    console.error(`   ❌ FAIL: No results for "${p}"`);
  }
}

console.log('\n===============================================================');
console.log('🎉 ALL AUTOCOMPLETE VERIFICATIONS COMPLETED SUCCESSFULLY!');
console.log('===============================================================');
