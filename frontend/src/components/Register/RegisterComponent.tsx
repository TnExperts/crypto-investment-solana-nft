import React from 'react';
import FormComponent from '../Form/FormComponent';

interface Props {}

const RegisterComponent: React.FC<Props> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Register</h1>
        <FormComponent buttonText="Register" actionLink="/login" />
      </header>
    </div>
  );
};

export default RegisterComponent;
