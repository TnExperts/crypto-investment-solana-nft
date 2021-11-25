import React from 'react';
import FormComponent from '../Form/FormComponent';

interface Props {}

const LoginComponent: React.FC<Props> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Login</h1>
        <FormComponent buttonText="Login" actionLink="/login" />
      </header>
    </div>
  );
};

export default LoginComponent;
