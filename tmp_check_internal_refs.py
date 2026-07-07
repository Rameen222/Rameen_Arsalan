from pathlib import Path
import re

cwd = Path.cwd()
projects = cwd / 'src' / 'data' / 'projects.js'
text = projects.read_text(encoding='utf-8')
# find paths under Images/internal and Images/internal/Urban_Inequality
refs = re.findall(r"\$\{baseURL\}Images(/internal[^`',\n\)]*)", text)
refs += re.findall(r"\$\{baseURL\}Images(/internal/Urban_Inequality[^`',\n\)]*)", text)
refs = sorted(set(refs))
root = cwd / 'public' / 'Images'
print('Referenced internal image/video paths:')
for r in refs:
    p = (root / r.lstrip('/'))
    print(r, '->', 'OK' if p.exists() else 'MISSING', p)

# also list files actually in internal folder
print('\nFiles actually present in public/Images/internal:')
for p in sorted((root / 'internal').rglob('*')):
    if p.is_file():
        print('-', p.relative_to(cwd))
