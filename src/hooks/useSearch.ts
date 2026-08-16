// ─── Search Hook ──────────────────────────────────────────────────────────────
// Fast, live debounced search with query cancellation for stale requests.

import { useState, useCallback, useRef } from 'react';
import { Word } from '../types';
import { dictionaryRepository } from '../repositories/DictionaryRepository';

export function useSearch(debounceMs = 120) {
  const [results, setResults] = useState<Word[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastQuery, setLastQuery] = useState('');
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastRequestId = useRef(0);

  const search = useCallback((query: string) => {
    const trimmed = query.trim();
    setLastQuery(trimmed);

    if (!trimmed) {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      setResults([]);
      setIsLoading(false);
      setError(null);
      return;
    }

    if (debounceRef.current) clearTimeout(debounceRef.current);

    const currentRequestId = ++lastRequestId.current;
    setIsLoading(true);

    debounceRef.current = setTimeout(async () => {
      try {
        const words = await dictionaryRepository.getAutocompleteSuggestions(trimmed, 20);
        if (currentRequestId === lastRequestId.current) {
          setResults(words);
          setError(null);
          setIsLoading(false);
        }
      } catch (err) {
        console.error('[useSearch] error:', err);
        if (currentRequestId === lastRequestId.current) {
          setError(null);
          setResults([]);
          setIsLoading(false);
        }
      }
    }, debounceMs);
  }, [debounceMs]);

  const clearSearch = useCallback(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    setResults([]);
    setLastQuery('');
    setIsLoading(false);
    setError(null);
  }, []);

  return { results, isLoading, error, lastQuery, search, clearSearch };
}
