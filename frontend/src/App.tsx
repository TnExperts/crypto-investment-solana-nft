import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Header from './components/Header/HeaderComponent';
import DashboardHeader from './components/DashboardComponents/DashboardHeader/DashboardHeader';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const App: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <ProtectedRoute>
          <DashboardHeader />
          <Route exact path="/dashboard" component={Dashboard} />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
