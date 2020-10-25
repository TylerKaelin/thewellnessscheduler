import React from 'react';
import Scheduler from "./CalendarComponent/App";
import EmployeeHomeDesign from "./EmployeeHomeDesign";

export default function Schedule() {
    return (
      <div>
        <div>
          <EmployeeHomeDesign></EmployeeHomeDesign>
        </div>
        <div>
          <Scheduler></Scheduler>
        </div>
      </div>
    );
}
