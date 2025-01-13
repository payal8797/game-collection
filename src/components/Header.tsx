import React from 'react';
import { AppBar, Toolbar, Typography, Button, Modal, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TicTacToeManual from './TicTacToe/TicTacToeManual';
import FourInARowManual from './FourInARow/FourInARowManual';
import MemoryMatchManual from './MemoryMatch/MemoryMatchManual';

interface HeaderProps {
  gameName?: string;
}

const Header: React.FC<HeaderProps> = ({ gameName }) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleBack = () => {
    navigate('/');
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
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
            <Button color="inherit" onClick={handleOpen}>Manual</Button>
            <Button color="inherit" onClick={handleRestart}>Restart</Button>
            <Button color="inherit" onClick={handleBack}>Back to All Games</Button>
          </>
        )}

        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box sx={style}>
           {gameName === 'Tic Tac Toe' && <TicTacToeManual />}
           {gameName === 'Four In A Row' && <FourInARowManual />}
           {gameName === 'Match Game' && <MemoryMatchManual />}
    
          </Box>
        </Modal>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
