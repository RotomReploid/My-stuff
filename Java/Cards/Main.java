import java.util.ArrayList;


class Main {
    public static void main(String[] args) {
        Deck deck = new Deck();
		Card jackH = new Card(Card.Suit.Hearts, Card.Rank.Joker);
		jackH.flip();
    }
}