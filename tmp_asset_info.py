from pathlib import Path
from PIL import Image
root = Path('public') / 'Images'
files = sorted([p for p in root.rglob('*') if p.is_file()], key=lambda x: x.stat().st_size, reverse=True)
print('path,size_kb,width,height,type')
for p in files:
    if p.suffix.lower() in ['.jpg', '.jpeg', '.png', '.webp']:
        try:
            with Image.open(p) as img:
                print(f'{p.as_posix()},{p.stat().st_size/1024:.1f},{img.width},{img.height},{p.suffix.lower()}')
        except Exception as e:
            print(f'{p.as_posix()},{p.stat().st_size/1024:.1f},ERROR,{e}')
    else:
        print(f'{p.as_posix()},{p.stat().st_size/1024:.1f},-,-,{p.suffix.lower()}')
