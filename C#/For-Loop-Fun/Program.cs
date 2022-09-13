using System;

public class Program
{
    static public void Main(string[] fhqwhgads)
    {
        for (int bottleNumber = 100; 1 < bottleNumber; bottleNumber--)
        {
            Console.WriteLine("{0} bottles of beer on the wall, {0} bottles of beer", bottleNumber);
            Console.WriteLine("Take one down and pass it around, {0} bottles of beer on the wall", bottleNumber - 1);
        }
        Console.WriteLine("1 bottle of beer on the wall, 1 bottle of beer");
        Console.WriteLine("Take one down and pass it around, no bottles of beer on the wall");
        Console.ReadKey();
    }
}
