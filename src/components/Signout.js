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
          <text style={{color: "blue", borderRadius: "0.5rem"}}>
            <u>Click here to go back to the sign in page</u>
          </text>
        </Link>
      </div>
    </div>
  )
}
