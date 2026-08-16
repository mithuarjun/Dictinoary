// ─── Verb Form Repository ──────────────────────────────────────────────────────
// High-performance standalone SQLite search & autocomplete for 6,700+ Verb Forms.
// Strict prefix matching ONLY. Completely independent of dictionary tables.

import { getDatabase, isWeb } from '../database/database';
import { VerbForm } from '../types';
import verbFormsJson from '../data/verbFormsData.json';

export interface VerbFormSuggestion {
  id: number;
  matchedForm: string;
  v1: string;
}

export interface VerbFormRepository {
  searchVerbForms(query: string, limit?: number): Promise<VerbForm[]>;
  getAutocompleteSuggestions(query: string, limit?: number): Promise<VerbFormSuggestion[]>;
  getVerbFormByWord(query: string): Promise<VerbForm | null>;
  getVerbFormById(id: number): Promise<VerbForm | null>;
}

interface VerbFormRow {
  id: number;
  v1: string;
  v2: string;
  v3: string;
  v4: string;
  v5: string;
}

function mapRowToVerbForm(row: VerbFormRow): VerbForm {
  return {
    id: row.id,
    v1: row.v1,
    v2: row.v2,
    v3: row.v3,
    v4: row.v4,
    v5: row.v5,
  };
}

// Web mode standalone dataset
const webVerbForms: VerbForm[] = (verbFormsJson as any[]).map((row) => ({
  id: row.id,
  v1: row.v1,
  v2: row.v2,
  v3: row.v3,
  v4: row.v4,
  v5: row.v5,
}));

class SQLiteVerbFormRepository implements VerbFormRepository {
  async searchVerbForms(query: string, limit: number = 30): Promise<VerbForm[]> {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];

    if (isWeb) {
      return webVerbForms
        .filter((item) => {
          return (
            item.v1.toLowerCase().startsWith(normalized) ||
            item.v2.toLowerCase().startsWith(normalized) ||
            item.v3.toLowerCase().startsWith(normalized) ||
            item.v4.toLowerCase().startsWith(normalized) ||
            item.v5.toLowerCase().startsWith(normalized)
          );
        })
        .sort((a, b) => {
          const aExact =
            a.v1.toLowerCase() === normalized ||
            a.v2.toLowerCase() === normalized ||
            a.v3.toLowerCase() === normalized ||
            a.v4.toLowerCase() === normalized ||
            a.v5.toLowerCase() === normalized;
          const bExact =
            b.v1.toLowerCase() === normalized ||
            b.v2.toLowerCase() === normalized ||
            b.v3.toLowerCase() === normalized ||
            b.v4.toLowerCase() === normalized ||
            b.v5.toLowerCase() === normalized;

          if (aExact && !bExact) return -1;
          if (bExact && !aExact) return 1;

          return a.v1.localeCompare(b.v1);
        })
        .slice(0, limit);
    }

    const db = await getDatabase();
    if (!db) return [];

    const prefixParam = `${normalized}%`;

    const rows = await db.getAllAsync<VerbFormRow>(
      `SELECT id, v1, v2, v3, v4, v5
       FROM verb_forms
       WHERE 
         v1_normalized LIKE ? OR 
         v2_normalized LIKE ? OR 
         v3_normalized LIKE ? OR 
         v4_normalized LIKE ? OR 
         v5_normalized LIKE ?
       ORDER BY
         CASE
           WHEN v1_normalized = ? THEN 0
           WHEN v2_normalized = ? THEN 0
           WHEN v3_normalized = ? THEN 0
           WHEN v4_normalized = ? THEN 0
           WHEN v5_normalized = ? THEN 0
           WHEN v1_normalized LIKE ? THEN 1
           WHEN v2_normalized LIKE ? THEN 1
           WHEN v3_normalized LIKE ? THEN 1
           WHEN v4_normalized LIKE ? THEN 1
           WHEN v5_normalized LIKE ? THEN 1
           ELSE 2
         END,
         length(v1) ASC,
         v1 ASC
       LIMIT ?`,
      [
        prefixParam, prefixParam, prefixParam, prefixParam, prefixParam,
        normalized, normalized, normalized, normalized, normalized,
        prefixParam, prefixParam, prefixParam, prefixParam, prefixParam,
        limit,
      ]
    );

