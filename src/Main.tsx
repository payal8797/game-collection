import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import TicTacToe from './components/TicTacToe/TicTacToe';
import FourInARow from './components/FourInARow/FourInARow';
import MemoryMatch from './components/MemoryMatch/MemoryMatch';
import Home from './pages/Home';
import Header from './components/Header';

const Main: React.FC = () => {
  const location = useLocation();

  const getGameName = (): string => {
    switch (location.pathname) {
      case '/tic-tac-toe':
        return 'Tic Tac Toe';
      case '/four-in-a-row':
        return 'Four In A Row';
      case '/match-game':
        return 'Match Game';
      default:
        return '';
    }
  };

  return (
    <>
      <Header gameName={getGameName()} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/four-in-a-row" element={<FourInARow />} />
        <Route path="/memory-match" element={<MemoryMatch />} />
      </Routes>
    </>
  );
};

export default Main;
