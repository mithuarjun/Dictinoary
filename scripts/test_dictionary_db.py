#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
test_dictionary_db.py
Verifies that assets/dictionary.db:
1. Exists and contains 500+ student words
2. Has correct indexes
3. English prefix queries return accurate results
4. Hindi prefix queries return accurate results
5. Exact word lookups return full details
"""

import os
import sys
import sqlite3

if sys.platform == 'win32':
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
DB_PATH = os.path.join(PROJECT_ROOT, "assets", "dictionary.db")

assert os.path.exists(DB_PATH), f"Database missing at {DB_PATH}"

conn = sqlite3.connect(DB_PATH)
cursor = conn.cursor()

# Test 1: Count
cursor.execute("SELECT COUNT(*) FROM dictionary;")
count = cursor.fetchone()[0]
assert count >= 500, f"Expected >= 500 rows, got {count}"
print(f"[TEST 1 PASS] Total row count: {count}")

# Test 2: Indexes
cursor.execute("PRAGMA index_list('dictionary');")
indexes = [idx[1] for idx in cursor.fetchall()]
assert "idx_word_en" in indexes, "idx_word_en missing"
assert "idx_word_hi" in indexes, "idx_word_hi missing"
print(f"[TEST 2 PASS] Required indexes present: {indexes}")

# Test 3: English prefix search
cursor.execute("SELECT word_en, word_hi, category FROM dictionary WHERE word_en LIKE 'Ac%' ORDER BY word_en LIMIT 5;")
en_results = cursor.fetchall()
assert len(en_results) > 0, "No results for English prefix 'Ac%'"
print(f"[TEST 3 PASS] English prefix 'Ac%': {en_results}")

# Test 4: Hindi prefix search
cursor.execute("SELECT word_en, word_hi, category FROM dictionary WHERE word_hi LIKE 'स%' ORDER BY word_hi LIMIT 5;")
hi_results = cursor.fetchall()
assert len(hi_results) > 0, "No results for Hindi prefix 'स%'"
print(f"[TEST 4 PASS] Hindi prefix 'स%': {hi_results}")

# Test 5: Exact word details
cursor.execute("SELECT word_en, word_hi, phonetic, part_of_speech, example_en, example_hi, category FROM dictionary WHERE LOWER(word_en) = LOWER('Photosynthesis');")
exact_match = cursor.fetchone()
assert exact_match is not None, "Exact match for Photosynthesis not found"
assert exact_match[0] == "Photosynthesis"
assert "प्रकाश संश्लेषण" in exact_match[1]
assert len(exact_match[4]) > 0 and len(exact_match[5]) > 0
print(f"[TEST 5 PASS] Exact lookup 'Photosynthesis': {exact_match}")

conn.close()
print("\n[ALL 5 DATABASE TESTS PASSED SUCCESSFULLY!]")
