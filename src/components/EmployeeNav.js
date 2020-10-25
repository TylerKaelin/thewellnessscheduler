import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/employee">Employee Home Page</Link>
        </li>
        <li>
          <Link to="/employee/schedule">Schedule</Link>
        </li>
        <li>
          <Link to="/employee/healthchecker">Health Checker</Link>
        </li>
        <li>
          <Link to="/employee/availability">Availability</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;