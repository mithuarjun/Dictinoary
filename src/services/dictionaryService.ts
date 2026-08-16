// ─── Student Dictionary Service Layer ──────────────────────────────────────────
// Supports English-to-Hindi and Hindi-to-English lookups, categories, and Word of the Day.
// Seamless across Android SQLite (table: words) and Web Offline fallback.

import { Platform } from 'react-native';
import * as FileSystem from 'expo-file-system/legacy';
import { Asset } from 'expo-asset';
import * as SQLite from 'expo-sqlite';

import {
  studentDictionaryEntries,
} from '../data/studentDictionaryData';

export type LanguageMode = 'en' | 'hi';

export interface DictionaryItem {
  id: number;
  word_en: string;
  word_hi: string;
  phonetic?: string;
  part_of_speech?: string;
  example_en?: string;
  example_hi?: string;
  category?: string;
}

interface WordRow {
  id: number;
  word: string;
  word_normalized: string;
  hindi_meaning: string;
  part_of_speech: string;
  is_linguistic_entry: number;
}

const DB_FILENAME = 'dictionary.db';
let dbInstance: SQLite.SQLiteDatabase | null = null;
let isInitialized = false;

export async function initDictionaryDB(): Promise<void> {
  if (isInitialized) return;

  if (Platform.OS === 'web') {
    isInitialized = true;
    return;
  }

  try {
    const sqliteDir = `${FileSystem.documentDirectory}SQLite`;
    const sqliteFile = `${sqliteDir}/${DB_FILENAME}`;

    const dirInfo = await FileSystem.getInfoAsync(sqliteDir);
    if (!dirInfo.exists) {
      await FileSystem.makeDirectoryAsync(sqliteDir, { intermediates: true });
    }

    const fileInfo = await FileSystem.getInfoAsync(sqliteFile);
    if (!fileInfo.exists || (fileInfo.size && fileInfo.size < 1000000)) {
      console.log('[StudentDict] Copying assets/dictionary.db to SQLite directory...');
      const asset = Asset.fromModule(require('../../assets/dictionary.db'));
      await asset.downloadAsync();

      if (asset.localUri) {
        await FileSystem.copyAsync({
          from: asset.localUri,
          to: sqliteFile,
        });
        console.log('[StudentDict] Database copied successfully.');
      }
    }

    dbInstance = await SQLite.openDatabaseAsync(DB_FILENAME);
    await dbInstance.execAsync('PRAGMA journal_mode = WAL;');

    isInitialized = true;
    console.log('[StudentDict] Native SQLite database initialized.');
  } catch (error) {
    console.warn('[StudentDict] initDictionaryDB fallback:', error);
    isInitialized = true;
  }
}

export async function searchWords(
  query: string,
  lang: LanguageMode = 'en',
  limit: number = 30
): Promise<DictionaryItem[]> {
  const trimmed = query.trim();
  if (!trimmed) return [];

  // Web fallback using student dataset
  if (Platform.OS === 'web' || !dbInstance) {
    const qLower = trimmed.toLowerCase();

    const matches = studentDictionaryEntries.filter((item) => {
      if (lang === 'en') {
        return item.word_en.toLowerCase().includes(qLower);
      } else {
        return item.word_hi.includes(trimmed);
      }
    });

    return matches
      .sort((a, b) => {
        if (lang === 'en') {
          const aLower = a.word_en.toLowerCase();
          const bLower = b.word_en.toLowerCase();
          if (aLower === qLower && bLower !== qLower) return -1;
          if (bLower === qLower && aLower !== qLower) return 1;
          if (aLower.startsWith(qLower) && !bLower.startsWith(qLower)) return -1;
          if (bLower.startsWith(qLower) && !aLower.startsWith(qLower)) return 1;
          return aLower.localeCompare(bLower);
        } else {
          if (a.word_hi.startsWith(trimmed) && !b.word_hi.startsWith(trimmed)) return -1;
          if (b.word_hi.startsWith(trimmed) && !a.word_hi.startsWith(trimmed)) return 1;
          return a.word_hi.localeCompare(b.word_hi);
        }
      })
      .slice(0, limit);
  }

  // Native SQLite indexed search on table 'words'
  try {
    const norm = trimmed.toLowerCase();
    const prefixParam = `${norm}%`;
    const containsParam = `%${norm}%`;

    const rows = await dbInstance.getAllAsync<WordRow>(
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
      [prefixParam, containsParam, norm, prefixParam, limit]
    );

    return rows.map((r) => ({
      id: r.id,
      word_en: r.word,
      word_hi: r.hindi_meaning,
      part_of_speech: r.part_of_speech || 'Word',
      category: r.is_linguistic_entry === 1 ? 'linguistic' : 'general',
    }));
  } catch (error) {
    console.error('[StudentDict] searchWords error:', error);
    return [];
  }
}

