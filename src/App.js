import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './routes';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
