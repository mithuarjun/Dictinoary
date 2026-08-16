import { getTopHindiMeanings, formatTopHindiMeanings } from '../src/utils/formatDictionaryMeanings';

console.log('=== TESTING HINDI MEANING FORMATTER ===');

// 1. "go" test with lots of meanings and duplicates
const goRaw = "करना / होना / चलना / उत्पन्न होना / बजना / सहायता करना / लगना / जाना / खराब होना / चलना / बंद होना / ख़राब / उपलब्ध होना / निकल जाना / हो जाना";
const goFormatted = formatTopHindiMeanings(goRaw, 4);
const goArray = getTopHindiMeanings(goRaw, 4);
console.log('\n[Test 1 - "go" (15 meanings)]');
console.log('Raw:', goRaw);
console.log('Formatted (max 4):', goFormatted);
console.log('Array:', goArray);
if (goArray.length <= 4) {
  console.log('✅ PASS: Exactly <= 4 meanings returned');
} else {
  console.error('❌ FAIL: More than 4 meanings returned');
}

// 2. "educationally" test (2 meanings)
const eduRaw = "शैक्षिक रूप से / शैक्षिक";
const eduFormatted = formatTopHindiMeanings(eduRaw, 4);
const eduArray = getTopHindiMeanings(eduRaw, 4);
console.log('\n[Test 2 - "educationally" (2 meanings)]');
console.log('Raw:', eduRaw);
console.log('Formatted:', eduFormatted);
console.log('Array:', eduArray);
if (eduArray.length === 2 && eduFormatted === "शैक्षिक रूप से / शैक्षिक") {
  console.log('✅ PASS: Preserved both meanings without padding');
} else {
  console.error('❌ FAIL');
}

// 3. Artifact cleanup test
const artifactRaw = "समाना[<जाना] / हो_जाना{स्थिति} / गुटका{माला का दाना} / खराब / ख़राब";
const artFormatted = formatTopHindiMeanings(artifactRaw, 4);
const artArray = getTopHindiMeanings(artifactRaw, 4);
console.log('\n[Test 3 - Artifacts & Duplicate Nukta]');
console.log('Raw:', artifactRaw);
console.log('Formatted:', artFormatted);
console.log('Array:', artArray);
if (!artFormatted.includes('[') && !artFormatted.includes('_') && artArray.length === 4) {
  console.log('✅ PASS: Cleaned machine artifacts & removed duplicate ख़राब');
} else {
  console.error('❌ FAIL');
}
