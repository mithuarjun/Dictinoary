// ─── Core Types ───────────────────────────────────────────────────────────────

export interface DictionaryWord {
  id: number;
  word: string;
  word_normalized: string;
  hindi_meaning: string;
  part_of_speech: string;
  is_linguistic_entry: number;
}

export interface Word {
  id: number;
  word: string;
  word_normalized?: string;
  meaningHindi: string;
  definition?: string;
  synonyms?: string[];
  antonyms?: string[];
  example?: string;
  pronunciation?: string;
  partOfSpeech: string;
  is_linguistic_entry?: number;
  createdAt?: number;
}

export interface Favorite {
  id: number;
  wordId: number;
  word: Word;
  addedAt: number;
}

export interface SearchHistoryEntry {
  id: number;
  wordId: number;
  word: Word;
  searchedAt: number;
}

export interface SearchResult {
  words: Word[];
  query: string;
  isLoading: boolean;
  error: string | null;
}

export type ThemeMode = 'light' | 'dark' | 'system';

export interface AppTheme {
  mode: ThemeMode;
  isDark: boolean;
  colors: ThemeColors;
}

export interface ThemeColors {
  // Primary
  primary: string;
  primaryLight: string;
  primaryDark: string;
  onPrimary: string;

  // Surface
  background: string;
  surface: string;
  surfaceVariant: string;
  card: string;

  // Text
  text: string;
  textSecondary: string;
  textTertiary: string;
  textOnPrimary: string;

  // Borders & Dividers
  border: string;
  divider: string;

  // Status
  success: string;
  error: string;
  warning: string;
  info: string;

  // Chip
  chipBackground: string;
  chipText: string;

  // Shadow
  shadow: string;

  // Misc
  placeholder: string;
  searchBackground: string;
  overlay: string;
  favoriteActive: string;
  hindi: string;
}
