import React, { useState } from 'react'
import EmployeeHomeDesign from "./EmployeeHomeDesign";

const Availability = () => {
  const person = useState({ hours: "" });

  return (
    <>
      <div>
        <EmployeeHomeDesign></EmployeeHomeDesign>
      </div>
      <form style={{ float: "left" }}>
        <h1>Normal Availability &nbsp;</h1>
        <div className="form-control" style={{ borderColor: "white" }}>
          <label htmlFor="hours">Monday &nbsp;</label>
          <input
            type="text"
            id="hours"
            name="hours"
            style={{
              borderColor: "limegreen",
              borderWidth: "1%",
              borderRadius: "0.5em",
              float: "right",
            }}
            value={person.hours}
          />
        </div>
        <div className="form-control" style={{ borderColor: "white" }}>
          <label htmlFor="hours">Tuesday &nbsp;</label>
          <input
            type="text"
            id="hours"
            name="hours"
            style={{
              borderColor: "limegreen",
              borderWidth: "1%",
              borderRadius: "0.5em",
              float: "right",
            }}
            value={person.hours}
          />
        </div>
        <div className="form-control" style={{ borderColor: "white" }}>
          <label htmlFor="hours">Wednesday &nbsp;</label>
          <input
            type="text"
            id="hours"
            name="hours"
            style={{
              borderColor: "limegreen",
              borderWidth: "1%",
              borderRadius: "0.5em",
              float: "right",
            }}
            value={person.hours}
          />
        </div>
        <div className="form-control" style={{ borderColor: "white" }}>
          <label htmlFor="hours">Thursday &nbsp;</label>
          <input
            type="text"
            id="hours"
            name="hours"
            style={{
              borderColor: "limegreen",
              borderWidth: "1%",
              borderRadius: "0.5em",
              float: "right",
            }}
            value={person.hours}
          />
        </div>
        <div className="form-control" style={{ borderColor: "white" }}>
          <label htmlFor="hours">Friday &nbsp;</label>
          <input
            type="text"
            id="hours"
            name="hours"
            style={{
              borderColor: "limegreen",
              borderWidth: "1%",
              borderRadius: "0.5em",
              float: "right",
            }}
            value={person.hours}
          />
        </div>
        <div className="form-control" style={{ borderColor: "white" }}>
          <label htmlFor="hours">Saturday &nbsp;</label>
          <input
            type="text"
            id="hours"
            name="hours"
            style={{
              borderColor: "limegreen",
              borderWidth: "1%",
              borderRadius: "0.5em",
              float: "right",
            }}
            value={person.hours}
          />
        </div>
        <div className="form-control" style={{ borderColor: "white" }}>
          <label htmlFor="hours">Sunday &nbsp;</label>
          <input
            type="text"
            id="hours"
            name="hours"
            style={{
              borderColor: "limegreen",
              borderWidth: "1%",
              borderRadius: "0.5em",
              float: "right",
            }}
            value={person.hours}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "limegreen",
            color: "white",
            borderRadius: "12%",
            marginTop: "5.5%",
            marginRight: "20%",
            float: "right",
          }}
        >
          Submit
        </button>
      </form>
      <form style={{ clear: "right" }}>
        <h1>Sick Availability</h1>
        <div className="form-control" style={{ borderColor: "white" }}>
          <label htmlFor="hours">Monday &nbsp;</label>
          <input
            type="text"
            id="hours"
            name="hours"
            style={{
              borderColor: "red",
              borderWidth: "1%",
              borderRadius: "0.5em",
              float: "right",
            }}
            value={person.hours}
          />
        </div>
        <div className="form-control" style={{ borderColor: "white" }}>
          <label htmlFor="hours">Tuesday &nbsp;</label>
          <input
            type="text"
            id="hours"
            name="hours"
            style={{
              borderColor: "red",
              borderWidth: "1%",
              borderRadius: "0.5em",
              float: "right",
            }}
            value={person.hours}
          />
        </div>
        <div className="form-control" style={{ borderColor: "white" }}>
          <label htmlFor="hours">Wednesday &nbsp;</label>
          <input
            type="text"
            id="hours"
            name="hours"
            style={{
              borderColor: "red",
              borderWidth: "1%",
              borderRadius: "0.5em",
              float: "right",
            }}
            value={person.hours}
          />
        </div>
        <div className="form-control" style={{ borderColor: "white" }}>
          <label htmlFor="hours">Thursday &nbsp;</label>
          <input
            type="text"
            id="hours"
            name="hours"
            style={{
              borderColor: "red",
              borderWidth: "1%",
              borderRadius: "0.5em",
              float: "right",
            }}
            value={person.hours}
          />
        </div>
        <div className="form-control" style={{ borderColor: "white" }}>
          <label htmlFor="hours">Friday &nbsp;</label>
          <input
            type="text"
            id="hours"
            name="hours"
            style={{
              borderColor: "red",
              borderWidth: "1%",
              borderRadius: "0.5em",
              float: "right",
            }}
            value={person.hours}
          />
        </div>
        <div className="form-control" style={{ borderColor: "white" }}>
          <label htmlFor="hours">Saturday &nbsp;</label>
          <input
            type="text"
            id="hours"
            name="hours"
            style={{
              borderColor: "red",
              borderWidth: "1%",
              borderRadius: "0.5em",
              float: "right",
            }}
            value={person.hours}
          />
        </div>
        <div className="form-control" style={{ borderColor: "white" }}>
          <label htmlFor="hours">Sunday &nbsp;</label>
          <input
            type="text"
            id="hours"
            name="hours"
            style={{
              borderColor: "red",
              borderWidth: "1%",
              borderRadius: "0.5em",
              float: "right",
            }}
            value={person.hours}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "red",
            color: "white",
            borderRadius: "12%",
            marginTop: "3%",
            marginRight: "12%",
            float: "right",
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Availability;
