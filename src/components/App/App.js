import React, { useState, useEffect } from "react";
import { initializeDeck, drawCards } from "../../services/deckService";
import { calculatePoints, calculateResult } from "../../utils";
import { AppWrapper, HeaderText, ResultText } from "./AppStyle";
import Hand from "../Hand/Hand";
import Moves from "../Moves/Moves";

const App = () => { 
  const [deckID, setDeckID] = useState('');
  const [hasError, setError] = useState(false);
  const [houseHand, setHouseHand] = useState([]);
  const [userHand, setUserHand] = useState([]);
  const [result, setResult] = useState('');
  const [reset, setReset] = useState(false);

  // Initialize the game.  Draw two cards for both the house and the user.
  useEffect(() => {
    const startGame = async () => {
      // Shuffle deck to get the deck ID
      const deckID = await initializeDeck();
      if (deckID) {
        setDeckID(deckID);
      } else {
        setError(true);
      }
      // Draw house hand
      const houseHand = await drawCards(deckID);
      setHouseHand(houseHand);
      // Draw user's initial hand
      const userHand = await drawCards(deckID);
      setUserHand(userHand);
    };
    startGame();
    setReset(false);
  }, [reset]);

  // Check to see if calling hit made you lose (over 21 or tie) or win (if you hit exactly 21) the game.
  useEffect(() => {
    const housePt = calculatePoints(houseHand);
    const userPt = calculatePoints(userHand);

    if (userPt > 21 || (userPt === 21 && housePt === 21)) {
      setResult("You lose!");
    } else if (userPt === 21 && housePt !== 21) {
      setResult("You win!");
    }
  }, [houseHand, userHand]);

  const callHit = async () => {
    const card = await drawCards(deckID, 1);
    setUserHand(hand => [...hand, ...card]);
  };

  const callStand = () => {
    const housePt = calculatePoints(houseHand);
    const userPt = calculatePoints(userHand);
    setResult(calculateResult(housePt, userPt));
  };

  const resetGame = () => {
    setResult('');
    setHouseHand([]);
    setUserHand([]);
    setReset(true);
  };

  if (hasError) {
    return <div>Error retrieving deck.  Please try again.</div>
  }

  return (
    <AppWrapper>
      <HeaderText>Blackjack</HeaderText>
      { result ? 
        <ResultText>{ result }</ResultText> :
        null
      }
      <Hand player="House" hand={houseHand} />
      <Hand player="You" hand={userHand} />
      <Moves 
        callHit={callHit}
        callStand={callStand}
        resetGame={resetGame} 
        result={result} 
      />
    </AppWrapper>
  );
}

export default App;
