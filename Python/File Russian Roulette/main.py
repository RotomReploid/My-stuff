import os
import random

bullet = random.randint(1,6)
data_file = os.getcwd() + '\hello.txt'

if bullet:
  if bullet != 3:  
    print("safe!")
  else:
    print("bye bye!")
    os.remove(data_file)