import sys
import io
import re

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Verify studentDictionaryData.ts
with open(r'D:\Dictinoary\src\data\studentDictionaryData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

print("Verifying 'Go' in studentDictionaryData.ts:")
if '"word_en": "Go"' in content:
    print("SUCCESS: 'Go' entry is present!")
    # extract the block
    idx = content.find('"word_en": "Go"')
    print(content[idx-30:idx+250])
else:
    print("FAILED: 'Go' entry not found")

