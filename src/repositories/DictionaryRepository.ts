// ─── Dictionary Repository ────────────────────────────────────────────────────
// High-performance SQLite indexed search & prefix autocomplete for 65,000+ words.
// Does NOT load all rows into memory. Uses SQL LIMIT and indexes.

import { getDatabase, isWeb } from '../database/database';
import { Word } from '../types';
import { studentDictionaryEntries } from '../data/studentDictionaryData';

export interface DictionaryRepository {
  searchWords(query: string, limit?: number): Promise<Word[]>;
  getAutocompleteSuggestions(query: string, limit?: number): Promise<Word[]>;
  getWordById(id: number): Promise<Word | null>;
  getWordByText(word: string): Promise<Word | null>;
  getWordOfDay(): Promise<Word | null>;
  getAllWords(limit?: number): Promise<Word[]>;
}

interface WordRow {
  id: number;
  word: string;
  word_normalized: string;
  hindi_meaning: string;
  part_of_speech: string;
  is_linguistic_entry: number;
}

function mapRowToWord(row: WordRow): Word {
  return {
    id: row.id,
    word: row.word,
    word_normalized: row.word_normalized,
    meaningHindi: row.hindi_meaning,
    definition: '',
    synonyms: [],
    antonyms: [],
    example: '',
    pronunciation: '',
    partOfSpeech: row.part_of_speech || 'Word',
    is_linguistic_entry: row.is_linguistic_entry,
    createdAt: 0,
  };
}

// Starter fallback for web mode
const webWords: Word[] = studentDictionaryEntries.map((w, index) => ({
  id: w.id || index + 1,
  word: w.word_en,
  word_normalized: w.word_en.toLowerCase().trim(),
  meaningHindi: w.word_hi,
  definition: '',
  synonyms: [],
  antonyms: [],
  example: w.example_en || '',
  pronunciation: w.phonetic || '',
  partOfSpeech: w.part_of_speech || 'Word',
  is_linguistic_entry: 0,
  createdAt: 0,
}));

class SQLiteDictionaryRepository implements DictionaryRepository {
  async searchWords(query: string, limit: number = 30): Promise<Word[]> {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];

    if (isWeb) {
      return webWords
        .filter((w) => {
          const wNorm = (w.word_normalized || w.word.toLowerCase());
          const hNorm = (w.meaningHindi || '');
          return wNorm.includes(normalized) || hNorm.includes(query.trim());
        })
        .sort((a, b) => {
          const aNorm = (a.word_normalized || a.word.toLowerCase());
          const bNorm = (b.word_normalized || b.word.toLowerCase());
          if (aNorm === normalized) return -1;
          if (bNorm === normalized) return 1;

          const aPrefix = aNorm.startsWith(normalized);
          const bPrefix = bNorm.startsWith(normalized);
          if (aPrefix && !bPrefix) return -1;
          if (bPrefix && !aPrefix) return 1;

          return aNorm.localeCompare(bNorm);
        })
        .slice(0, limit);
    }

    // Android Native SQLite indexed search
    const db = await getDatabase();
    if (!db) return [];

    const prefixParam = `${normalized}%`;
    const containsParam = `%${normalized}%`;

    const rows = await db.getAllAsync<WordRow>(
      `SELECT id, word, word_normalized, hindi_meaning, part_of_speech, is_linguistic_entry
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
       LIMIT ?`,
      [prefixParam, containsParam, normalized, prefixParam, limit]
    );

    return rows.map(mapRowToWord);
  }

  async getAutocompleteSuggestions(query: string, limit: number = 10): Promise<Word[]> {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];

    if (isWeb) {
      return webWords
        .filter((w) => {
          const wNorm = (w.word_normalized || w.word.toLowerCase());
          return wNorm.startsWith(normalized) && !w.is_linguistic_entry;
        })
        .sort((a, b) => {
          const aNorm = (a.word_normalized || a.word.toLowerCase());
          const bNorm = (b.word_normalized || b.word.toLowerCase());
          if (aNorm === normalized) return -1;
          if (bNorm === normalized) return 1;
          if (aNorm.length !== bNorm.length) return aNorm.length - bNorm.length;
          return aNorm.localeCompare(bNorm);
        })
        .slice(0, limit);
    }

    const db = await getDatabase();
    if (!db) return [];

    const prefixParam = `${normalized}%`;

    const rows = await db.getAllAsync<WordRow>(
      `SELECT id, word, word_normalized, hindi_meaning, part_of_speech, is_linguistic_entry
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
       LIMIT ?`,
      [prefixParam, normalized, prefixParam, limit]
    );

    return rows.map(mapRowToWord);
  }

  async getWordById(id: number): Promise<Word | null> {
    if (isWeb) {
      return webWords.find((w) => w.id === id) ?? null;
    }

    const db = await getDatabase();
    if (!db) return webWords.find((w) => w.id === id) ?? null;

    const row = await db.getFirstAsync<WordRow>(
      'SELECT id, word, word_normalized, hindi_meaning, part_of_speech, is_linguistic_entry FROM words WHERE id = ?',
      [id]
    );
    return row ? mapRowToWord(row) : null;
  }

  async getWordByText(word: string): Promise<Word | null> {
    const normalized = word.trim().toLowerCase();
    if (isWeb) {
      return (
        webWords.find((w) => (w.word_normalized || w.word.toLowerCase()) === normalized) ?? null
      );
    }

    const db = await getDatabase();
    if (!db) return webWords.find((w) => (w.word_normalized || w.word.toLowerCase()) === normalized) ?? null;

    const row = await db.getFirstAsync<WordRow>(
      'SELECT id, word, word_normalized, hindi_meaning, part_of_speech, is_linguistic_entry FROM words WHERE word_normalized = ? LIMIT 1',
      [normalized]
    );
    return row ? mapRowToWord(row) : null;
  }

  async getWordOfDay(): Promise<Word | null> {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - startOfYear.getTime();
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (isWeb) {
      const index = dayOfYear % webWords.length;
      return webWords[index] || null;
    }

    const db = await getDatabase();
    if (!db) {
      const index = dayOfYear % webWords.length;
      return webWords[index] || null;
    }

    try {
      const countRow = await db.getFirstAsync<{ count: number }>(
        'SELECT COUNT(*) as count FROM words WHERE is_linguistic_entry = 0'
      );
      const total = countRow?.count || 1000;
      const offset = dayOfYear % total;

      const row = await db.getFirstAsync<WordRow>(
        'SELECT id, word, word_normalized, hindi_meaning, part_of_speech, is_linguistic_entry FROM words WHERE is_linguistic_entry = 0 ORDER BY id ASC LIMIT 1 OFFSET ?',
        [offset]
      );
      return row ? mapRowToWord(row) : webWords[0];
    } catch {
      return webWords[0];
    }
  }

  async getAllWords(limit: number = 50): Promise<Word[]> {
    if (isWeb) {
      return webWords.slice(0, limit);
    }

    const db = await getDatabase();
    if (!db) return webWords.slice(0, limit);

    const rows = await db.getAllAsync<WordRow>(
      'SELECT id, word, word_normalized, hindi_meaning, part_of_speech, is_linguistic_entry FROM words WHERE is_linguistic_entry = 0 ORDER BY word ASC LIMIT ?',
      [limit]
    );
    return rows.map(mapRowToWord);
  }
}

export const dictionaryRepository: DictionaryRepository =
  new SQLiteDictionaryRepository();
