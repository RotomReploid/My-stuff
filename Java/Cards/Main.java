import java.util.ArrayList;

class Main {
	public static void main(String[] args) {
		Deck deck = new Deck();
		Cards.Suit.values();
		/*for (Suit boot : Cards.Suit.values()){
			for (Rank plank : Cards.Rank.values()){
				deck.add(new Card(plank, boot));
			}
		}*/
		deck.read();
	}
}