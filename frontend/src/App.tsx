import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Header from './components/Header/HeaderComponent';
import DashboardHeader from './components/DashboardComponents/DashboardHeader/DashboardHeader';

const App: React.FC<{}> = (props) => {
  const auth: boolean = false;
  return (
    <BrowserRouter>
      {auth ? <Header /> : <DashboardHeader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
