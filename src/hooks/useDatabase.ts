// ─── Database Initialization Hook ────────────────────────────────────────────

import { useState, useEffect } from 'react';
import { initializeDatabase } from '../database/database';

export interface DatabaseStatus {
  isReady: boolean;
  error: string | null;
}

export function useDatabase(): DatabaseStatus {
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    initializeDatabase()
      .then(() => {
        if (!cancelled) {
          console.log('[useDatabase] DB ready');
          setIsReady(true);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          console.error('[useDatabase] DB init error:', err);
          setError('Database initialization failed. Please restart the app.');
        }
      });

    return () => { cancelled = true; };
  }, []);

  return { isReady, error };
}
