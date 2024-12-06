import React, { useState } from 'react';
import { TextField, Button, IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { CircleOutlined } from '@mui/icons-material';

interface PlayerSelectionModalProps {
  startGame: (players: {
    player1: string;
    icon1: string;
    player2: string;
    icon2: string;
  }) => void;
}

const PlayerSelectionModal: React.FC<PlayerSelectionModalProps> = ({ startGame }) => {
  const [player1, setPlayer1] = useState<string>('');
  const [player2, setPlayer2] = useState<string>('');
  const [icon1, setIcon1] = useState<string>('X');
  const [icon2, setIcon2] = useState<string>('O');
  const [error, setError] = useState<string>('');

  const handleStartGame = (): void => {
    if (!player1 || !player2 || icon1 === icon2) {
      setError('Please fill all fields and ensure icons are different.');
      return;
    }
    startGame({ player1, icon1, player2, icon2 });
  };

  const isSubmitDisabled = (): boolean => {
    return !player1 || !player2 || icon1 === icon2;
  };

  return (
    <div className="game-container" style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ fontFamily: 'cursive', color: '#8B4513' }}>TIC TAC TOE</h1>

      <div style={{ margin: '20px' }}>
        <div>
          <TextField
            required
            label="Player 1 Name"
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
            error={!player1 && !!error} // Show error if the field is empty
            helperText={!player1 && error ? 'Player 1 name required.' : ''} // Error message
          />
          <IconButton onClick={() => setIcon1('X')} color={icon1 === 'X' ? 'primary' : 'default'}>
            <CloseIcon />
          </IconButton>
          <IconButton onClick={() => setIcon1('O')} color={icon1 === 'O' ? 'primary' : 'default'}>
            <CircleOutlined />
          </IconButton>
        </div>

        <div>
          <TextField
            required
            label="Player 2 Name"
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
            error={!player2 && !!error} // Show error if the field is empty
            helperText={!player2 && error ? 'Player 2 name required.' : ''} // Error message
          />
          <IconButton onClick={() => setIcon2('X')} color={icon2 === 'X' ? 'primary' : 'default'}>
            <CloseIcon />
          </IconButton>
          <IconButton onClick={() => setIcon2('O')} color={icon2 === 'O' ? 'primary' : 'default'}>
            <CircleOutlined />
          </IconButton>
        </div>
      </div>

      <Button
        onClick={handleStartGame}
        style={{ backgroundColor: '#8B4513', color: 'white' }}
        disabled={isSubmitDisabled()} // Disable button if not valid
      >
        Start Game
      </Button>

      {/* SnackBar for error messages */}
      {error && (
        <Snackbar
          open={Boolean(error)}
          autoHideDuration={6000}
          onClose={() => setError('')}
          message={error}
        />
      )}
    </div>
  );
};

export default PlayerSelectionModal;
