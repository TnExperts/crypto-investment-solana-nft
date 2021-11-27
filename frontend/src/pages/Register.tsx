import React from 'react';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useHistory } from 'react-router-dom';

interface Props {}

const Register: React.FC<Props> = () => {
  const [isRegistering, setIsRegistering] = React.useState<boolean>(false);
  const [userEmail, setUserEmail] = React.useState<string>('');
  const [userPassword, setUserPassword] = React.useState<string>('');
  const [error, setError] = React.useState<string>('');

  const history = useHistory();

  const registerUserWithEmailAndPassword = () => {
    if (error !== '') {
      setError('');
    }
    setIsRegistering(true);
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        history.push('/login');
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        // const errorMessage = error.message;
        // Handle Errors
        if (errorCode === 'auth/weak-password') {
          setError('Password should be at least 6 characters.');
        } else if (errorCode === 'auth/email-already-in-use') {
          setError('The email is already in use.');
        } else if (errorCode === 'auth/invalid-email') {
          setError('The email is invalid.');
        }
      });
    setIsRegistering(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        {error !== '' && (
          <Alert severity="error">
            <AlertTitle>{error}</AlertTitle>
          </Alert>
        )}
        <h1>Register</h1>
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
              <Link to="/login" className="link">
                Already have an account?
              </Link>
            </p>
            <button
              disabled={isRegistering}
              type="submit"
              onClick={registerUserWithEmailAndPassword}
            >
              Register
            </button>
          </div>
        </Box>
      </header>
    </div>
  );
};

export default Register;
