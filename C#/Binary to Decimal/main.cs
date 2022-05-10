using System;

public class BinaryToDecimal
{
	public static string Reverse(string text)
	{
		if (text == null) return null;
		// this was posted by petebob as well
		char[] array = text.ToCharArray();
		Array.Reverse(array);
		return new String(array);
	}

	static void Validate(string binput)
	{
	    //makes sure input is only 1s and 0s
		int count = 0;
		foreach (char x in binput)
		{
			if (x == '1' || x == '0') { count++; }
		}
		//compares number of 1s and 0s to actal length
		if (count != binput.Length)
		{
			throw new ArgumentException("Input must be binary integer");
		}
	}

	static double BinToDec(string binstr)
	{
	    //flips number to read it r->l
		Validate(binstr);
		string binflip = Reverse(binstr);
		double result = 0;
		//iterates number and uses exponents to convert
		for (int i = 0; i < binflip.Length; i++)
		{
			if (binflip[i] == '1')
			{
				result += Math.Pow(2, i);
			}
		}

		return result;
	}

	public static void Main(string[] fhqwgads)
	{
	    //repeats after completion
		while (true)
		{
		    Console.WriteLine("Enter binary number here, or \"done\" to exit:");
		    string binstr = Console.ReadLine();
			if (binstr.ToLower() == "done") {return;}
		    double final = BinToDec(binstr);
		    Console.WriteLine(final);
		}
	}
}