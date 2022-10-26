import React, { useContext, useState } from "react";
import { DataContext } from "../data/DataContext";
import Header from "../components/Header"
import Footer from "../components/Footer"
import Table from "../components/Table";
import Select from "../components/Select";
import { entries } from "../data/SelectContent"
import Pagination from "../components/Pagination";


const EmployeeList = () => {
  const data = useContext(DataContext);
  const { UserList } = data;
  const [selectedItemByPage, setSelectedItemByPage] = useState(entries[0].name)
  const [ItemShowed, setItemShowed] = useState([])
  const [userListAfterSearch, setUserListAfterSearch] = useState([])

  return (
    <>
    
    <div id="employee" className="container__employee">
      <Header/>
      <h2>Show Employees</h2>
      <div className="custom-field">
        <div className="entries-selector">
          <span>Show</span>
          
          <Select 
          classSet={"table-dropdown"}
          type={entries}
          selectedItem={selectedItemByPage}
          setSelected={setSelectedItemByPage} />

        </div>
        
        <Table 
        Userlist={UserList}
        ItemShowed={ItemShowed}
        setUserListAfterSearch={setUserListAfterSearch}
        userListAfterSearch={userListAfterSearch} />
        
        <Pagination 
        Userlist={UserList}
        selectedItemByPage={selectedItemByPage}
        userListAfterSearch={userListAfterSearch}
        setItemShowed={setItemShowed} />
      </div>
      <Footer/>
    </div>    
    </>
  );
};

export default EmployeeList;