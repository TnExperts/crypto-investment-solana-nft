import React from 'react';
import { Redirect } from 'react-router';
import { auth } from '../../config/firebase';

interface Props {}

const ProtectedRoute: React.FC<Props> = (props) => {
  return (
    <div>
      {auth.currentUser ? (
        <div>{props.children}</div>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default ProtectedRoute;
