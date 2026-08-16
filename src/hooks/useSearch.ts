// ─── Search Hook ──────────────────────────────────────────────────────────────

import { useState, useCallback, useRef } from 'react';
import { Word } from '../types';
import { dictionaryRepository } from '../repositories/DictionaryRepository';

export function useSearch() {
  const [results, setResults] = useState<Word[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastQuery, setLastQuery] = useState('');
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const search = useCallback((query: string) => {
    const trimmed = query.trim();
    setLastQuery(trimmed);

    if (!trimmed) {
      setResults([]);
      setIsLoading(false);
      setError(null);
      return;
    }

    // Debounce by 200ms
    if (debounceRef.current) clearTimeout(debounceRef.current);

    setIsLoading(true);
    debounceRef.current = setTimeout(async () => {
      try {
        const words = await dictionaryRepository.searchWords(trimmed);
        setResults(words);
        setError(null);
      } catch (err) {
        console.error('[useSearch] error:', err);
        setError(null); // Don't show technical errors
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 200);
  }, []);

  const clearSearch = useCallback(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    setResults([]);
    setLastQuery('');
    setIsLoading(false);
    setError(null);
  }, []);

  return { results, isLoading, error, lastQuery, search, clearSearch };
}
