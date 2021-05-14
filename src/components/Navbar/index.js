import React from 'react';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='logo-container'>
          <img src={logo} alt='logo' />
          <p>Weather Forecast</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
