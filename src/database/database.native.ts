// ─── Native Database Implementation (Android / iOS SQLite) ───────────────────
import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system/legacy';
import { Asset } from 'expo-asset';

const DB_FILENAME = 'dictionary.db';

let db: SQLite.SQLiteDatabase | null = null;

export const isWeb = false;

export async function getDatabase(): Promise<SQLite.SQLiteDatabase> {
  if (db) return db;

  const sqliteDir = `${FileSystem.documentDirectory}SQLite`;
  const sqliteFile = `${sqliteDir}/${DB_FILENAME}`;

  const dirInfo = await FileSystem.getInfoAsync(sqliteDir);
  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(sqliteDir, { intermediates: true });
  }

  const fileInfo = await FileSystem.getInfoAsync(sqliteFile);
  let copyNeeded = !fileInfo.exists || (fileInfo.size && fileInfo.size < 1000000);

  if (!copyNeeded) {
    try {
      const checkDb = await SQLite.openDatabaseAsync(DB_FILENAME);
      const tableCheck = await checkDb.getFirstAsync<{ count: number }>(
        "SELECT COUNT(*) as count FROM sqlite_master WHERE type='table' AND name='verb_forms'"
      );
      if (!tableCheck || tableCheck.count === 0) {
        copyNeeded = true;
      } else {
        const vfCount = await checkDb.getFirstAsync<{ count: number }>(
          'SELECT COUNT(*) as count FROM verb_forms'
        );
        if (!vfCount || vfCount.count === 0) {
          copyNeeded = true;
        }
      }
      await checkDb.closeAsync();
    } catch {
      copyNeeded = true;
    }
  }

  if (copyNeeded) {
    console.log('[Native DB] Copying/updating dictionary.db from assets...');
    try {
      const asset = Asset.fromModule(require('../../assets/dictionary.db'));
      await asset.downloadAsync();
      if (asset.localUri) {
        await FileSystem.copyAsync({
          from: asset.localUri,
          to: sqliteFile,
        });
        console.log('[Native DB] Copied updated dictionary.db successfully.');
      }
    } catch (err) {
      console.warn('[Native DB] Asset copy failed:', err);
    }
  }

  db = await SQLite.openDatabaseAsync(DB_FILENAME);
  return db;
}

export async function initializeDatabase(): Promise<void> {
  const database = await getDatabase();

  await database.execAsync('PRAGMA journal_mode = WAL;');
  await database.execAsync('PRAGMA foreign_keys = ON;');

  // Ensure tables and indexes exist
  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS words (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      word TEXT NOT NULL,
      word_normalized TEXT NOT NULL,
      hindi_meaning TEXT NOT NULL,
      part_of_speech TEXT,
      is_linguistic_entry INTEGER NOT NULL DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS verb_forms (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      v1 TEXT NOT NULL,
      v1_normalized TEXT NOT NULL,
      v2 TEXT NOT NULL,
      v2_normalized TEXT NOT NULL,
      v3 TEXT NOT NULL,
      v3_normalized TEXT NOT NULL,
      v4 TEXT NOT NULL,
      v4_normalized TEXT NOT NULL,
      v5 TEXT NOT NULL,
      v5_normalized TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS favorites (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      word_id INTEGER NOT NULL REFERENCES words(id) ON DELETE CASCADE,
      added_at INTEGER NOT NULL DEFAULT (strftime('%s','now')),
      UNIQUE(word_id)
    );

    CREATE TABLE IF NOT EXISTS search_history (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      word_id INTEGER NOT NULL REFERENCES words(id) ON DELETE CASCADE,
      searched_at INTEGER NOT NULL DEFAULT (strftime('%s','now'))
    );

    CREATE INDEX IF NOT EXISTS idx_words_normalized ON words(word_normalized);
    CREATE INDEX IF NOT EXISTS idx_words_word ON words(word COLLATE NOCASE);
    CREATE INDEX IF NOT EXISTS idx_words_linguistic ON words(is_linguistic_entry);
    CREATE INDEX IF NOT EXISTS idx_vf_v1 ON verb_forms(v1_normalized);
    CREATE INDEX IF NOT EXISTS idx_vf_v2 ON verb_forms(v2_normalized);
    CREATE INDEX IF NOT EXISTS idx_vf_v3 ON verb_forms(v3_normalized);
    CREATE INDEX IF NOT EXISTS idx_vf_v4 ON verb_forms(v4_normalized);
    CREATE INDEX IF NOT EXISTS idx_vf_v5 ON verb_forms(v5_normalized);
    CREATE INDEX IF NOT EXISTS idx_favorites_word_id ON favorites(word_id);
    CREATE INDEX IF NOT EXISTS idx_history_searched_at ON search_history(searched_at DESC);
  `);

  console.log('[Native DB] Native SQLite dictionary ready.');
}

export async function closeDatabase(): Promise<void> {
  if (db) {
    await db.closeAsync();
    db = null;
  }
}
