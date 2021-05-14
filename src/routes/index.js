import React from 'react';
import { Switch, Route } from 'react-router-dom';

const LandingPage = React.lazy(() => import('../pages/LandingPage'));
const HomePage = React.lazy(() => import('../pages/HomePage'));
const WeatherPage = React.lazy(() => import('../pages/WeatherPage'));

const Routes = () => {
  return (
    <Switch>
      <React.Suspense fallback={<p>Loading page, please wait...</p>}>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/weather' component={WeatherPage} />
      </React.Suspense>
    </Switch>
  );
};

export default Routes;
