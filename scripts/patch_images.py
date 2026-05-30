from pathlib import Path
import re

root = Path(__file__).resolve().parent.parent
for path in root.rglob('src/**/*'):
    if path.suffix not in {'.ts', '.tsx'}:
        continue
    text = path.read_text(encoding='utf-8')
    if '/images/' not in text:
        continue

    new_text = re.sub(r'(["\'])(/images/[^"\']*)\1', r'withBasePath(\1\2\1)', text)
    if new_text == text:
        continue

    if 'withBasePath(' in new_text and 'from "@/lib/path"' not in new_text:
        lines = new_text.splitlines()
        insert_at = 0
        for i, line in enumerate(lines):
            if line.startswith('import '):
                insert_at = i + 1
        lines.insert(insert_at, 'import { withBasePath } from "@/lib/path";')
        new_text = '\n'.join(lines)

    path.write_text(new_text, encoding='utf-8')
    print(f'patched {path}')
