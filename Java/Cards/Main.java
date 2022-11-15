import java.util.ArrayList;

class Main {
	public static void main(String[] args) {
		Deck deck = new Deck();
		System.out.println(Cards.Suit.values());
		/*for (Suit boot : Cards.Suit.values()){
			for (Rank plank : Cards.Rank.values()){
				deck.add(new Card(plank, boot));
			}
		}*/
		deck.read();
	}
}