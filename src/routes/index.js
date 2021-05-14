import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const LandingPage = React.lazy(() => import('../pages/LandingPage'));
const HomePage = React.lazy(() => import('../pages/HomePage'));
const WeatherPage = React.lazy(() => import('../pages/WeatherPage'));

const Routes = () => {
  return (
    <Switch>
      <React.Suspense fallback={<p>Loading page, please wait...</p>}>
        <Route exact path='/' component={LandingPage} />
        <PrivateRoute exact path='/home' component={HomePage} />
        <PrivateRoute exact path='/weather/:city' component={WeatherPage} />
      </React.Suspense>
    </Switch>
  );
};

export default Routes;
