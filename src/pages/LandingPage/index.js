import React from 'react';
import Main from '../../components/Main';

const LandingPage = () => {
  return (
    <Main>
      <div className='landing-container'>
        <p>
          Welcome to the weather forecast web application. Please login with
          your Github user to use the application and view the weather in your
          city.
        </p>
        <button className='btn-default'>Login</button>
      </div>
    </Main>
  );
};

export default LandingPage;
