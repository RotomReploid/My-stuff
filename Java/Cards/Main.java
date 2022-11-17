import java.util.ArrayList;

class Main {
	public static void main(String[] args) {
		Deck deck = new Deck();
		deck.populate(false);
		//deck.read();
		System.out.println(deck.size());
	}
}