    return rows.map(mapRowToVerbForm);
  }

  async getAutocompleteSuggestions(query: string, limit: number = 10): Promise<VerbFormSuggestion[]> {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];

    if (isWeb) {
      const suggestionsMap = new Map<string, { id: number; v1: string }>();
      // Pass 1: Exact matches first
      for (const item of webVerbForms) {
        const forms = [item.v1, item.v2, item.v3, item.v4, item.v5];
        for (const form of forms) {
          if (form.toLowerCase().trim() === normalized) {
            if (!suggestionsMap.has(form.toLowerCase())) {
              suggestionsMap.set(form.toLowerCase(), { id: item.id, v1: item.v1 });
            }
          }
        }
      }
      // Pass 2: Prefix matches second
      for (const item of webVerbForms) {
        const forms = [item.v1, item.v2, item.v3, item.v4, item.v5];
        for (const form of forms) {
          if (form.toLowerCase().trim().startsWith(normalized)) {
            if (!suggestionsMap.has(form.toLowerCase())) {
              suggestionsMap.set(form.toLowerCase(), { id: item.id, v1: item.v1 });
            }
          }
        }
        if (suggestionsMap.size >= limit) break;
      }
      return Array.from(suggestionsMap.entries())
        .slice(0, limit)
        .map(([form, meta]) => ({
          id: meta.id,
          matchedForm: form,
          v1: meta.v1,
        }));
    }

    const db = await getDatabase();
    if (!db) return [];

    const prefixParam = `${normalized}%`;

    interface SuggestionRow {
      id: number;
      matched_form: string;
      v1: string;
    }

    const rows = await db.getAllAsync<SuggestionRow>(
      `SELECT DISTINCT
        vf.id,
        CASE
          WHEN v1_normalized = ? THEN v1
          WHEN v2_normalized = ? THEN v2
          WHEN v3_normalized = ? THEN v3
          WHEN v4_normalized = ? THEN v4
          WHEN v5_normalized = ? THEN v5
          WHEN v1_normalized LIKE ? THEN v1
          WHEN v2_normalized LIKE ? THEN v2
          WHEN v3_normalized LIKE ? THEN v3
          WHEN v4_normalized LIKE ? THEN v4
          WHEN v5_normalized LIKE ? THEN v5
        END as matched_form,
        v1
       FROM verb_forms vf
       WHERE 
         v1_normalized LIKE ? OR 
         v2_normalized LIKE ? OR 
         v3_normalized LIKE ? OR 
         v4_normalized LIKE ? OR 
         v5_normalized LIKE ?
       ORDER BY
         CASE
           WHEN LOWER(matched_form) = ? THEN 0
           WHEN LOWER(matched_form) LIKE ? THEN 1
           ELSE 2
         END,
         length(matched_form) ASC,
         matched_form ASC
       LIMIT ?`,
      [
        normalized, normalized, normalized, normalized, normalized,
        prefixParam, prefixParam, prefixParam, prefixParam, prefixParam,
        prefixParam, prefixParam, prefixParam, prefixParam, prefixParam,
        normalized, prefixParam,
        limit,
      ]
    );

    // Deduplicate suggestions by matchedForm preserving ranking order
    const seen = new Set<string>();
    const deduped: VerbFormSuggestion[] = [];

    for (const r of rows) {
      if (r.matched_form && r.matched_form.trim().length > 0) {
        const lower = r.matched_form.toLowerCase().trim();
        if (!seen.has(lower)) {
          seen.add(lower);
          deduped.push({
            id: r.id,
            matchedForm: r.matched_form,
            v1: r.v1,
          });
        }
      }
    }

    return deduped;
  }

  async getVerbFormByWord(query: string): Promise<VerbForm | null> {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return null;

    if (isWeb) {
      return (
        webVerbForms.find(
          (item) =>
            item.v1.toLowerCase() === normalized ||
            item.v2.toLowerCase() === normalized ||
            item.v3.toLowerCase() === normalized ||
            item.v4.toLowerCase() === normalized ||
            item.v5.toLowerCase() === normalized
        ) || null
      );
    }

    const db = await getDatabase();
    if (!db) return null;

    const row = await db.getFirstAsync<VerbFormRow>(
      `SELECT id, v1, v2, v3, v4, v5
       FROM verb_forms
       WHERE 
         v1_normalized = ? OR 
         v2_normalized = ? OR 
         v3_normalized = ? OR 
         v4_normalized = ? OR 
         v5_normalized = ?
       LIMIT 1`,
      [normalized, normalized, normalized, normalized, normalized]
    );

    return row ? mapRowToVerbForm(row) : null;
  }

  async getVerbFormById(id: number): Promise<VerbForm | null> {
    if (isWeb) {
      return webVerbForms.find((item) => item.id === id) || null;
    }

    const db = await getDatabase();
    if (!db) return null;

    const row = await db.getFirstAsync<VerbFormRow>(
      `SELECT id, v1, v2, v3, v4, v5 FROM verb_forms WHERE id = ? LIMIT 1`,
      [id]
    );

    return row ? mapRowToVerbForm(row) : null;
  }
}

export const verbFormRepository: VerbFormRepository = new SQLiteVerbFormRepository();
