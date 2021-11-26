import React from 'react';
import LoginComponent from '../components/Login/LoginComponent';

interface Props {}

const Login: React.FC<Props> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <LoginComponent />
      </header>
    </div>
  );
};

export default Login;
