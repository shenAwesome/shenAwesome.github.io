import fnmatch
import os

dir = r'C:\Shen\work\screenshots\next\origin'

matches = []
for root, dirnames, filenames in os.walk(dir):
    for filename in fnmatch.filter(filenames, '*.jpg'):
        matches.append(os.path.join(root, filename))
        
for f in matches:
    os.rename(f,f.replace('.jpg','.png'))