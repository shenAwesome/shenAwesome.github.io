import fnmatch
import os
from PIL import Image

dir = r'C:\Shen\code\github\shenAwesome.github.io\show\moreland'

matches = []
for root, dirnames, filenames in os.walk(dir):
    for filename in fnmatch.filter(filenames, '*.png'):
        matches.append(os.path.join(root, filename))
        
for f in matches:
    if not '_small' in f:
        im = Image.open(f)
        #im = im.convert("RGB")
        im = im.resize((200,200),Image.ANTIALIAS)
        im.save(f.replace('.png','_small.png'))
        #os.rename(f,f.replace('.jpg','.png'))