// ─── useDictionaryAutocomplete Hook ─────────────────────────────────────────
// High-performance prefix autocomplete hook querying local SQLite database.
// Implements 120ms debounce and stale query cancellation.

import { useState, useEffect, useRef, useCallback } from 'react';
import { dictionaryRepository } from '../repositories/DictionaryRepository';
import { historyRepository } from '../repositories/HistoryRepository';
import { Word } from '../types';

export interface UseDictionaryAutocompleteOptions {
  debounceMs?: number;
  limit?: number;
}

export function useDictionaryAutocomplete({
  debounceMs = 120,
  limit = 10,
}: UseDictionaryAutocompleteOptions = {}) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Word[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Request ID ref to cancel stale async responses
  const lastRequestId = useRef(0);

  useEffect(() => {
    const trimmed = query.trim();

    if (!trimmed) {
      setSuggestions([]);
      setIsLoading(false);
      return;
    }

    const currentRequestId = ++lastRequestId.current;
    setIsLoading(true);

    const timer = setTimeout(async () => {
      try {
        const results = await dictionaryRepository.getAutocompleteSuggestions(trimmed, limit);
        // Only update if this is still the latest query request
        if (currentRequestId === lastRequestId.current) {
          setSuggestions(results);
          setIsLoading(false);
        }
      } catch (err) {
        console.error('[useDictionaryAutocomplete] query error:', err);
        if (currentRequestId === lastRequestId.current) {
          setIsLoading(false);
        }
      }
    }, debounceMs);

    return () => {
      clearTimeout(timer);
    };
  }, [query, debounceMs, limit]);

  const clearAutocomplete = useCallback(() => {
    setQuery('');
    setSuggestions([]);
    setIsLoading(false);
  }, []);

  const selectWord = useCallback(async (word: Word, onSelected?: (word: Word) => void) => {
    try {
      // Record in search history ONLY upon selection
      await historyRepository.addToHistory(word.id);
    } catch (err) {
      console.error('[useDictionaryAutocomplete] addToHistory error:', err);
    }
    onSelected?.(word);
  }, []);

  return {
    query,
    setQuery,
    suggestions,
    isLoading,
    clearAutocomplete,
    selectWord,
  };
}
