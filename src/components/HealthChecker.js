import React from 'react'
import Navbar from './EmployeeNav'

const HealthChecker = () => {

        
  return (
    <form>
      <Navbar />
      <h3>Health Form</h3>

      <div className="form-group">
        <p>
          Have you experienced any of the following symptoms in the past 48
          hours?
        </p>

        <input name="hasFever" type="checkbox" />
        <label>&nbsp; Fever or Chills</label>

        <br />

        <input name="hasCough" type="checkbox" />
        <label>&nbsp; Cough</label>

        <br />

        <input name="isFatigued" type="checkbox" />
        <label>&nbsp; Fatigue</label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default HealthChecker;