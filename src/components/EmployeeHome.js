import React from 'react'
import { Link } from "react-router-dom"
import Navbar from "./EmployeeNav"

import './about.css';

export default function EmployeeHome() {
    return (
      <div>
        <Navbar />
        <div className='left_content'>
            This is the employee home page.
        </div>
        <div>  
          <Link to='/signout'>
              <button>Logout</button>
          </Link>
        </div>
      </div>
    )
}
