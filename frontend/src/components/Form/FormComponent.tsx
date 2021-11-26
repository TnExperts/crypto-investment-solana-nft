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
          <form action="/dashboard">
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            {props.buttonText === 'Login' ? (
              <>
                <p className="form_extra_font">
                  <Link to="/register" className="link">
                    Don't have an account?
                  </Link>
                </p>

                {/* <p className="form_extra_font">Forgot your password?</p> */}
              </>
            ) : (
              <p className="form_extra_font">
                <Link to="/login" className="link">
                  Already have an account?
                </Link>
              </p>
            )}
            <button type="submit">{props.buttonText}</button>
          </form>
        </div>
      </Box>
    </div>
  );
};

export default FormComponent;