export async function getWordDetails(word: string): Promise<DictionaryItem | null> {
  const trimmed = word.trim();
  if (!trimmed) return null;

  if (Platform.OS === 'web' || !dbInstance) {
    const qLower = trimmed.toLowerCase();
    const found = studentDictionaryEntries.find(
      (item) =>
        item.word_en.toLowerCase() === qLower ||
        item.word_hi.toLowerCase() === qLower
    );
    return found ?? null;
  }

  try {
    const norm = trimmed.toLowerCase();
    const row = await dbInstance.getFirstAsync<WordRow>(
      `SELECT id, word, word_normalized, hindi_meaning, part_of_speech, is_linguistic_entry
       FROM words
       WHERE word_normalized = ?
       LIMIT 1`,
      [norm]
    );

    if (!row) return null;

    return {
      id: row.id,
      word_en: row.word,
      word_hi: row.hindi_meaning,
      part_of_speech: row.part_of_speech || 'Word',
      category: row.is_linguistic_entry === 1 ? 'linguistic' : 'general',
    };
  } catch (error) {
    console.error('[StudentDict] getWordDetails error:', error);
    return null;
  }
}

export async function getWordsByCategory(
  category: string,
  limit: number = 50
): Promise<DictionaryItem[]> {
  const trimmed = category.trim();

  if (Platform.OS === 'web' || !dbInstance) {
    if (!trimmed || trimmed === 'All' || trimmed === 'all') {
      return studentDictionaryEntries.slice(0, limit);
    }
    return studentDictionaryEntries
      .filter((item) => item.category.toLowerCase() === trimmed.toLowerCase())
      .slice(0, limit);
  }

  try {
    const rows = await dbInstance.getAllAsync<WordRow>(
      `SELECT id, word, word_normalized, hindi_meaning, part_of_speech, is_linguistic_entry
       FROM words
       WHERE is_linguistic_entry = 0
       ORDER BY word ASC
       LIMIT ?`,
      [limit]
    );

    return rows.map((r) => ({
      id: r.id,
      word_en: r.word,
      word_hi: r.hindi_meaning,
      part_of_speech: r.part_of_speech || 'Word',
      category: 'general',
    }));
  } catch (error) {
    console.error('[StudentDict] getWordsByCategory error:', error);
    return [];
  }
}

export async function getWordOfTheDay(): Promise<DictionaryItem | null> {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (Platform.OS === 'web' || !dbInstance) {
    const total = studentDictionaryEntries.length;
    if (total === 0) return null;
    return studentDictionaryEntries[dayOfYear % total];
  }

  try {
    const countRow = await dbInstance.getFirstAsync<{ total: number }>(
      'SELECT COUNT(*) as total FROM words WHERE is_linguistic_entry = 0'
    );
    const total = countRow?.total || 1000;
    const offset = dayOfYear % total;

    const row = await dbInstance.getFirstAsync<WordRow>(
      `SELECT id, word, word_normalized, hindi_meaning, part_of_speech, is_linguistic_entry
       FROM words
       WHERE is_linguistic_entry = 0
       ORDER BY id ASC
       LIMIT 1 OFFSET ?`,
      [offset]
    );

    if (!row) return studentDictionaryEntries[0];

    return {
      id: row.id,
      word_en: row.word,
      word_hi: row.hindi_meaning,
      part_of_speech: row.part_of_speech || 'Word',
      category: 'general',
    };
  } catch (error) {
    console.error('[StudentDict] getWordOfTheDay error:', error);
    return studentDictionaryEntries[0];
  }
}

export const dictionaryService = {
  initDictionaryDB,
  searchWords,
  getWordDetails,
  getWordsByCategory,
  getWordOfTheDay,
};
