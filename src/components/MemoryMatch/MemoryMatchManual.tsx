import React from 'react';
import { Typography } from '@mui/material';  
const MemoryMatchManual: React.FC = () => {
  
  return (
    <div className="manual" >
      <Typography variant="h6" gutterBottom>
        <h2>Memory Match Game Manual</h2>
      </Typography>
      <h3>Objective:</h3>
      <p>
        The objective of the Memory Match game is to match pairs of identical cards.
        You win when all pairs are matched.
      </p>
      <h3>How to Play:</h3>
      <ol>
        <li>Click on a card to flip it.</li>
        <li>Try to find pairs of matching cards.</li>
        <li>If the cards match, they remain flipped. If not, they are flipped back after a short time.</li>
        <li>Continue playing until all pairs are matched.</li>
      </ol>
      <h3>Winning Conditions:</h3>
      <p>You win when all pairs are matched!</p>
      <h3>Tips:</h3>
      <ul>
        <li>Try to remember the positions of flipped cards.</li>
        <li>Flipping cards quickly can help you find matches faster!</li>
      </ul>
    </div>
   
  );
};

export default MemoryMatchManual;
