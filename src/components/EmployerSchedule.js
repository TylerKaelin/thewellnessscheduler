import React from 'react'
import Scheduler from "./CalendarComponent/App";
import EmployerHomeDesign from "./EmployerHomeDesign";

export default function Schedule() {
    return (
      <div>
        <div>
          <Scheduler></Scheduler>
        </div>
        <div>
          <EmployerHomeDesign></EmployerHomeDesign>
        </div>
      </div>
    );
}
