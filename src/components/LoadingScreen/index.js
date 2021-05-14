import React from 'react';
import logo from '../../assets/logo.png';

const LoadingScreen = (props) => {
  const { loadingMsg } = props;
  return (
    <div className='loading-screen'>
      <img src={logo} alt='logo' />
      <p>{loadingMsg}</p>
    </div>
  );
};

export default LoadingScreen;
