import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/LandingPage/Home';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import Dashboard from './pages/Dashboard';
import Header from './components/Header/HeaderComponent';
import Assets from './pages/ProtectedRoutes/Cryptocurrecies/Assets';
import Crypto from './pages/ProtectedRoutes/Crypto/Asset';

const App: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />

        {/* Protected Routes */}

        <Route exact path="/cryptocurrencies/" component={Assets} />
        <Route path="/cryptocurrencies/:id" component={Crypto} />
        <Route exact path="/dashboard" component={Dashboard} />
        {/* <Route exact path="/dashboard" component={Dashboard} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
