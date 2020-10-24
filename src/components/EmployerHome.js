import React from 'react'
import { Link } from "react-router-dom"
import Navbar from "./EmployerNav"

import './about.css';

export default function EmployerHome() {
    return (
      <div>
        <Navbar />
        <div className='left_content'>
            This is the employer home page.
        </div>
        <div>  
          <Link to='/signout'>
              <button>Logout</button>
          </Link>
        </div>
      </div>
    )
}
