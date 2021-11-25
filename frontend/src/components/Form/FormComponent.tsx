import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

interface Props {
  buttonText: string;
  actionLink: string;
}

const FormComponent: React.FC<Props> = (props) => {
  return (
    <div>
      <Box
        sx={{
          width: 300,
          height: 300,
          borderRadius: '5%',
        }}
      >
        <div>
          <form action="">
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            {props.buttonText == 'Login' ? (
              <p>Forgot your password?</p>
            ) : (
              <p>Don't have an account?</p>
            )}
            <button type="submit">{props.buttonText}</button>
          </form>
        </div>
      </Box>
    </div>
  );
};

export default FormComponent;
