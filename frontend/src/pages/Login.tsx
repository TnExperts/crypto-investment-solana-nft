import React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

interface Props {}

const Login: React.FC<Props> = () => {
  const [isLoggingIn, setIsLoggingIn] = React.useState<boolean>(false);
  const [userEmail, setUserEmail] = React.useState<string>('');
  const [userPassword, setUserPassword] = React.useState<string>('');
  const [error, setError] = React.useState<string>('');

  const history = useHistory();

  const logUserWithEmailAndPassword = () => {
    if (error !== '') {
      setError('');
    }
    setIsLoggingIn(true);
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        // Signed in
        history.push('/dashboard');
      })
      .catch((error) => {
        console.log(error);
        setIsLoggingIn(false);
        const errorCode = error.code;
        // const errorMessage = error.message;
        console.log(errorCode);
        if (
          errorCode === 'auth/wrong-password' ||
          errorCode === 'auth/invalid-email' ||
          errorCode === 'auth/user-not-found'
        ) {
          setError('Email / Password is invalid.');
        }
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        {error !== '' && (
          <Alert severity="error">
            <AlertTitle>{error}</AlertTitle>
          </Alert>
        )}
        <h1>Login</h1>
        <Box
          sx={{
            width: 300,
            height: 300,
            borderRadius: '5%',
          }}
        >
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={(event) => setUserEmail(event.target.value)}
              value={userEmail}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(event) => setUserPassword(event.target.value)}
              value={userPassword}
            />
            <p className="form_extra_font">
              <Link to="/register" className="link">
                Don't have an account?
              </Link>
            </p>
            <button
              type="submit"
              disabled={isLoggingIn}
              onClick={logUserWithEmailAndPassword}
            >
              Register
            </button>
          </div>
        </Box>
      </header>
    </div>
  );
};

export default Login;
