from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
root = Path('public') / 'Images'

# Rename the WebP file with a safer name
old = root / 'internal' / 'Urban_Inequality' / 'LISSSSSSSS.drawio (1).webp'
new = root / 'internal' / 'Urban_Inequality' / 'LISSSSSSSS.drawio-1.webp'
if old.exists():
    old.rename(new)
    print('RENAMED', old.name, '->', new.name)
else:
    print('SKIP rename, missing', old)

# Recompress large WebP assets
recompress = [
    root / 'River_discharge_cover_pic.webp',
    root / 'urban_inequality_coverrr_pic.webp',
]
for p in recompress:
    if not p.exists():
        print('MISSING', p)
        continue
    with Image.open(p) as img:
        if img.width > 1800:
            img = img.resize((1800, int(1800 * img.height / img.width)), Image.LANCZOS)
        img.save(p, format='WEBP', quality=60, method=6)
        print('RECOMPRESSED', p.name, round(p.stat().st_size/1024,1), 'KB')

# Create poster if missing
poster = root / 'internal' / 'digital-twin-poster.webp'
if not poster.exists():
    img = Image.new('RGB', (1280, 720), color=(20, 40, 80))
    d = ImageDraw.Draw(img)
    text = 'Digital Twin Video'
    try:
        font = ImageFont.truetype('arial.ttf', 64)
    except Exception:
        font = ImageFont.load_default()
    w, h = d.textsize(text, font=font)
    d.text(((1280 - w) // 2, (720 - h) // 2), text, font=font, fill=(255, 255, 255))
    img.save(poster, format='WEBP', quality=75)
    print('CREATED POSTER', poster.name, round(poster.stat().st_size/1024,1), 'KB')
else:
    print('POSTER already exists', poster.name, round(poster.stat().st_size/1024,1), 'KB')
