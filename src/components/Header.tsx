import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  gameName?: string;
}

const Header: React.FC<HeaderProps> = ({ gameName }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#8B4513' }}>
      <Toolbar>
        <Typography 
          variant="h6" 
          sx={{ flexGrow: 1, fontFamily: 'cursive' }}
        >
          {gameName || 'Game Selector'}
        </Typography>
        {gameName && (
          <>
            <Button color="inherit" onClick={handleRestart}>Restart</Button>
            <Button color="inherit" onClick={handleBack}>Back to All Games</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
