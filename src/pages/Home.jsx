import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../data/DataContext";
import Header from "../components/Header"
import Footer from "../components/Footer"
import Select from "../components/Select";
//import Modal from "../components/Modal";
import { states, departement } from "../data/SelectContent";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "@jc-u/modal/dist/Modal";

/* The above code is creating a form that allows the user to create an employee. */

const Home = () => {
  const data = useContext(DataContext);
  const { UserList, setUserList } = data;
  const [selectedState, setSelectedState] = useState(states[0].name);
  const [selectedDepartment, setSelectedDepartment] = useState(departement[0].name);
  const [selectedDateOfBirth, setSelectedDateOfBirth] = useState("");
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [ModalShowed, setModalShowed] = useState(false);

  const [User, setUser] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    department: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });

  useEffect(() => {
    if (User.state !== selectedState) {
      setUser((User) => ({ ...User, state: states.find((item) => item.name === selectedState) }));
    }
    if (User.department !== selectedDepartment) {
      setUser((User) => ({ ...User, department: departement.find((item) => item.name === selectedDepartment) }));
    }
    if (User.dateOfBirth !== selectedDateOfBirth) {
      setUser((User) => ({ ...User, dateOfBirth: selectedDateOfBirth }));
    }

    if (User.startDate !== selectedStartDate) {
      setUser((User) => ({ ...User, startDate: selectedStartDate }));
    }
  }, [
    User.state,
    User.department,
    User.dateOfBirth,
    User.startDate,
    selectedState,
    selectedDepartment,
    selectedDateOfBirth,
    selectedStartDate,
  ]);

  const onClick = () => {
    setUserList(UserList.concat(User));
    setModalShowed(true);
  };

  return (
    <div className="home">
         {ModalShowed ? <Modal setModalShowed={setModalShowed} /> : ""}
      <Header/>
        
      <div className="home__container">

        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <h3>Personal Information</h3>
          <div className="name">
            <label hmtlfor="first-name">First Name</label>
             <input onChange={(e) => setUser({ ...User, firstName: e.target.value })} type="text" id="first-name" placeholder="First Name" />
              
            <label hmtlfor="last-name">Last Name</label>
            <input onChange={(e) => setUser({ ...User, lastName: e.target.value })} type="text" id="last-name" placeholder="Last Name" />
          </div>
          
          <div className="date-of-birth">
            <label hmtlfor="date-of-birth">Date of Birth</label>
            <DatePicker selected={selectedDateOfBirth} onChange={(date) => setSelectedDateOfBirth(date)} setSelected={setSelectedDateOfBirth} placeholderText={'Date of Birth'}/>
          </div>

          <h3>Personal Address</h3>
          <div className="address">

            <label hmtlfor="street">Street</label>
            <input onChange={(e) => setUser({ ...User, street: e.target.value })} id="street" type="text" placeholder="Street"/>
            <div className="city">
              <label hmtlfor="city">City</label>
              <input onChange={(e) => setUser({ ...User, city: e.target.value })} id="city" type="text" placeholder="City"/>
            
              <Select 
                classSet={"dropdown"}
                selectedItem={selectedState}
                title="State"
                placeholderText={"State"}
                type={states}
                setSelected={setSelectedState} />

              <label hmtlfor="zip-code">Zip Code</label>
              <input onChange={(e) => setUser({ ...User, zipCode: e.target.value })} id="zip-code" type="text" pattern="[0-9]*" placeholder="Zip Code" />
            </div>
          </div>

          <h3>Company Information</h3>

          <div className="company">

          <label hmtlfor="start-date">Start Date</label>
          <DatePicker selected={selectedStartDate} onChange={(date) => setSelectedStartDate(date)} setSelected={setSelectedStartDate} placeholderText={'Date Start'}/>

          <Select classSet={"dropdown"}
            selectedItem={selectedDepartment}
            title="Department"
            placeholderText={"Department"}
            type={departement}
            setSelected={setSelectedDepartment} />
          </div>
        </form>

        <div className="validation">
          <button
            onClick={() => {
              onClick();
            }}>
            Create Employee
          </button>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
};

export default Home;