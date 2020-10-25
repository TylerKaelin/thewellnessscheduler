import React, { useState } from 'react'
import EmployeeHomeDesign from "./EmployeeHomeDesign";

const Availability = () => {
  const person = useState({ hours: "" });

  return (
    <>
      <div>
        <EmployeeHomeDesign></EmployeeHomeDesign>
      </div>
      <div>
        <form>
          <h1>Normal Availability &nbsp;</h1>
          <div className="form-control" style={{ borderColor: "white" }}>
            <label htmlFor="hours">Monday-Friday &nbsp;</label>
            <input
              type="text"
              id="hours"
              name="hours"
              placeholder="e.g. 9:00am-5:00pm"
              style={{
                borderColor: "limegreen",
                borderWidth: "1%",
                borderRadius: "0.5em",
              }}
              value={person.hours}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "limegreen",
                color: "white",
                borderRadius: "0.5em",
                marginLeft: "2%"
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div>
        <form>
          <h1>Sick Availability</h1>
          <div className="form-control" style={{ borderColor: "white" }}>
            <label htmlFor="hours">Monday-Friday &nbsp;</label>
            <input
              type="text"
              id="hours"
              name="hours"
              placeholder="e.g. 12:00pm-3:00pm"
              style={{
                borderColor: "red",
                borderWidth: "1%",
                borderRadius: "0.5em",
              }}
              value={person.hours}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "red",
                color: "white",
                borderRadius: "0.5em",
                marginLeft: "2%",
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Availability;
