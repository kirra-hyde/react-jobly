import React from "react";
import { NavLink} from "react-router-dom";


/** Renders navigation bar.
 *
 * Props: none
 *
 * State: none
 *
 * App -> Navigation
*/

function Navigation({auth, logout}) {
  if (!auth){
    return (
      <nav className="Navigation">
        <NavLink to="/"> Jobly </NavLink>
        <NavLink to="/login" end> Login </NavLink>
        <NavLink to="/signup" end> Signup </NavLink>
      </nav>
    )
  }

  return (
    <nav className="Navigation">
      <NavLink to="/"> Jobly </NavLink>
      <NavLink to="/companies" end> Companies </NavLink>
      <NavLink to="/jobs" end> Jobs </NavLink>
      <NavLink onClick={logout} to="/" end> Log out </NavLink>
    </nav>
  )
}

export default Navigation;