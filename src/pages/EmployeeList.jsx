import React from "react";
import { NavLink } from "react-router-dom";


const EmployeeList = () => {
  return (
    <div id="employee" className="container__employee">
      <h1>Current Employees</h1>
      <table id="table__employee" className="display"></table>
      <NavLink to={"/"}>Home</NavLink>
    </div>
  );
};

export default EmployeeList;