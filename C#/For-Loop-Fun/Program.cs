using System;
using System.Threading;

public class Program
{
    static public void Main(string[] fhqwhgads)
    {
        for (int bottleNumber = 100; 1 < bottleNumber; bottleNumber--)
        {
            Console.WriteLine("{0} bottles of beer on the wall, {0} bottles of beer", bottleNumber);
            Thread.Sleep(1000);
            Console.WriteLine("Take one down and pass it around, {0} bottles of beer on the wall", bottleNumber - 1);
            Thread.Sleep(4000);
        }
        Console.WriteLine("1 bottle of beer on the wall, 1 bottle of beer");
        Console.WriteLine("Take one down and pass it around, no bottles of beer on the wall");
        Console.ReadKey();
    }
}
