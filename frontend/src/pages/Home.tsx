import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Crypo Trading App! 👋💎</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};

export default Home;
