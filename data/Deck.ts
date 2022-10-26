export function generateAndShuffleDeck(): number[] {
  const deck = generateNums();
  CARD_PAIRS_VALUE = shuffleNums(deck);
  return CARD_PAIRS_VALUE;
}

function generateNums() {
  const cards: number[] = [];

  for (let i = 0; i < 6; i++) {
    let number = Math.floor(Math.random() * 100) + 1;
    if (cards.includes(number) == true) {
      i = i - 1;
    } else {
      if (number > 100 == false) {
        cards.push(number);
        cards.push(number);
      }
    }
  }

  return cards;
}

function shuffleNums(card: number[]) {
  let i = card.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = card[i];
    card[i] = card[j];
    card[j] = temp;
  }
  return card;
}

export let CARD_PAIRS_VALUE = generateAndShuffleDeck();
