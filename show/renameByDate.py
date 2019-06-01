
#!/usr/bin/env python
from stat import S_ISREG, ST_CTIME, ST_MODE
import os, sys, time

# path to the directory (relative or absolute)
dirpath = r'C:\Shen\clients\sa_water\receipt\week'

 
maxIdx = 0
for i in range(0,200):
    if os.path.exists(dirpath + str(i)):
        maxIdx = max(maxIdx,i)

dirpath = dirpath+str(maxIdx)



dirpath =  r'C:\Shen\work\screenshots\next\sawater'


print dirpath

# get all entries in the directory w/ stats
entries = (os.path.join(dirpath, fn) for fn in os.listdir(dirpath))
entries = ((os.path.getmtime(path), path) for path in entries)  

index = 0

import datetime 
now = datetime.datetime.now()
dateStr = now.strftime("%Y%m%d")
for cdate, path in sorted(entries):
    renameTo = os.path.join(dirpath,'shen_'+dateStr+'_'+str(index)+'.png')
    index = index+1
    if os.path.isfile(path): os.rename(path,renameTo)
    #print renameTo
    print os.path.basename(path)
