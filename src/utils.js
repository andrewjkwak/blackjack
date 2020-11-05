const ROYALS = ["JACK", "QUEEN", "KING"];

export const calculatePoints = hand => {
  let points = 0;
  let containsAce = 0;

  hand.forEach(card => {
    if (ROYALS.includes(card.value)) {
      points += 10;
    } else if (card.value === "ACE") {
      containsAce++;
    } else {
      points += Number(card.value);
    }
  });

  // If a hand contains more than one ace, you have to calculate the highest point you can get
  // while still less than or equal to 21
  if (containsAce) {
    let aceValue = containsAce * 11;
    points += aceValue;
    while (containsAce > 0 && points > 21) {
      points -= 10;
      containsAce--;
    }
  }
  return points;
};

export const calculateResult = (housePoint, userPoint) => {
  if (housePoint === userPoint || housePoint > userPoint) {
    return "You lose!";
  } else {
    return "You win!";
  }
}