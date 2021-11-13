import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const AddTodo = lazy(() => import('./pages/AddTodo'));
const EditTodo = lazy(() => import('./pages/EditTodo'));
const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));

// readable routes linter
/* eslint react/jsx-max-props-per-line: 0 */

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/add-todo" exact component={AddTodo} />
        <Route path="/edit-todo/:todoId" exact component={EditTodo} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
