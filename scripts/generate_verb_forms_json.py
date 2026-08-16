import json
import os

csv_path = r'D:\Dictinoary\src\data\verb-forms.csv'
json_out = r'D:\Dictinoary\src\data\verbFormsData.json'

entries = []
id_counter = 1

with open(csv_path, 'r', encoding='utf-8', errors='ignore') as f:
    for line in f:
        line_str = line.strip()
        if not line_str:
            continue
        parts = line_str.split('\t') if '\t' in line_str else line_str.split(',')
        clean_parts = [p.strip() for p in parts if p.strip()]

        v1 = v5 = v2 = v3 = v4 = ""
        if len(clean_parts) >= 5:
            v1, v5, v2, v3, v4 = clean_parts[0], clean_parts[1], clean_parts[2], clean_parts[3], clean_parts[4]
        elif len(clean_parts) == 4:
            v1, v5, v4 = clean_parts[0], clean_parts[1], clean_parts[3]
            v2v3 = clean_parts[2].split(' ')
            if len(v2v3) >= 2:
                v2, v3 = v2v3[0], v2v3[1]
            else:
                v2 = v3 = clean_parts[2]
        else:
            continue

        if v1 and v2 and v3 and v4 and v5:
            entries.append({
                "id": id_counter,
                "v1": v1,
                "v2": v2,
                "v3": v3,
                "v4": v4,
                "v5": v5
            })
            id_counter += 1

with open(json_out, 'w', encoding='utf-8') as f:
    json.dump(entries, f, ensure_ascii=False)

print(f"Generated {len(entries)} verb forms in {json_out} ({os.path.getsize(json_out)} bytes)")
