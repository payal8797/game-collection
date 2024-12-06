import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import './FourInARow.css';
import FourInARowManual from './FourInARowManual';

const ROWS = 6;
const COLS = 7;

type Player = 'Red' | 'Yellow' | null;

interface DropIndex {
  row: number;
  col: number;
}

const FourInARow: React.FC = () => {
  const [board, setBoard] = useState<Player[][]>(
    Array(ROWS).fill(null).map(() => Array(COLS).fill(null))
  );
  const [currentPlayer, setCurrentPlayer] = useState<Player>('Red');
  const [winner, setWinner] = useState<Player>(null);
  const [dropIndex, setDropIndex] = useState<DropIndex | null>(null);

  const dropDisc = (colIdx: number): void => {
    if (winner) return;

    const newBoard = board.map(row => row.slice());
    for (let row = ROWS - 1; row >= 0; row--) {
      if (!newBoard[row][colIdx]) {
        newBoard[row][colIdx] = currentPlayer;
        setDropIndex({ row, col: colIdx });
        setBoard(newBoard);
        checkWinner(newBoard, row, colIdx);
        setCurrentPlayer(currentPlayer === 'Red' ? 'Yellow' : 'Red');
        setTimeout(() => setDropIndex(null), 500); // Reset drop index after animation
        break;
      }
    }
  };

  const checkWinner = (board: Player[][], row: number, col: number): void => {
    const directions = [
      { x: 0, y: 1 }, // Horizontal
      { x: 1, y: 0 }, // Vertical
      { x: 1, y: 1 }, // Diagonal \
      { x: 1, y: -1 } // Diagonal /
    ];

    for (const { x, y } of directions) {
      let count = 1;

      count += countDiscs(board, row, col, x, y);
      count += countDiscs(board, row, col, -x, -y);

      if (count >= 4) {
        setWinner(currentPlayer);
        return;
      }
    }
  };

  const countDiscs = (
    board: Player[][],
    row: number,
    col: number,
    x: number,
    y: number
  ): number => {
    let count = 0;
    let r = row + y;
    let c = col + x;

    while (r >= 0 && r < ROWS && c >= 0 && c < COLS && board[r][c] === currentPlayer) {
      count++;
      r += y;
      c += x;
    }
    return count;
  };

  const renderCell = (row: number, col: number): JSX.Element => {
    return (
      <div
        className={`cell ${board[row][col] || ''} ${
          dropIndex && dropIndex.col === col ? 'drop-animation' : ''
        }`}
        onClick={() => dropDisc(col)}
        key={col}
      />
    );
  };

  return (
    <div className="game-container">
      <div className="board">
        {board.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((cell, colIndex) => renderCell(rowIndex, colIndex))}
          </div>
        ))}
      </div>
      <div className="status">
        {winner ? `${winner} Wins!` : `Current Player: ${currentPlayer}`}
      </div>
      <FourInARowManual/>
    </div>
  );
};

export default FourInARow;
