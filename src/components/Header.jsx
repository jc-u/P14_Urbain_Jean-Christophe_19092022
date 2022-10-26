import React from "react"
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
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
        <NavLink to={"/"}><img src={logo} alt="logo"/></NavLink>
        <NavLink to={"/"}><FontAwesomeIcon icon={faUserPlus} className="picto" /><p><FontAwesomeIcon icon={faUserPlus}/>Create Employee</p></NavLink>      
        <NavLink to={"/employee-list"}><FontAwesomeIcon icon={faEye} className="picto" /><p><FontAwesomeIcon icon={faEye} />Show Employees</p></NavLink>
      </div>
    </aside>
  </div>
  )
}

export default Header