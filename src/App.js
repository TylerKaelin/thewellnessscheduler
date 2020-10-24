import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/about.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Error from "./components/Error";
import EmployerHome from "./components/EmployerHome";
import EmployeeHome from "./components/EmployeeHome";
import EmployerSchedule from "./components/EmployerSchedule";
import EmployeeSchedule from "./components/EmployeeSchedule";
import Signout from "./components/Signout";
import HealthChecker from './components/HealthChecker';

function App() {
  return (
    <Router>
      <div className='App'>
        <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
          <div className='container'>
            <Link className='navbar-brand' to={"/sign-in"}>
              Wellness Scheduler
            </Link>
            <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <Link className='nav-link' to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='auth-wrapper'>
          <div className='auth-inner'>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/sign-in' component={Login} />
              <Route path='/sign-up' component={SignUp} />
              <Route exact path='/employer' component={EmployerHome} />
              <Route exact path='/employee' component={EmployeeHome} />
              <Route exact path='/employee/healthchecker' component={HealthChecker} />
              <Route path='/employer/schedule' component={EmployerSchedule} />
              <Route path='/employee/schedule' component={EmployeeSchedule} />
              <Route path='/signout' component={Signout} />
              <Route path='*' component={Error} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
