import React from 'react'
import { Link } from "react-router-dom"
import Navbar from "./Navbar"

import './about.css';

export default function About() {
    return (
      <div>
        <Navbar />
        <div className='left_content'>
            This is about.
        </div>
        <div>  
          <Link to='/signout'>
              <button>Logout</button>
          </Link>
        </div>
      </div>
    )
}
