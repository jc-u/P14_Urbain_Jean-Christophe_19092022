import React from "react"
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (

  <div className="header">
    <div className="home__title">
      <h1>HRnet</h1><h2>WEALTH HEALTH</h2>
    </div>        
    <aside>
      <div className="navigation">
        <NavLink to={"/"} end><img src={logo} alt="logo" aria-label={"Home"} title="HomePage" role="navigation"	aria-describedby="navigation" tabIndex="0"/></NavLink>
        <NavLink to={"/"} end><FontAwesomeIcon icon={faUserPlus} className="picto" aria-label="Home" title="HomePage" role="navigation"	aria-describedby="navigation" tabIndex="0" /><p><FontAwesomeIcon icon={faUserPlus}/>Create Employee</p></NavLink>      
        <NavLink to={"/employee-list"}><FontAwesomeIcon icon={faEye} className="picto" aria-label="Employee List" title="EmployeeList" role="navigation" aria-describedby="navigation" tabIndex="0"/><p><FontAwesomeIcon icon={faEye} />Show Employees</p></NavLink>
      </div>
    </aside>
  </div>
  )
}

export default Header