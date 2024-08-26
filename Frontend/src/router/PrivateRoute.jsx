// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, isAuthenticate, ...rest }) => {
  return isAuthenticate ? <Component {...rest} /> : <Navigate to="/" />;
};

export default PrivateRoute;
