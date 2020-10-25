import React from 'react'
import EmployerHomeDesign from './EmployerHomeDesign'

function ContactTracer() {
  return (
    <div>
      <div>
        <EmployerHomeDesign></EmployerHomeDesign>
      </div>
      <div>
        <h1>Contact Tracer</h1>
        <input type="text" placeholder="Enter Name"/>
          <button type="button" style={{backgroundColor: "orange", color: "white", borderRadius: "0.5em"}}>
            Search Employee Name
          </button>
      </div>
    </div>
  );
}

export default ContactTracer
