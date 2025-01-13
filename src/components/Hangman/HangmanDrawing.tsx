import React from "react";
import { Box } from "@mui/material";

interface HangmanDrawingProps {
  wrongGuesses: number;
}

const HangmanDrawing: React.FC<HangmanDrawingProps> = ({ wrongGuesses }) => {
  const maxWrongGuesses = 6;

  return (
    <Box sx={{ textAlign: "center", marginTop: "20px" }}>
      <img
        src={require(`/public/images/hangman/Hangman-${wrongGuesses}.png`)}
        alt={`Hangman stage ${wrongGuesses}`}
        style={{ width: "250px", height: "300px" }}
      />
      <Box sx={{ fontSize: "18px", marginTop: "10px" }}>
        {wrongGuesses}/{maxWrongGuesses} incorrect guesses
      </Box>
    </Box>
  );
};

export default HangmanDrawing;
