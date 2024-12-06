import React, { useState } from 'react';
import PlayerSelectionModal from './PlayerSelectionModal';
import './TicTacToe.css';
import TicTacToeManual from './TicTacToeManual';

interface Players {
  player1: string;
  player2: string;
  icon1: string; // Icon for player 1
  icon2: string; // Icon for player 2
}

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<string>('X');
  const [winner, setWinner] = useState<string | null>(null);
  const [players, setPlayers] = useState<Players | null>(null);
 
  const handleClick = (index: number): void => {
    if (board[index] || winner) return; // Ignore if cell is occupied or game is won
    const newBoard = board.slice();
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    const newWinner = calculateWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'); // Switch players
    }
  };

  const calculateWinner = (board: (string | null)[]): string | null => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6], // Diagonals
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // Return the winner
      }
    }
    return null; // No winner yet
  };

  const startGame = (selectedPlayers: Players): void => {
    setPlayers(selectedPlayers);
    setBoard(Array(9).fill(null)); // Reset board
    setCurrentPlayer(selectedPlayers.icon1); // Set starting player
    setWinner(null); // Reset winner
  };
 
  return (
    <div className="game-container">
      {!players && (
        <><PlayerSelectionModal startGame={startGame} /><TicTacToeManual /></>
      )}

      {players && (
        <>
          <div className="board">
            {board.map((cell, index) => (
              <div
                key={index}
                className="cell"
                onClick={() => handleClick(index)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  border: '1px solid #8B4513',
                }}
              >
                {cell}
              </div>
            ))}
          </div>
          {winner && (
            <>
              <div
                className="winner"
                style={{ fontSize: '1.5rem', color: '#228B22' }}
              >
                Winner: {winner === players.icon1 ? players.player1 : players.player2}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default TicTacToe;
