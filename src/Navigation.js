import React from "react";
import { NavLink } from "react-router-dom";

/** Renders navigation bar.
 *
 * App -> Navigation
*/

function Navigation() {
  return (
    <nav className="Navigation">
      <NavLink to="/" end> Jobly </NavLink>
      <NavLink to="/companies" end> Companies </NavLink>
      <NavLink to="/jobs" end> Jobs </NavLink>
    </nav>
  )
}

export default Navigation;