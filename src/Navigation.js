import React from "react";
import { NavLink, Link } from "react-router-dom";


/** Renders navigation bar.
 *
 * Props: none
 *
 * State: none
 *
 * App -> Navigation
*/

function Navigation() {
  return (
    <nav className="Navigation">
      <Link to="/"> Jobly </Link>
      <NavLink to="/companies" end> Companies </NavLink>
      <NavLink to="/jobs" end> Jobs </NavLink>
    </nav>
  )
}

export default Navigation;