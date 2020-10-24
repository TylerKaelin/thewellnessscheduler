import React, {useState} from 'react'

export default function HealthChecker() {
    
    const [isFatigued, setIsFatigued] = useState(false);
    const [hasFever, setHasFever] = useState(false);
    const [hasCough, setHasCough] = useState(false);
        
    return (
        <form>
            <h3>Sign In</h3>

            <div className='form-group'>
          <p>Have you experienced any of the following symptoms in the past 48 hours?</p>
        
        <label>
            Fever or Chills:
            <input
            name="hasFever"
            type="checkbox"
            onChange={setHasFever(true)}
          />
          </label>

          <br/>

          <label>
            Cough:
            <input
            name="hasCough"
            type="checkbox"
            onChange={setHasCough(true)}
          />
          </label>

          <br/>

          <label>
            Fatigue:
            <input
            name="isFatigued"
            type="checkbox"
            onChange={setIsFatigued(true)}
          />          
          </label>

        </div>
        </form>
    );
}
