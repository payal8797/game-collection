import React from 'react';
import { Typography } from '@mui/material';

const HangmanManual: React.FC = () => {
  return (
    <div className="manual">
      <Typography variant="h6" gutterBottom>
        Hangman Game Manual
      </Typography>

      <Typography variant="body1">
        <strong>Objective:</strong> Player 2 must guess the hidden word chosen by Player 1 before the hangman drawing is complete.
      </Typography>

      <Typography variant="body1">
        <strong>How to Play:</strong>
        <ul>
          <li>Player 1 enters a secret word.</li>
          <li>Player 2 guesses one letter at a time using the on-screen keyboard.</li>
          <li>Correct guesses reveal the letter in the word.</li>
          <li>Incorrect guesses add a part to the hangman drawing.</li>
          <li>Player 2 must guess the entire word before the hangman is fully drawn.</li>
        </ul>
      </Typography>

      <Typography variant="body1">
        <strong>Winning Conditions:</strong>
        <ul>
          <li>Player 2 wins by correctly guessing all the letters in the word.</li>
          <li>Player 1 wins if the hangman drawing is completed before Player 2 guesses the word.</li>
        </ul>
      </Typography>

      <Typography variant="body1">
        <strong>Additional Rules:</strong>
        <ul>
          <li>The guessed alphabets will be disabled to avoid confusion.</li>
          <li>The full word will be revealed at the end of the game.</li>
        </ul>
      </Typography>
    </div>
  );
};

export default HangmanManual;
