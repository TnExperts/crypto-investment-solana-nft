import React from 'react';
import RegisterComponent from '../components/Register/RegisterComponent';

interface Props {}

const Register: React.FC<Props> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <RegisterComponent />
      </header>
    </div>
  );
};

export default Register;
