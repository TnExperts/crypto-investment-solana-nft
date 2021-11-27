import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Header from './components/Header/HeaderComponent';
import DashboardHeader from './components/DashboardComponents/DashboardHeader/DashboardHeader';
import { auth } from './config/firebase';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const App: React.FC<{}> = (props) => {
  return (
    <BrowserRouter>
      {!auth.currentUser ? <Header /> : <DashboardHeader />}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <ProtectedRoute>
          <DashboardHeader />
          <Route path="/dashboard" exact component={Dashboard} />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
