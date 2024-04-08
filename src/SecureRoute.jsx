// SecureRoute.js
import React, { useEffect } from 'react';
import { Route, Navigate } from 'react-router-dom';
import keycloak from './keycloack';


const SecureRoute = ({ element, ...rest }) => {
  useEffect(() => {
    const checkAuth = async () => {
      await keycloak.init({ onLoad: 'check-sso' });
    };

    checkAuth();
  }, []);

  return keycloak.authenticated ? <Route {...rest} element={element} /> : <Navigate to="/login" />;
};

export default SecureRoute;
