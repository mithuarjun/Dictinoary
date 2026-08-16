# Dictionary Dataset Notice 📖

## Dataset Source
- **Source Repository**: [https://github.com/bdrillard/english-hindi-dictionary](https://github.com/bdrillard/english-hindi-dictionary)
- **Source File**: `English-Hindi Dictionary.csv`

## Usage & Redistribution Status
> [!WARNING]
> This dataset is currently used as a **DEVELOPMENT / PROTOTYPE dataset** within Gem Dictionary.
> It is **NOT** claimed to be commercially cleared or in the public domain.
> Its production redistribution status and licensing require further legal verification prior to any commercial distribution.

## Import Details
- Generated via: `npm run import-dictionary` (`scripts/importDictionary.ts`)
- Target: `assets/dictionary.db` (SQLite)
- Indexed on `word_normalized` and `word` (case-insensitive COLLATE NOCASE)
- Cleaned: empty rows removed, duplicates merged, multiple Hindi meanings preserved.
