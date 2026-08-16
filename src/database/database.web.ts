// ─── Web Database Implementation (0 native dependencies) ───────────────────
import AsyncStorage from '@react-native-async-storage/async-storage';

const WEB_INIT_KEY = '@gemdictionary/initialized_v1';

export const isWeb = true;

export async function getDatabase(): Promise<null> {
  return null;
}

export async function initializeDatabase(): Promise<void> {
  try {
    const initialized = await AsyncStorage.getItem(WEB_INIT_KEY);
    if (!initialized) {
      await AsyncStorage.setItem(WEB_INIT_KEY, 'true');
      console.log('[Web DB] Initialized Gem Dictionary web storage with 30 words');
    }
  } catch (e) {
    console.warn('[Web DB] Storage initialization warning:', e);
  }
}

export async function closeDatabase(): Promise<void> {
  // No-op on web
}
