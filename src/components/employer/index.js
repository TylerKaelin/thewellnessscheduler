import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import About from './About';
import Schedule from './Schedule';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/schedule'>
          <Schedule />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
