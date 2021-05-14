import React from 'react';
import Main from '../../components/Main';
import { useAuth0 } from '@auth0/auth0-react';

const LandingPage = () => {
  const { loginWithRedirect, logout, isLoading, isAuthenticated, user } =
    useAuth0();

  if (isLoading) {
    return (
      <div className='landing-container'>
        <p>Loading, please wait...</p>
      </div>
    );
  }

  if (isAuthenticated) {
    console.log('Logged in', user);
  }

  return (
    <Main>
      <div className='landing-container'>
        <p>
          Welcome to the weather forecast web application. Please login with
          your Github user to use the application and view the weather in your
          city.
        </p>
        <button className='btn-default' onClick={() => loginWithRedirect()}>
          Login
        </button>
        <button className='btn-default' onClick={() => logout()}>
          Logout
        </button>
      </div>
    </Main>
  );
};

export default LandingPage;
