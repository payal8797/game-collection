import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

interface Game {
  title: string;
  image: string;
  route: string;
}

const games: Game[] = [
  {
    title: 'Tic Tac Toe',
    image: '/images/tic-tac-toe.jpg',
    route: '/tic-tac-toe',
  },
  {
    title: 'Four In A Row',
    image: '/images/four-in-a-row.jpg',
    route: '/four-in-a-row',
  },
  {
    title: 'Memory Match',
    image: '/images/memory-match.png',
    route: '/memory-match',
  },
];

const Home: React.FC = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Select a Game
      </Typography>
      <Grid container spacing={4}>
        {games.map((game, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Link to={game.route} style={{ textDecoration: 'none' }}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={game.image}
                  alt={game.title}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {game.title}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
