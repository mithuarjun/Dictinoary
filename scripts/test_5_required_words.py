import sqlite3
import csv
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

csv_path = r'D:\Dictinoary\src\data\English-Hindi Dictionary.csv'
db_path = r'D:\Dictinoary\assets\dictionary.db'
student_dict_path = r'D:\Dictinoary\src\data\studentDictionaryData.ts'

with open(student_dict_path, 'r', encoding='utf-8') as f:
    student_content = f.read().lower()

conn = sqlite3.connect(db_path)
cur = conn.cursor()

test_words = ['history', 'go', 'goal', 'search', 'watch']

print("====================================================")
print("REQUIRED TEST MATRIX DIAGNOSIS FOR 5 WORDS")
print("====================================================\n")

for w in test_words:
    print(f"--- WORD: '{w}' ---")
    
    # 1. Check CSV
    csv_matches = []
    with open(csv_path, 'r', encoding='utf-8-sig', errors='replace') as f:
        reader = csv.reader(f)
        header = next(reader)
        for idx, row in enumerate(reader):
            if len(row) > 0 and row[0].strip().lower() == w:
                csv_matches.append(row)
    print(f"  A. Exists in CSV?: {'YES' if csv_matches else 'NO'} ({len(csv_matches)} rows)")
    if csv_matches:
        meanings = [r[1].strip() for r in csv_matches[:5]]
        print(f"     Sample CSV Meanings: {meanings}")
        
    # 2. Check SQLite
    cur.execute("SELECT id, word, word_normalized, hindi_meaning, part_of_speech FROM words WHERE word_normalized = ?", (w,))
    db_row = cur.fetchone()
    print(f"  B. Exists in SQLite?: {'YES' if db_row else 'NO'}")
    if db_row:
        print(f"     SQLite ID: {db_row[0]}")
        print(f"     SQLite Hindi Meaning: {db_row[3]}")
    
    # 3. Check Web studentDictionaryData.ts
    in_web = f'"word_en": "{w}"' in student_content
    print(f"  C. Exists in Web dataset (studentDictionaryData.ts)?: {'YES' if in_web else 'NO'}")
    print()

conn.close()
