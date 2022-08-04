import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './App.css';
import Navbar from './components/Navbar';
import Routes from './routes';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const App = () => {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <React.Fragment>
        <Navbar />
        <HashRouter>
          <Routes />
        </HashRouter>
      </React.Fragment>
    </Auth0Provider>
  );
};

export default App;
