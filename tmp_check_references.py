from pathlib import Path
import re
root = Path('public')
text = Path('src/data/projects.js').read_text(encoding='utf-8')
refs = re.findall(r'\`\$\{baseURL\}Images(/[^`]+)\`', text)
print('Referenced asset paths:')
for r in refs:
    p = root / 'Images' / r.lstrip('/')
    print(r, 'EXISTS' if p.exists() else 'MISSING', p.as_posix())
print('---\nPublic Images asset sizes:')
for p in sorted([q for q in (root/'Images').rglob('*') if q.is_file()], key=lambda x: x.stat().st_size, reverse=True):
    print(p.relative_to(Path.cwd()).as_posix(), f'{p.stat().st_size/1024:.1f}KB')
