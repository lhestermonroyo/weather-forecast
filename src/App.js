import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Routes from './routes';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
