import java.util.ArrayList;

public class Deck extends ArrayList<Card> {
	public void read() {
		for (Card cord : this) {
			cord.flip();
		}
	}
	public void populate(boolean giggles){
		for (Card.Suit boot : Card.Suit.values()){
			for (Card.Rank plank : Card.Rank.values()){
				if (plank != Card.Rank.Joker){
					this.add(new Card(plank, boot));
				}
			}
		}
		if (giggles == true){
			this.add(new Card(Card.Rank.Joker));
		}
	}
}