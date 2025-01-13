import React, { useState } from "react";
import { Box, Button, TextField, Typography, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import Board from "./Board";

type SquareValue = "X" | "O" | null;

const TicTacToe: React.FC = () => {
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);

  const [player1, setPlayer1] = useState<string>("");
  const [player2, setPlayer2] = useState<string>("");
  const [player1Symbol, setPlayer1Symbol] = useState<SquareValue>("X");
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);

  const handleSquareClick = (index: number): void => {
    if (squares[index] || calculateWinner(squares)) return;

    const nextSquares = [...squares];
    nextSquares[index] = isXNext ? player1Symbol : player1Symbol === "X" ? "O" : "X";
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  };

  const handleStartGame = (): void => {
    if (player1 && player2) {
      setIsGameStarted(true);
    } else {
      alert("Please enter both player names.");
    }
  };

  const winner = calculateWinner(squares);
  const isDraw = squares.every((square) => square !== null) && !winner;

  const status = winner
    ? `Winner: ${winner === player1Symbol ? player1 : player2}`
    : isDraw
    ? "It's a draw!"
    : `Current Player: ${isXNext ? player1 : player2}`;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      margin={10}
    >
      {!isGameStarted ? (
        <>
         
          <TextField
            label="Player 1 Name"
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
            variant="outlined"
            margin="normal"
          />
          <TextField
            label="Player 2 Name"
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
            variant="outlined"
            margin="normal"
          />
          <Typography variant="body1" mt={2}>
            Player 1, choose your symbol:
          </Typography>
          <RadioGroup
            row
            value={player1Symbol}
            onChange={(e) => setPlayer1Symbol(e.target.value as SquareValue)}
          >
            <FormControlLabel value="X" control={<Radio />} label="X" />
            <FormControlLabel value="O" control={<Radio />} label="O" />
          </RadioGroup>
          <Button
            variant="contained"
            color="primary"
            onClick={handleStartGame}
            sx={{ mt: 3 }}
          >
            Start Game
          </Button>
        </>
      ) : (
        <>
          <Typography variant="h5" mb={2}>
            {player1} ({player1Symbol}) vs {player2} ({player1Symbol === "X" ? "O" : "X"})
          </Typography>
          <Typography variant="h6" mb={2}>
            {status}
          </Typography>
          <Board squares={squares} onSquareClick={handleSquareClick} />
        </>
      )}
    </Box>
  );
};

const calculateWinner = (squares: SquareValue[]): SquareValue => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default TicTacToe;
