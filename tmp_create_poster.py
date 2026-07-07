from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
poster = Path('public') / 'Images' / 'internal' / 'digital-twin-poster.webp'
img = Image.new('RGB', (1280, 720), color=(20, 40, 80))
d = ImageDraw.Draw(img)
text = 'Digital Twin Video'
try:
    font = ImageFont.truetype('arial.ttf', 64)
except Exception:
    font = ImageFont.load_default()
try:
    w, h = d.textbbox((0,0), text, font=font)[2:]
except Exception:
    w, h = d.textsize(text, font=font)
d.text(((1280 - w) // 2, (720 - h) // 2), text, font=font, fill=(255, 255, 255))
img.save(poster, format='WEBP', quality=75)
print('CREATED POSTER', poster.as_posix(), round(poster.stat().st_size/1024,1), 'KB')
