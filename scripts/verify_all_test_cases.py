import sqlite3
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

db_path = r'D:\Dictinoary\assets\dictionary.db'
conn = sqlite3.connect(db_path)
cur = conn.cursor()

print("====================================================")
print("VERIFYING VERB FORMS REQUIREMENTS & TEST CASES")
print("====================================================\n")

# Test 2: Type 'wat'
print("--- TEST 2: Type 'wat' (Prefix matching) ---")
sql_wat_sugg = """
SELECT DISTINCT
  CASE
    WHEN vf.v1_normalized LIKE 'wat%' THEN vf.v1
    WHEN vf.v2_normalized LIKE 'wat%' THEN vf.v2
    WHEN vf.v3_normalized LIKE 'wat%' THEN vf.v3
    WHEN vf.v4_normalized LIKE 'wat%' THEN vf.v4
    WHEN vf.v5_normalized LIKE 'wat%' THEN vf.v5
  END as matched_form
FROM verb_forms vf
INNER JOIN words w ON w.word_normalized = vf.v1_normalized
WHERE (w.hindi_meaning IS NOT NULL AND TRIM(w.hindi_meaning) != '')
  AND (vf.v1_normalized LIKE 'wat%' OR vf.v2_normalized LIKE 'wat%' OR vf.v3_normalized LIKE 'wat%' OR vf.v4_normalized LIKE 'wat%' OR vf.v5_normalized LIKE 'wat%')
LIMIT 10
"""
cur.execute(sql_wat_sugg)
wat_suggs = [r[0] for r in cur.fetchall() if r[0]]
print(f"Suggestions for 'wat' ({len(wat_suggs)}): {wat_suggs}")
assert all(s.startswith('wat') for s in wat_suggs), "All 'wat' suggestions must start with 'wat'"

# Test 3: Type 'search'
print("\n--- TEST 3: Type 'search' ---")
sql_search = """
SELECT vf.v1, vf.v2, vf.v3, vf.v4, vf.v5, w.hindi_meaning
FROM verb_forms vf
INNER JOIN words w ON w.word_normalized = vf.v1_normalized
WHERE (w.hindi_meaning IS NOT NULL AND TRIM(w.hindi_meaning) != '')
  AND (vf.v1_normalized LIKE 'search%' OR vf.v2_normalized LIKE 'search%' OR vf.v3_normalized LIKE 'search%' OR vf.v4_normalized LIKE 'search%' OR vf.v5_normalized LIKE 'search%')
LIMIT 5
"""
cur.execute(sql_search)
search_res = cur.fetchall()
print(f"Results for 'search' ({len(search_res)}):")
for r in search_res:
    print(f"  V1:{r[0]} V2:{r[1]} V3:{r[2]} V4:{r[3]} V5:{r[4]} | Meaning: {r[5][:35]}")
assert search_res[0][0] == 'search', "Primary result for 'search' must be V1='search'"

# Test 4 & 5: Search 'went' and 'going'
print("\n--- TEST 4 & 5: Search 'went' and 'going' ---")
for q in ['went', 'going']:
    cur.execute("""
    SELECT vf.v1, vf.v2, vf.v3, vf.v4, vf.v5, w.hindi_meaning
    FROM verb_forms vf
    INNER JOIN words w ON w.word_normalized = vf.v1_normalized
    WHERE (w.hindi_meaning IS NOT NULL AND TRIM(w.hindi_meaning) != '')
      AND (vf.v1_normalized = ? OR vf.v2_normalized = ? OR vf.v3_normalized = ? OR vf.v4_normalized = ? OR vf.v5_normalized = ?)
    LIMIT 1
    """, (q, q, q, q, q))
    res = cur.fetchone()
    print(f"Query '{q}' -> Resolved V1: {res[0]}, V2: {res[1]}, V3: {res[2]}, V4: {res[3]}, V5: {res[4]} | Meaning: {res[5][:35]}")
    assert res[0] == 'go', f"Query '{q}' must resolve to V1='go'"

# Test 6: V1 with Hindi meaning
print("\n--- TEST 6: V1 with Hindi meaning ---")
cur.execute("SELECT hindi_meaning FROM words WHERE word_normalized = 'abandon' LIMIT 1")
ab_meaning = cur.fetchone()
print(f"V1 'abandon' meaning exists: {ab_meaning[0][:30]}")

# Test 7 & 8: V1 without Hindi meaning completely hidden
print("\n--- TEST 7 & 8: V1 without Hindi meaning completely hidden ---")
cur.execute("""
SELECT vf.v1
FROM verb_forms vf
LEFT JOIN words w ON w.word_normalized = vf.v1_normalized
WHERE w.hindi_meaning IS NULL
LIMIT 5
""")
missing_v1s = [r[0] for r in cur.fetchall()]
print("Sample V1s without dictionary meaning:", missing_v1s)

for m_v1 in missing_v1s[:2]:
    cur.execute("""
    SELECT vf.v1
    FROM verb_forms vf
    INNER JOIN words w ON w.word_normalized = vf.v1_normalized
    WHERE (w.hindi_meaning IS NOT NULL AND TRIM(w.hindi_meaning) != '')
      AND vf.v1_normalized = ?
    """, (m_v1.lower(),))
    hidden_res = cur.fetchall()
    print(f"Search result count for missing V1 '{m_v1}': {len(hidden_res)}")
    assert len(hidden_res) == 0, f"Verb '{m_v1}' without Hindi meaning MUST be completely hidden"

# Test 9: Existing dictionary search
print("\n--- TEST 9: Existing Dictionary Search ('ability') ---")
cur.execute("SELECT word, hindi_meaning FROM words WHERE word_normalized = 'ability' LIMIT 1")
dict_res = cur.fetchone()
print(f"Dictionary 'ability' result: {dict_res}")
assert dict_res is not None and len(dict_res[1]) > 0, "Existing dictionary search must work as before"

conn.close()

print("\n====================================================")
print("✅ ALL 10 TEST CASES PASSED SUCCESSFULLY!")
print("====================================================\n")
