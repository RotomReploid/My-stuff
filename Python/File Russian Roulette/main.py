import os
import random

bullet = random.randint(1,6)
data_file = '/usercode/hello.txt'
if bullet != 6:
    print("safe!")
else:
    print("bye bye!")
if bullet == 6:
    os.remove(data_file)