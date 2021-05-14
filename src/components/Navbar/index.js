import React from 'react';
import logo from '../../assets/logo.png';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth0();

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='logo-container'>
          <img src={logo} alt='logo' />
          <p>Weather Forecast</p>
        </div>
        {isAuthenticated && (
          <button className='navbar-btn btn-default' onClick={() => logout()}>
            Log Out
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
