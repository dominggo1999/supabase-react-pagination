import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './shared/PrivateRoute';
import Spinner from './shared/Spinner/Spinner';
import { SpinnerWrapper } from './shared/Spinner/Spinner.style';

// readable routes linter
/* eslint react/jsx-max-props-per-line: 0 */
import { useAuth } from './context/AuthContext';

const Home = lazy(() => import('./pages/Home'));
const Users = lazy(() => import('./pages/Users'));

const Routes = () => {
  return (
    <Suspense
      fallback={(
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      )}
    >
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/users">
          <Redirect to="/users/1" />
        </Route>
        <Route exact path="/users/:page">
          <Users />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
