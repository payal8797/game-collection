import React from "react";
import { Box, Typography } from "@mui/material";

interface WordDisplayProps {
  word: string;
  guessedLetters: string[];
}

const WordDisplay: React.FC<WordDisplayProps> = ({ word, guessedLetters }) => {
  return (
    <Box className="word-display">
      {word.split("").map((letter, index) => (
        <Typography
          key={index}
          variant="h4"
          className="word-letter"
        >
          {guessedLetters.includes(letter) ? letter : "_"}
        </Typography>
      ))}
    </Box>
  );
};

export default WordDisplay;
