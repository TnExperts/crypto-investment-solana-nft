import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/LandingPage/Home';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import Assets from './pages/ProtectedRoutes/Cryptocurrecies/Assets';
import Crypto from './pages/ProtectedRoutes/Crypto/Asset';
import WatchList from './pages/ProtectedRoutes/Watchlist/WatchList';
import Trading from './pages/ProtectedRoutes/Trading/Trading';
import NFT from './pages/ProtectedRoutes/NFT/NFT';
import FooterComponent from './components/FooterComponent/FooterComponent';

const App: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />

        {/* TODO: Add Protected Route */}

        <Route exact path="/cryptocurrencies/" component={Assets} />
        <Route path="/cryptocurrencies/:id" component={Crypto} />
        <Route exact path="/watchlist" component={WatchList} />
        <Route exact path="/trade" component={Trading} />
        <Route exact path="/nft" component={NFT} />
      </Switch>
      <FooterComponent />
    </BrowserRouter>
  );
};

export default App;
