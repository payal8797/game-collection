import React from "react";
import { Box, Button } from "@mui/material";

interface KeyboardProps {
  onLetterClick: (letter: string) => void;
  guessedLetters: string[];
  word: string;
  disabled: boolean;
}

const Keyboard: React.FC<KeyboardProps> = ({
  onLetterClick,
  guessedLetters,
  word,
  disabled,
}) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const rows = [
    alphabet.slice(0, 10), // First row: A-J
    alphabet.slice(10, 19), // Second row: K-S
    alphabet.slice(19), // Third row: T-Z
  ];

  return (
    <Box className="keyboard">
      {rows.map((row, rowIndex) => (
        <Box key={rowIndex} className="keyboard-row">
          {row.map((letter) => {
            const isGuessed = guessedLetters.includes(letter);
            const isCorrect = word.includes(letter);

            return (
              <Button
                key={letter}
                variant="contained"
                onClick={() => onLetterClick(letter)}
                disabled={disabled || isGuessed}
                className={`keyboard-button ${
                  isGuessed ? (isCorrect ? "correct" : "wrong") : ""
                }`}
                sx={{
                  backgroundColor: isGuessed
                    ? isCorrect
                      ? "#4caf50"
                      : "#f44336"
                    : "#ffffff",
                  color: isGuessed ? "#ffffff" : "#000000",
                  "&:hover": {
                    backgroundColor: isGuessed
                      ? isCorrect
                        ? "#45a049"
                        : "#d32f2f"
                      : "#e0e0e0",
                  },
                  fontWeight: "bold",
                  fontSize: "1rem",
                  width: "48px",
                  height: "48px",
                  margin: "4px",
                }}
              >
                {letter}
              </Button>
            );
          })}
        </Box>
      ))}
    </Box>
  );
};

export default Keyboard;
