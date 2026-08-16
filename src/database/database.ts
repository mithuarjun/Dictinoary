// ─── Database Type & Interface Bridge ─────────────────────────────────────────
import { Platform } from 'react-native';
import type { SQLiteDatabase } from 'expo-sqlite';

export const isWeb = Platform.OS === 'web';

export interface IDatabase {
  getAllAsync<T>(query: string, params?: any[]): Promise<T[]>;
  getFirstAsync<T>(query: string, params?: any[]): Promise<T | null>;
  runAsync(query: string, params?: any[]): Promise<any>;
  execAsync(queries: string): Promise<void>;
  withTransactionAsync(callback: () => Promise<void>): Promise<void>;
  closeAsync(): Promise<void>;
}

export async function getDatabase(): Promise<IDatabase | null> {
  if (isWeb) return null;
  const nativeDb = require('./database.native');
  return nativeDb.getDatabase();
}

export async function initializeDatabase(): Promise<void> {
  if (isWeb) {
    const webDb = require('./database.web');
    return webDb.initializeDatabase();
  }
  const nativeDb = require('./database.native');
  return nativeDb.initializeDatabase();
}

export async function closeDatabase(): Promise<void> {
  if (isWeb) return;
  const nativeDb = require('./database.native');
  return nativeDb.closeDatabase();
}
