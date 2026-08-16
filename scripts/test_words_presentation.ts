import Database from 'better-sqlite3';
import path from 'path';
import { getTopHindiMeanings, formatTopHindiMeanings } from '../src/utils/formatDictionaryMeanings';

const DB_PATH = path.resolve(__dirname, '../assets/dictionary.db');
const db = new Database(DB_PATH);

const testWords = [
  'go',
  'run',
  'get',
  'make',
  'take',
  'set',
  'come',
  'give',
  'put',
  'have',
  'educationally',
  'beautiful',
  'education',
  'knowledge',
  'success',
  'opportunity'
];

console.log('===============================================================');
console.log('🔍 TESTING HINDI MEANING PRESENTATION (MAX 4 MEANINGS RULE)');
console.log('===============================================================');

let allPassed = true;

for (const word of testWords) {
  const row = db.prepare('SELECT word, hindi_meaning, part_of_speech FROM words WHERE word_normalized = ? LIMIT 1').get(word) as any;
  if (!row) {
    console.log(`⚠️ Word [${word}] not found in DB`);
    continue;
  }

  const rawMeanings = row.hindi_meaning.split('/');
  const topArray = getTopHindiMeanings(row.hindi_meaning, 4);
  const formatted = formatTopHindiMeanings(row.hindi_meaning, 4);

  const passed = topArray.length <= 4 && topArray.length > 0;
  if (!passed) allPassed = false;

  console.log(`\nWord: "${row.word}" (${row.part_of_speech || 'N/A'})`);
  console.log(`• Raw Meaning Count in DB: ${rawMeanings.length} meanings`);
  console.log(`• Formatted Visible Meanings (${topArray.length}): "${formatted}"`);
  console.log(`• Pass condition (count <= 4): ${passed ? '✅ PASS' : '❌ FAIL'}`);
}

console.log('\n===============================================================');
console.log(allPassed ? '🎉 ALL WORD PRESENTATION TESTS PASSED (0 OVERFLOWS)!' : '❌ SOME TESTS FAILED');
console.log('===============================================================');
