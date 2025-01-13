import React, { useState, useEffect } from 'react';
import './MemoryMatch.css';

interface Card {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const MemoryMatch: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Shuffle and set cards
  useEffect(() => {
    const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'A', 'B', 'C', 'D', 'E', 'F'];
    const shuffledCards = cardValues
      .map((value, index) => ({ id: index, value, isFlipped: false, isMatched: false }))
      .sort(() => Math.random() - 0.5);

    setCards(shuffledCards);
  }, []);

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [firstIndex, secondIndex] = flippedIndices;
      const updatedCards = [...cards];
      
      // Check if the cards match
      if (updatedCards[firstIndex].value === updatedCards[secondIndex].value) {
        updatedCards[firstIndex].isMatched = true;
        updatedCards[secondIndex].isMatched = true;
      } else {
        // If they don't match, flip them back
        setTimeout(() => {
          updatedCards[firstIndex].isFlipped = false;
          updatedCards[secondIndex].isFlipped = false;
          setCards(updatedCards);
        }, 1000);
      }

      setCards(updatedCards);
      setFlippedIndices([]);
      setMoves(moves + 1);

      // Check if the game is over
      if (updatedCards.every(card => card.isMatched)) {
        setGameOver(true);
      }
    }
  }, [flippedIndices]);

  const handleCardClick = (index: number) => {
    if (cards[index].isFlipped || cards[index].isMatched || flippedIndices.length === 2) return;

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);
    setFlippedIndices([...flippedIndices, index]);
  };


  return (
    <div className="game-container">
      <p>Moves: {moves}</p>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`card ${card.isFlipped || card.isMatched ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            {card.isFlipped || card.isMatched ? card.value : "?"}
          </div>
        ))}
      </div>
      {gameOver && (
        <div className="game-over">
          <h2>You Win!</h2>
        </div>
      )}
    </div>
  );
};

export default MemoryMatch;
