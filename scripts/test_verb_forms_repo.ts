import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'assets', 'dictionary.db');
const db = new Database(dbPath);

const testQueries = ['go', 'went', 'gone', 'going', 'goes', 'abandon', 'abode', 'handwrite'];

testQueries.forEach((word: string) => {
  const norm = word.toLowerCase().trim();
  const prefix = `${norm}%`;
  const sql = `
    SELECT 
      vf.id, vf.v1, vf.v2, vf.v3, vf.v4, vf.v5,
      w.hindi_meaning
    FROM verb_forms vf
    LEFT JOIN words w ON w.word_normalized = vf.v1_normalized
    WHERE 
      vf.v1_normalized LIKE ? OR 
      vf.v2_normalized LIKE ? OR 
      vf.v3_normalized LIKE ? OR 
      vf.v4_normalized LIKE ? OR 
      vf.v5_normalized LIKE ?
    ORDER BY
      CASE
        WHEN vf.v1_normalized = ? THEN 0
        WHEN vf.v2_normalized = ? THEN 1
        WHEN vf.v3_normalized = ? THEN 2
        WHEN vf.v4_normalized = ? THEN 3
        WHEN vf.v5_normalized = ? THEN 4
        WHEN vf.v1_normalized LIKE ? THEN 5
        WHEN vf.v2_normalized LIKE ? THEN 6
        WHEN vf.v3_normalized LIKE ? THEN 7
        WHEN vf.v4_normalized LIKE ? THEN 8
        WHEN vf.v5_normalized LIKE ? THEN 9
        ELSE 10
      END,
      length(vf.v1) ASC
    LIMIT 1
  `;

  const row = db.prepare(sql).get(
    prefix, prefix, prefix, prefix, prefix,
    norm, norm, norm, norm, norm,
    prefix, prefix, prefix, prefix, prefix
  ) as any;

  if (row) {
    console.log(`🎯 Query: "${word}" => Base V1="${row.v1}", V2="${row.v2}", V3="${row.v3}", V4="${row.v4}", V5="${row.v5}"`);
    console.log(`   Hindi Meaning: ${row.hindi_meaning ? row.hindi_meaning.substring(0, 45) : 'Not found'}`);
  }
});

db.close();
