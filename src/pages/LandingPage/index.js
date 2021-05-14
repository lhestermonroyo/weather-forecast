import React from 'react';
import { Redirect } from 'react-router-dom';
import Main from '../../components/Main';
import { useAuth0 } from '@auth0/auth0-react';
import LoadingScreen from '../../components/LoadingScreen';

const LandingPage = () => {
  const { loginWithRedirect, isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <LoadingScreen loadingMsg='Loggin in, please wait...' />;
  }

  if (isAuthenticated) {
    return <Redirect to='/home' />;
  }

  return (
    <Main>
      <div className='landing-container'>
        <h1>Hello!</h1>
        <p>
          Welcome to the weather forecast web application. Please login with
          your Github user to use the application and view the weather in your
          city.
        </p>
        <button className='btn-default' onClick={() => loginWithRedirect()}>
          Login
        </button>
      </div>
    </Main>
  );
};

export default LandingPage;
