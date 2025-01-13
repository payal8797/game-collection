import React from "react";
import { Button } from "@mui/material";

type SquareProps = {
  value: "X" | "O" | null;
  onClick: () => void;
};

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      style={{
        width: 60,
        height: 60,
        fontSize: "24px",
        fontWeight: "bold",
        color: value === "X" ? "blue" : "red",
      }}
    >
      {value}
    </Button>
  );
};

export default Square;
