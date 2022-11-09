import React from "react"
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'

/**
 * The Header function returns a div with a className of "header" that contains a div with a className
 * of "home__title" that contains an h1 and an h2, and an aside that contains a div with a className of
 * "navigation" that contains a NavLink to the home page that contains an img, a NavLink to the home
 * page that contains a FontAwesomeIcon and a p, and a NavLink to the employee-list page that contains
 * a FontAwesomeIcon and a p.
 * @returns A React component.
 */
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