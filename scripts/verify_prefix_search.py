import sqlite3
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

db_path = r'D:\Dictinoary\assets\dictionary.db'
conn = sqlite3.connect(db_path)
cur = conn.cursor()

print("====================================================")
print("VERIFYING STRICT PREFIX SEARCH & ZERO SUBSTRING MATCHING")
print("====================================================\n")

# TEST 1 & 4: Search "go"
cur.execute("""
SELECT id, v1, v2, v3, v4, v5
FROM verb_forms
WHERE 
  v1_normalized LIKE 'go%' OR 
  v2_normalized LIKE 'go%' OR 
  v3_normalized LIKE 'go%' OR 
  v4_normalized LIKE 'go%' OR 
  v5_normalized LIKE 'go%'
ORDER BY
  CASE
    WHEN v1_normalized = 'go' THEN 0
    WHEN v2_normalized = 'go' THEN 0
    WHEN v3_normalized = 'go' THEN 0
    WHEN v4_normalized = 'go' THEN 0
    WHEN v5_normalized = 'go' THEN 0
    WHEN v1_normalized LIKE 'go%' THEN 1
    WHEN v2_normalized LIKE 'go%' THEN 1
    WHEN v3_normalized LIKE 'go%' THEN 1
    WHEN v4_normalized LIKE 'go%' THEN 1
    WHEN v5_normalized LIKE 'go%' THEN 1
    ELSE 2
  END,
  length(v1) ASC,
  v1 ASC
""")
go_results = cur.fetchall()
print(f"Total results for 'go%': {len(go_results)}")

v1_names = [r[1] for r in go_results]
print("Top V1 results for 'go':", v1_names[:10])

assert "agonise" not in v1_names, "agonise MUST NOT appear for 'go' search"
assert "antagonise" not in v1_names, "antagonise MUST NOT appear for 'go' search"
assert go_results[0][1] == 'go', "First result for 'go' MUST be V1='go'"

# TEST 2: Search "wat"
cur.execute("""
SELECT v1, v2, v3, v4, v5
FROM verb_forms
WHERE 
  v1_normalized LIKE 'wat%' OR 
  v2_normalized LIKE 'wat%' OR 
  v3_normalized LIKE 'wat%' OR 
  v4_normalized LIKE 'wat%' OR 
  v5_normalized LIKE 'wat%'
""")
wat_results = cur.fetchall()
print(f"Total results for 'wat%': {len(wat_results)}")
for r in wat_results:
    forms = [f.lower() for f in r]
    assert any(f.startswith('wat') for f in forms), f"Result {r} must have at least one form starting with 'wat'"
print("Sample 'wat' results:", [r[0] for r in wat_results[:5]])

# TEST 3: Search "run"
cur.execute("""
SELECT v1, v2, v3, v4, v5
FROM verb_forms
WHERE 
  v1_normalized LIKE 'run%' OR 
  v2_normalized LIKE 'run%' OR 
  v3_normalized LIKE 'run%' OR 
  v4_normalized LIKE 'run%' OR 
  v5_normalized LIKE 'run%'
""")
run_results = cur.fetchall()
run_v1s = [r[0] for r in run_results]
print("V1 results for 'run':", run_v1s)
assert "outrun" not in run_v1s, "'outrun' MUST NOT appear for 'run%' search"

# TEST 5 & 6: Select "go" and "gone" resolve to same V1=go group
for sel in ['go', 'gone']:
    cur.execute("""
    SELECT id, v1, v2, v3, v4, v5
    FROM verb_forms
    WHERE v1_normalized = ? OR v2_normalized = ? OR v3_normalized = ? OR v4_normalized = ? OR v5_normalized = ?
    LIMIT 1
    """, (sel, sel, sel, sel, sel))
    grp = cur.fetchone()
    print(f"Selected form '{sel}' resolved group -> V1:{grp[1]}, V2:{grp[2]}, V3:{grp[3]}, V4:{grp[4]}, V5:{grp[5]}")
    assert grp[1] == 'go', f"Selected form '{sel}' must resolve to V1='go' verb group"

conn.close()

print("\n====================================================")
print("✅ ALL PREFIX SEARCH & RANKING TESTS PASSED SUCCESSFULLY!")
print("====================================================\n")
