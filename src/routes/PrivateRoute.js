import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoadingScreen from '../components/LoadingScreen';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoading, isAuthenticated } = useAuth0();

  return (
    <Route
      exact
      {...rest}
      render={(props) => {
        if (isLoading) {
          return <LoadingScreen loadingMsg='Logging in, please wait..' />;
        }

        if (isAuthenticated === true) {
          return <Component {...props} />;
        } else {
          return <Redirect to='/' />;
        }
      }}
    />
  );
};

export default PrivateRoute;
