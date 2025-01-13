import React from "react";
import { Grid } from "@mui/material";
import Square from "./Square";

type BoardProps = {
  squares: ("X" | "O" | null)[];
  onSquareClick: (index: number) => void;
};

const Board: React.FC<BoardProps> = ({ squares, onSquareClick }) => {
  return (
    <Grid container spacing={1} justifyContent="center" style={{ maxWidth: 210 }}>
      {squares.map((value, index) => (
        <Grid item xs={4} key={index}>
          <Square value={value} onClick={() => onSquareClick(index)} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Board;
