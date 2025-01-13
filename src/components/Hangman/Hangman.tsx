import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import HangmanDrawing from "./HangmanDrawing";
import Keyboard from "./Keyboard";

const HangmanGame: React.FC = () => {
  const [secretWord, setSecretWord] = useState("");
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const maxWrongGuesses = 6;

  const handleLetterClick = (letter: string) => {
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters((prev) => [...prev, letter]);

    if (!word.includes(letter)) {
      setWrongGuesses((prev) => prev + 1);
    }
  };

  const handleStartGame = () => {
    setWord(secretWord.toUpperCase());
    setIsGameStarted(true);
    setGuessedLetters([]);
    setWrongGuesses(0);
  };

  const isGameOver = wrongGuesses >= maxWrongGuesses;
  const isWinner = word.split("").every((letter) => guessedLetters.includes(letter));

  return (
    <Box sx={{ textAlign: "center", marginTop: "40px" }}>
      {!isGameStarted ? (
        <Box sx={{
            display: "flex",
            flexDirection: "column", 
            alignItems: "center",
            gap: 2,
            marginTop: "40px",
          }}>
          <TextField
              label="Player 1: Enter a word"
              type="password"
              className="word-input"
              onChange={(e) => setSecretWord(e.target.value)}
              sx={{ marginTop: "20px", width: "300px" }}
            />
          <Button
            variant="contained"
            color="primary"
            onClick={handleStartGame}
          >
            Start Game
          </Button>
        </Box>
      ) : (
        <Box>
          <HangmanDrawing wrongGuesses={wrongGuesses} />

          <Typography variant="h5" sx={{ margin: "20px 0" }}>
            {word
              .split("")
              .map((letter) =>
                guessedLetters.includes(letter) ? letter : "_"
              )
              .join(" ")}
          </Typography>

          <Keyboard
            onLetterClick={handleLetterClick}
            guessedLetters={guessedLetters}
            word={word}
            disabled={isGameOver || isWinner}
          />

          {(isWinner || isGameOver) && (
            <Typography variant="h4" sx={{ marginTop: "20px" }}>
              {isWinner
                ? "🎉 Player 2 Wins!"
                : `😢 Game Over! The word was "${word}"`}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default HangmanGame;
