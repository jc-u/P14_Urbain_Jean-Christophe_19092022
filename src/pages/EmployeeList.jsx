import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../data/DataContext";
import Table from "../components/Table";
import Select from "../components/Select";
import { entries } from "../data/SelectContent"


const EmployeeList = () => {
  const data = useContext(DataContext);
  const { UserList } = data;

  console.log(UserList);

  return (
    <div id="employee" className="container__employee">
      <h1>Current Employees</h1>
      <div className="custom-field">
        <div className="entries-selector">
          <span>Show</span>
          <Select type={entries} />

          <span>entries</span>
        </div>
      </div>
      <Table Userlist={UserList} />
      <NavLink to={"/"}>Home</NavLink>
    </div>
  );
};

export default EmployeeList;