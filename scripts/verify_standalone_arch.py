import sqlite3
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

db_path = r'D:\Dictinoary\assets\dictionary.db'
conn = sqlite3.connect(db_path)
cur = conn.cursor()

print("====================================================")
print("VERIFYING STANDALONE VERB FORMS TEST CASES")
print("====================================================\n")

# TEST 8: Search "go" first suggestion
cur.execute("""
SELECT DISTINCT
  CASE
    WHEN v1_normalized = 'go' THEN v1
    WHEN v2_normalized = 'go' THEN v2
    WHEN v3_normalized = 'go' THEN v3
    WHEN v4_normalized = 'go' THEN v4
    WHEN v5_normalized = 'go' THEN v5
    WHEN v1_normalized LIKE 'go%' THEN v1
    WHEN v2_normalized LIKE 'go%' THEN v2
    WHEN v3_normalized LIKE 'go%' THEN v3
    WHEN v4_normalized LIKE 'go%' THEN v4
    WHEN v5_normalized LIKE 'go%' THEN v5
  END as matched_form,
  v1
FROM verb_forms
WHERE v1_normalized LIKE 'go%' OR v2_normalized LIKE 'go%' OR v3_normalized LIKE 'go%' OR v4_normalized LIKE 'go%' OR v5_normalized LIKE 'go%'
ORDER BY
  CASE
    WHEN LOWER(matched_form) = 'go' THEN 0
    WHEN LOWER(matched_form) LIKE 'go%' THEN 1
    ELSE 2
  END,
  length(matched_form) ASC,
  matched_form ASC
LIMIT 5
""")
go_suggs = cur.fetchall()
print("Search 'go' Autocomplete Suggestions:", [s[0] for s in go_suggs])
assert go_suggs[0][0] == 'go', "First suggestion for 'go' MUST be 'go'"

# TEST 3, 4: Search 'went' and 'going'
for q in ['went', 'going']:
    cur.execute("""
    SELECT id, v1, v2, v3, v4, v5
    FROM verb_forms
    WHERE v1_normalized = ? OR v2_normalized = ? OR v3_normalized = ? OR v4_normalized = ? OR v5_normalized = ?
    LIMIT 1
    """, (q, q, q, q, q))
    r = cur.fetchone()
    print(f"Search '{q}' -> Result: V1:{r[1]}, V2:{r[2]}, V3:{r[3]}, V4:{r[4]}, V5:{r[5]}")
    assert r[1] == 'go', f"Query '{q}' must resolve to V1='go'"

# TEST 5: Search verb that does NOT exist in words (e.g. 'accessorise')
cur.execute("""
SELECT id, v1, v2, v3, v4, v5
FROM verb_forms
WHERE v1_normalized = 'accessorise'
LIMIT 1
""")
acc_res = cur.fetchone()
print("Search 'accessorise' (not in words table) -> Result:", acc_res)
assert acc_res is not None and acc_res[1] == 'accessorise', "Verb not in words table MUST appear normally"

# TEST 7: Normal dictionary table search ('ability')
cur.execute("SELECT word, hindi_meaning FROM words WHERE word_normalized = 'ability' LIMIT 1")
dict_res = cur.fetchone()
print("Normal Dictionary search 'ability' -> Result:", dict_res)
assert dict_res is not None, "Normal dictionary must remain unchanged and working"

conn.close()

print("\n====================================================")
print("✅ ALL STANDALONE ARCHITECTURE TESTS PASSED SUCCESSFULLY!")
print("====================================================\n")
