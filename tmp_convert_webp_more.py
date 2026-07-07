from pathlib import Path
from PIL import Image
root = Path('public') / 'Images'
convert = [
    root / 'LULC_COVER_PIC.jpg',
    root / 'River_discharge_cover_pic.jpg',
    root / 'Photogrammetry_cover_pic.png',
    root / 'LST_COVER_PIC.png',
]
for p in convert:
    if not p.exists():
        print('MISSING', p)
        continue
    out = p.with_suffix('.webp')
    with Image.open(p) as img:
        img = img.convert('RGB')
        img.save(out, format='WEBP', quality=80, method=6)
    print(f'CONVERTED {p.name} -> {out.name} size={out.stat().st_size/1024:.1f}KB')
