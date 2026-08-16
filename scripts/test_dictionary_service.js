// ─── Dictionary Service Verification Tests ────────────────────────────────────
const assert = require('assert');

// Load generated student dictionary dataset
const studentDictionaryEntries = require('../assets/student_dictionary.json');

console.log(`[INIT] Loaded ${studentDictionaryEntries.length} student entries.`);
assert(studentDictionaryEntries.length >= 500, `Expected >= 500 entries, got ${studentDictionaryEntries.length}`);

// Test 1: English Prefix Search
function searchWordsEn(query, limit = 20) {
  const qLower = query.trim().toLowerCase();
  return studentDictionaryEntries
    .filter((item) => item.word_en.toLowerCase().includes(qLower))
    .sort((a, b) => {
      const aLower = a.word_en.toLowerCase();
      const bLower = b.word_en.toLowerCase();
      if (aLower === qLower && bLower !== qLower) return -1;
      if (bLower === qLower && aLower !== qLower) return 1;
      if (aLower.startsWith(qLower) && !bLower.startsWith(qLower)) return -1;
      if (bLower.startsWith(qLower) && !aLower.startsWith(qLower)) return 1;
      return aLower.localeCompare(bLower);
    })
    .slice(0, limit);
}

const enResults = searchWordsEn('grav');
assert(enResults.length > 0, 'English prefix search for "grav" failed');
assert(enResults[0].word_en === 'Gravity', `Expected "Gravity", got ${enResults[0].word_en}`);
console.log('✅ TEST 1 PASSED: English prefix search ("grav" -> Gravity, Guru-twaakarshan)');

// Test 2: Hindi Search
function searchWordsHi(query, limit = 20) {
  const trimmed = query.trim();
  return studentDictionaryEntries
    .filter((item) => item.word_hi.includes(trimmed))
    .slice(0, limit);
}

const hiResults = searchWordsHi('बल');
assert(hiResults.length > 0, 'Hindi search for "बल" failed');
console.log(`✅ TEST 2 PASSED: Hindi search ("बल" -> ${hiResults.map(r => r.word_en).join(', ')})`);

// Test 3: Exact Lookup with complete details
function getWordDetails(word) {
  const qLower = word.trim().toLowerCase();
  return studentDictionaryEntries.find(
    (item) =>
      item.word_en.toLowerCase() === qLower ||
      item.word_hi.toLowerCase() === qLower
  ) || null;
}

const wordDetails = getWordDetails('Photosynthesis');
assert(wordDetails !== null, 'Exact lookup for "Photosynthesis" returned null');
assert(wordDetails.word_en === 'Photosynthesis');
assert(wordDetails.word_hi.includes('प्रकाश संश्लेषण'));
assert(wordDetails.phonetic && wordDetails.phonetic.length > 0);
assert(wordDetails.part_of_speech === 'noun');
assert(wordDetails.example_en && wordDetails.example_en.length > 0);
assert(wordDetails.example_hi && wordDetails.example_hi.length > 0);
assert(wordDetails.category === 'academic_science');
console.log('✅ TEST 3 PASSED: Exact lookup ("Photosynthesis" returns complete definition, phonetic, example sentences)');

// Test 4: Category Filtering
function getWordsByCategory(cat, limit = 50) {
  return studentDictionaryEntries
    .filter((item) => item.category.toLowerCase() === cat.toLowerCase())
    .slice(0, limit);
}

const mathWords = getWordsByCategory('academic_math');
assert(mathWords.length > 0, 'Category academic_math is empty');
assert(mathWords.every(w => w.category === 'academic_math'));
console.log(`✅ TEST 4 PASSED: Category filtering ("academic_math" -> ${mathWords.length} math terms)`);

// Test 5: Word of the Day Deterministic Selection
function getWordOfTheDay(date) {
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  return studentDictionaryEntries[dayOfYear % studentDictionaryEntries.length];
}

const today = new Date('2026-08-16');
const wotd1 = getWordOfTheDay(today);
const wotd2 = getWordOfTheDay(today);
assert.strictEqual(wotd1.id, wotd2.id, 'WOTD must be deterministic on the same date');
const tomorrow = new Date('2026-08-17');
const wotdTomorrow = getWordOfTheDay(tomorrow);
assert.notStrictEqual(wotd1.id, wotdTomorrow.id, 'WOTD must differ across dates');
console.log(`✅ TEST 5 PASSED: Deterministic Word of the Day (${wotd1.word_en} today, ${wotdTomorrow.word_en} tomorrow)`);

console.log('\n[ALL INTEGRATION & UNIT TESTS PASSED SUCCESSFULLY! 🚀]');
