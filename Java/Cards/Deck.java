import java.util.ArrayList;

public class Deck extends ArrayList<Card> {
	public void read() {
		for (Card cord : this) {
			cord.flip();
}
	}
}