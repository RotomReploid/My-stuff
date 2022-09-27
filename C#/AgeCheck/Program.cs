using System;

namespace MyApplication
{
  class Program
  {
    static void checkAge(int age)
    {
      if (age < 18)
      {
        throw new ArithmeticException("Access denied - You must be at least 18 years old.");
      }
      else
      {
        Console.WriteLine("Access granted - You are old enough!");
      }
    }

    static void Main(string[] args)
    {
        Console.WriteLine("Please enter your age: ");
        string Age = Console.ReadLine();
        int userAge = Int32.Parse(Age);
        checkAge(userAge);
    }
  }
}