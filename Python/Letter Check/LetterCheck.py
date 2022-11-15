import re
alpha = "abcdefghijklmnopqrstuvwxyz" #characters to test for
test = input() #input to test
testrunc = re.sub("\W", "", test)
for i in alpha:
  if i in test.lower():
    print(f"{i}: {test.count(i)}, {(test.count(i) / len(testrunc))*100}%")