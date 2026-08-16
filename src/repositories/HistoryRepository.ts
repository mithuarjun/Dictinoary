// ─── Search History Repository ────────────────────────────────────────────────
// Max 50 entries. Multiplatform: Native SQLite and Web AsyncStorage fallback.

import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase, isWeb } from '../database/database';
import { dictionaryRepository } from './DictionaryRepository';
import { SearchHistoryEntry, Word } from '../types';

const MAX_HISTORY = 50;
const WEB_HISTORY_KEY = '@gemdictionary/search_history';

interface HistoryRow {
  id: number;
  word_id: number;
  searched_at: number;
  word: string;
  word_normalized: string;
  hindi_meaning: string;
  part_of_speech: string;
  is_linguistic_entry: number;
}

function mapRow(row: HistoryRow): SearchHistoryEntry {
  const word: Word = {
    id: row.word_id,
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

  return { id: row.id, wordId: row.word_id, word, searchedAt: row.searched_at };
}

export const historyRepository = {
  async addToHistory(wordId: number): Promise<void> {
    if (isWeb) {
      try {
        const stored = await AsyncStorage.getItem(WEB_HISTORY_KEY);
        let ids: number[] = stored ? JSON.parse(stored) : [];
        // Deduplicate
        ids = ids.filter((id) => id !== wordId);
        // Prepend
        ids.unshift(wordId);
        // Limit to 50
        if (ids.length > MAX_HISTORY) {
          ids = ids.slice(0, MAX_HISTORY);
        }
        await AsyncStorage.setItem(WEB_HISTORY_KEY, JSON.stringify(ids));
      } catch (e) {
        console.error('[History] addToHistory web error:', e);
      }
      return;
    }

    const db = await getDatabase();
    if (!db) return;

    await db.withTransactionAsync(async () => {
      await db.runAsync(
        'DELETE FROM search_history WHERE word_id = ?',
        [wordId]
      );

      await db.runAsync(
        'INSERT INTO search_history (word_id) VALUES (?)',
        [wordId]
      );

      await db.runAsync(
        `DELETE FROM search_history
         WHERE id NOT IN (
           SELECT id FROM search_history
           ORDER BY searched_at DESC
           LIMIT ?
         )`,
        [MAX_HISTORY]
      );
    });
  },

  async removeFromHistory(wordId: number): Promise<void> {
    if (isWeb) {
      try {
        const stored = await AsyncStorage.getItem(WEB_HISTORY_KEY);
        let ids: number[] = stored ? JSON.parse(stored) : [];
        ids = ids.filter((id) => id !== wordId);
        await AsyncStorage.setItem(WEB_HISTORY_KEY, JSON.stringify(ids));
      } catch {}
      return;
    }

    const db = await getDatabase();
    if (!db) return;
    await db.runAsync('DELETE FROM search_history WHERE word_id = ?', [wordId]);
  },

  async getHistory(): Promise<SearchHistoryEntry[]> {
    if (isWeb) {
      try {
        const stored = await AsyncStorage.getItem(WEB_HISTORY_KEY);
        const ids: number[] = stored ? JSON.parse(stored) : [];
        const entries: SearchHistoryEntry[] = [];

        for (let i = 0; i < ids.length; i++) {
          const word = await dictionaryRepository.getWordById(ids[i]);
          if (word) {
            entries.push({
              id: i + 1,
              wordId: word.id,
              word,
              searchedAt: Date.now() - i * 1000,
            });
          }
        }
        return entries;
      } catch {
        return [];
      }
    }

    const db = await getDatabase();
    if (!db) return [];
    const rows = await db.getAllAsync<HistoryRow>(
      `SELECT h.id, h.word_id, h.searched_at,
              w.word, w.word_normalized, w.hindi_meaning, w.part_of_speech, w.is_linguistic_entry
       FROM search_history h
       JOIN words w ON w.id = h.word_id
       ORDER BY h.searched_at DESC
       LIMIT ?`,
      [MAX_HISTORY]
    );
    return rows.map(mapRow);
  },

  async clearHistory(): Promise<void> {
    if (isWeb) {
      try {
        await AsyncStorage.removeItem(WEB_HISTORY_KEY);
      } catch {}
      return;
    }

    const db = await getDatabase();
    if (!db) return;
    await db.runAsync('DELETE FROM search_history');
  },

  async getHistoryCount(): Promise<number> {
    if (isWeb) {
      const h = await this.getHistory();
      return h.length;
    }
    const db = await getDatabase();
    if (!db) return 0;
    const result = await db.getFirstAsync<{ count: number }>(
      'SELECT COUNT(*) as count FROM search_history'
    );
    return result?.count ?? 0;
  },
};
