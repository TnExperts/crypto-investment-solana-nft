import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface CardComponentProps {
  title: string;
  color1: string;
  color2: string;
}

interface Props {}

const cards = [
  {
    title: 'Prices',
    color1: '#ed0027',
    color2: '#faaca8',
  },
  {
    title: 'Market Cap',
    color1: '#bdc3c7 ',
    color2: '#dd2476',
  },
  {
    title: 'Change %',
    color1: '#00cdac',
    color2: '#bdc3c7',
  },
  {
    title: 'Price Chart',
    color1: '#36d1dc',
    color2: '#004e92',
  },
  {
    title: 'Trade',
    color1: '#a8e063',
    color2: '#bdc3c7',
  },
  {
    title: 'Win NFT!',
    color1: '#faaca8',
    color2: '#ff512f',
  },
];

const CardComponent: React.FC<CardComponentProps> = (props) => {
  return (
    <div className="content">
      <Card
        sx={{
          minWidth: 275,
          background: `linear-gradient(${props.color1},${props.color2})`,
          color: 'white',
          transform: `rotateY(360deg)`,
          transition: '0.3s',
        }}
      >
        <CardContent>
          <h4>{props.title}</h4>
        </CardContent>
      </Card>
    </div>
  );
};

const Home: React.FC<Props> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Crypto Trading App! 👋💎</h1>
        <div className="home-content">
          {cards.map((card) => {
            return (
              <CardComponent
                title={card.title}
                color1={card.color1}
                color2={card.color2}
              />
            );
          })}
        </div>
      </header>
    </div>
  );
};

export default Home;
