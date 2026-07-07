from pathlib import Path
from PIL import Image

root = Path('public') / 'Images'
convert_to_webp = [
    root / 'internal' / 'agisoft.png',
    root / 'internal' / 'Urban_Inequality' / 'LISSSSSSSS.drawio (1).png',
    root / 'urban_inequality_coverrr_pic.png',
    root / 'Photogrammetry_cover_pic.png',
    root / 'LST_COVER_PIC.png',
]
compress_jpeg = [
    root / 'LULC_COVER_PIC.jpg',
    root / 'River_discharge_cover_pic.jpg',
    root / 'internal' / 'Urban_Inequality' / 'road_density.jpg',
    root / 'internal' / 'Urban_Inequality' / 'accessibility.jpg',
    root / 'internal' / 'Urban_Inequality' / 'Layout4.jpg',
    root / 'internal' / 'Fleet_management.jpeg',
]

print('Optimizing images...')
for p in convert_to_webp:
    if not p.exists():
        print('MISSING', p)
        continue
    out = p.with_suffix('.webp')
    with Image.open(p) as img:
        img = img.convert('RGB')
        img.save(out, format='WEBP', quality=80, method=6)
    print(f'CONVERTED {p} -> {out} {out.stat().st_size/1024:.1f}KB')

for p in compress_jpeg:
    if not p.exists():
        print('MISSING', p)
        continue
    with Image.open(p) as img:
        width, height = img.size
        max_width = 1600
        scale = min(1, max_width / width)
        if scale < 1:
            img = img.resize((int(width * scale), int(height * scale)), Image.LANCZOS)
        img = img.convert('RGB')
        img.save(p, format='JPEG', quality=80, optimize=True, progressive=True)
    print(f'COMPRESSED {p} -> {p.stat().st_size/1024:.1f}KB')

print('Final sizes:')
for p in sorted([q for q in root.rglob('*') if q.is_file()], key=lambda x: x.stat().st_size, reverse=True):
    print(f'{p.relative_to(Path.cwd()).as_posix()},{p.stat().st_size/1024:.1f}')
