import random

b = random.randrange(1, 11)
#print(b)
a = int(input("Input a number from 1 to 10"))

if b > a:
  diffr = b - a
  output = "Too low! Off by {}!"
  print(output.format(diffr))
elif b < a:
  diffr = a - b
  output = "Too high! Off by {}!"
  print(output.format(diffr))
elif b == a:
    output = "You got it! The number was {}!"
    print(output.format(a))