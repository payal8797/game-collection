import React, { useState } from 'react';
import { Button, Collapse, Typography } from '@mui/material';  

const TicTacToeManual: React.FC = () => {
   
  const [manualOpen, setManualOpen] = useState(false);

  const toggleManual = () => {
    setManualOpen(!manualOpen);
  };
  
  return (
      <>
      <Button variant="outlined" onClick={toggleManual} style={{ marginTop: '20px' }}>
        {manualOpen ? 'Hide Manual' : 'Show Manual'}
      </Button>
      <Collapse in={manualOpen} timeout="auto" unmountOnExit>
          <div className="manual" style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <Typography variant="h6" gutterBottom>
              Tic Tac Toe Game Manual
            </Typography>
            <Typography variant="body1" paragraph>
              Objective: Be the first to get three marks in a row (horizontally, vertically, or diagonally).
            </Typography>
            <Typography variant="body1" paragraph>
              How to Play:
              <ul>
                <li>Enter your name and select your icon ("X" or "O").</li>
                <li>Players take turns to place their icon on the 3x3 grid.</li>
                <li>The first player to get three icons in a row wins!</li>
                <li>If all cells are filled without a winner, the game is a draw.</li>
              </ul>
            </Typography>
            <Typography variant="body1" paragraph>
              Winning Conditions:
              <ul>
                <li>Complete a horizontal, vertical, or diagonal line with your icon.</li>
              </ul>
            </Typography>
            <Typography variant="body1" paragraph>
              Tips:
              <ul>
                <li>Start in the center or corners for a better chance to win.</li>
                <li>Always block your opponent if they have two marks in a row.</li>
              </ul>
            </Typography>
          </div>
      </Collapse>
      </>
    
  );
};

export default TicTacToeManual;
