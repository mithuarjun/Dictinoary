// ─── Format Dictionary Meanings Utility ──────────────────────────────────────
// Cleans raw Hindi dictionary meanings, removes machine artifacts & duplicates,
// and limits output to a maximum of 4 clean, student-friendly meanings.

/**
 * Normalizes a Hindi string for duplicate detection by removing nuktas and trailing punctuation.
 */
function normalizeHindiForComparison(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u093C]/g, '') // remove Devanagari sign nukta for comparison
    .trim()
    .toLowerCase();
}

/**
 * Cleans a single Hindi meaning token of raw machine-generated tags and artifacts.
 */
function cleanMeaningToken(raw: string): string {
  let cleaned = raw;

  // Replace underscores with spaces (e.g., "हो_जाना" -> "हो जाना")
  cleaned = cleaned.replace(/_/g, ' ');

  // Remove machine reference tags like "[<जाना]", "[...]", "<...>"
  cleaned = cleaned.replace(/\[<[^\]]*\]/g, '');
  cleaned = cleaned.replace(/<[^>]*>/g, '');
  cleaned = cleaned.replace(/\[[^\]]*\]/g, '');

  // Convert curly brace annotations into standard readable parenthetical or remove if noisy
  // e.g. "{स्थिति}" -> "(स्थिति)"
  cleaned = cleaned.replace(/\{([^}]+)\}/g, '($1)');

  // Clean dangling brackets/symbols
  cleaned = cleaned.replace(/[<>[\]{}]/g, '');

  // Collapse multiple spaces
  cleaned = cleaned.replace(/\s+/g, ' ').trim();

  return cleaned;
}

/**
 * Extracts and returns at most `limit` (default: 4) clean, unique Hindi meanings.
 *
 * @param rawMeaning The raw string of Hindi meanings from the database.
 * @param limit The maximum number of meanings to return (default: 4).
 * @returns An array of cleaned Hindi meaning strings.
 */
export function getTopHindiMeanings(rawMeaning: string | null | undefined, limit = 4): string[] {
  if (!rawMeaning || typeof rawMeaning !== 'string') {
    return [];
  }

  // Split by '/' which is the primary separator in the dataset
  const parts = rawMeaning.split('/');
  const results: string[] = [];
  const seen = new Set<string>();

  for (const part of parts) {
    if (results.length >= limit) {
      break;
    }

    const cleaned = cleanMeaningToken(part);
    if (!cleaned) {
      continue;
    }

    const normalizedKey = normalizeHindiForComparison(cleaned);
    if (normalizedKey.length === 0 || seen.has(normalizedKey)) {
      continue;
    }

    seen.add(normalizedKey);
    results.push(cleaned);
  }

  return results;
}

/**
 * Returns a formatted string containing at most `limit` (default: 4) clean Hindi meanings
 * joined by a separator (default: ' / ').
 *
 * @param rawMeaning The raw string of Hindi meanings.
 * @param limit The maximum number of meanings (default: 4).
 * @param separator The joining string (default: ' / ').
 * @returns Formatted Hindi text.
 */
export function formatTopHindiMeanings(
  rawMeaning: string | null | undefined,
  limit = 4,
  separator = ' / '
): string {
  const meanings = getTopHindiMeanings(rawMeaning, limit);
  return meanings.join(separator);
}
