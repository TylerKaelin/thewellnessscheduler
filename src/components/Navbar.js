import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/employer'>Employer Home Page</Link>
        </li>
        <li>
          <Link to='/employer/schedule'>Schedule</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;