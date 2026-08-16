// ─── Favorites Repository ─────────────────────────────────────────────────────

import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase, isWeb } from '../database/database';
import { dictionaryRepository } from './DictionaryRepository';
import { Favorite, Word } from '../types';

const WEB_FAVORITES_KEY = '@gemdictionary/favorites';

interface FavoriteRow {
  id: number;
  word_id: number;
  added_at: number;
  word: string;
  word_normalized: string;
  hindi_meaning: string;
  part_of_speech: string;
  is_linguistic_entry: number;
}

function mapRow(row: FavoriteRow): Favorite {
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

  return { id: row.id, wordId: row.word_id, word, addedAt: row.added_at };
}

const FAVORITES_QUERY = `
  SELECT f.id, f.word_id, f.added_at,
         w.word, w.word_normalized, w.hindi_meaning, w.part_of_speech, w.is_linguistic_entry
  FROM favorites f
  JOIN words w ON w.id = f.word_id
`;

export const favoritesRepository = {
  async addFavorite(wordId: number): Promise<void> {
    if (isWeb) {
      try {
        const stored = await AsyncStorage.getItem(WEB_FAVORITES_KEY);
        const ids: number[] = stored ? JSON.parse(stored) : [];
        if (!ids.includes(wordId)) {
          ids.unshift(wordId);
          await AsyncStorage.setItem(WEB_FAVORITES_KEY, JSON.stringify(ids));
        }
      } catch (e) {
        console.error('[Favorites] addFavorite web error:', e);
      }
      return;
    }

    const db = await getDatabase();
    if (!db) return;
    await db.runAsync(
      'INSERT OR IGNORE INTO favorites (word_id) VALUES (?)',
      [wordId]
    );
  },

  async removeFavorite(wordId: number): Promise<void> {
    if (isWeb) {
      try {
        const stored = await AsyncStorage.getItem(WEB_FAVORITES_KEY);
        const ids: number[] = stored ? JSON.parse(stored) : [];
        const filtered = ids.filter((id) => id !== wordId);
        await AsyncStorage.setItem(WEB_FAVORITES_KEY, JSON.stringify(filtered));
      } catch (e) {
        console.error('[Favorites] removeFavorite web error:', e);
      }
      return;
    }

    const db = await getDatabase();
    if (!db) return;
    await db.runAsync(
      'DELETE FROM favorites WHERE word_id = ?',
      [wordId]
    );
  },

  async isFavorite(wordId: number): Promise<boolean> {
    if (isWeb) {
      try {
        const stored = await AsyncStorage.getItem(WEB_FAVORITES_KEY);
        const ids: number[] = stored ? JSON.parse(stored) : [];
        return ids.includes(wordId);
      } catch {
        return false;
      }
    }

    const db = await getDatabase();
    if (!db) return false;
    const result = await db.getFirstAsync<{ count: number }>(
      'SELECT COUNT(*) as count FROM favorites WHERE word_id = ?',
      [wordId]
    );
    return (result?.count ?? 0) > 0;
  },

  async getAllFavorites(): Promise<Favorite[]> {
    if (isWeb) {
      try {
        const stored = await AsyncStorage.getItem(WEB_FAVORITES_KEY);
        const ids: number[] = stored ? JSON.parse(stored) : [];
        const favorites: Favorite[] = [];

        for (let i = 0; i < ids.length; i++) {
          const word = await dictionaryRepository.getWordById(ids[i]);
          if (word) {
            favorites.push({
              id: i + 1,
              wordId: word.id,
              word,
              addedAt: Date.now(),
            });
          }
        }
        return favorites;
      } catch {
        return [];
      }
    }

    const db = await getDatabase();
    if (!db) return [];
    const rows = await db.getAllAsync<FavoriteRow>(
      `${FAVORITES_QUERY} ORDER BY f.added_at DESC`
    );
    return rows.map(mapRow);
  },

  async getFavoriteCount(): Promise<number> {
    if (isWeb) {
      const favs = await this.getAllFavorites();
      return favs.length;
    }
    const db = await getDatabase();
    if (!db) return 0;
    const result = await db.getFirstAsync<{ count: number }>(
      'SELECT COUNT(*) as count FROM favorites'
    );
    return result?.count ?? 0;
  },
};
