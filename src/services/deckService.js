const BASE_URL = 'https://deckofcardsapi.com/api/deck';

export const initializeDeck = async () => {
  const response = await fetch(`${BASE_URL}/new/shuffle/?deck_count=1`);
  const data = await response.json();
  
  if (data.success) {
    return data.deck_id;
  }
  return null;
};

export const drawCards = async (id, count = 2) => {
  const response = await fetch(`${BASE_URL}/${id}/draw/?count=${count}`);
  const card = await response.json();

  if (card.success) {
    return card.cards;
  }
  return null;
}