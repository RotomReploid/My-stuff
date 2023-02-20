public class Card {

	public static enum Suit {
		Diamonds,
		Clubs,
		Hearts,
		Spades
	}
	public static enum Rank {
		Ace,
		Two,
		Three,
		Four,
		Five,
		Six,
		Seven,
		Eight,
		Nine,
		Ten,
		Jack,
		Queen,
		King,
		Joker
	}
	
	private Suit suit;
	private Rank rank;

    public Card(Rank ranke, Suit suite) {
		if (ranke != Card.Rank.Joker){
			this.suit = suite;
		}
		this.rank = ranke;
    }
	public Card(Rank ranke) {
		this.rank = ranke;
    }
	
	public void suit() {
		System.out.println(this.suit);
	}
	public void rank() {
		System.out.println(this.rank);
	}
	public void flip(){
		if (this.rank != Card.Rank.Joker){
			System.out.printf("%s of %s%n", this.rank, this.suit);
		} else {
			System.out.println("Joker");
		}
	}
}