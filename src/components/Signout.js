import React from 'react'
import { Link } from 'react-router-dom'

export default function Schedule() {
    return (
      <div>
        <div>
            Sign out was successful!
        </div>
        <div>
          <Link to='/'>
            <button>
              Click here to go back to the sign in page
            </button>
          </Link>
        </div>
      </div>
    )
}
