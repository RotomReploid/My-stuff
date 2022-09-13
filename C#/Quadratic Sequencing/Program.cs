using System;

namespace myApp
{
  class Program
  {
    static void skipCount(int min, int max)
    {
      for (int i = min; i < max; i += 2)
      {
        Console.WriteLine(i);
      }
    }
    
    static void Main(string[] args)
    {
      skipCount(1, 20);
      Console.ReadKey();
    }
  }
}