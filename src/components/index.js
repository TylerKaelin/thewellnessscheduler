import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Signin from './Signin';
import Signup from './Signup';
import Error from './Error';

const ReactRouterSetup = () => {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Signin />
        </Route>
        <Route path='/Signup'>
          <Signup />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;