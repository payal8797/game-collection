import React from 'react';
import './FourInARow.css';
import { Typography } from '@mui/material';  

const FourInARowManual: React.FC = () => {

  return (
    <div className="manual" >
      <Typography variant="h6" gutterBottom>
        Four in a row Game Manual
      </Typography>
      <Typography variant="body1">
        Objective: Be the first to get three marks in a row (horizontally, vertically, or diagonally).
      </Typography>
      <Typography variant="body1">
        How to Play:
        <ul>
          <li>Players take turns dropping discs into columns.</li>
          <li>The goal is to connect four of your discs in a row:</li>
          <ul>
            <li>Horizontally</li>
            <li>Vertically</li>
            <li>Diagonally</li>
          </ul>
          <li>First player to connect four wins!</li>
        </ul>
      </Typography>
      <Typography variant="body1" paragraph>
        Winning Conditions:
        <ul>
          <li>Complete a horizontal, vertical, or diagonal line with your disc.</li>
        </ul>
      </Typography>
    </div>
   
  );
};

export default FourInARowManual;
