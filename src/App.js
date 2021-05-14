import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './App.css';
import Navbar from './components/Navbar';
import Routes from './routes';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

console.log(domain);

const App = () => {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <React.Fragment>
        <Navbar />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </React.Fragment>
    </Auth0Provider>
  );
};

export default App;
