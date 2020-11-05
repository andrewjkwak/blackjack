import { calculatePoints, calculateResult } from "./utils";

describe("Utils Functions", () => {
  let hand = [];
  beforeEach(() => {
    hand = [
      { value: "9" },
      { value: "1" }
    ];
  })

  it("calculatePoints calculate point correctly given numeric cards", () => {
    const result = 10;
    expect(calculatePoints(hand)).toEqual(result);
  });

  it("calculatePoints calculate point correctly if there's an ace(s)", () => {
    let result = 21;
    hand.push({ value: "ACE" });
    expect(calculatePoints(hand)).toEqual(result);

    result = 12;
    hand.push({ value: "ACE" });
    expect(calculatePoints(hand)).toEqual(result);
  });

  it("calculateResult determines result given house and user points", () => {
    let result = "You win!";
    expect(calculateResult(20, 21)).toEqual(result);
    result = "You lose!";
    expect(calculateResult(21, 21)).toEqual(result);
    expect(calculateResult(20, 18)).toEqual(result);
  });
});