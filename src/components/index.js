import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Signin from './Signin';
import Signup from './Signup';
import Error from './Error';
import EmployerHome from './EmployerHome';
import EmployeeHome from './EmployeeHome';
import EmployerSchedule from './EmployerSchedule';
import EmployeeSchedule from './EmployeeSchedule';

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
        <Route path='/employer'>
          <EmployerHome />
        </Route>
        <Route path='/employer/schedule'>
          <EmployerSchedule />
        </Route>
        <Route path='/employee'>
          <EmployeeHome />
        </Route>
        <Route path='/employee/schedule'>
          <EmployeeSchedule />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;