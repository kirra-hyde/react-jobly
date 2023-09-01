import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import userContext from "./userContext";


/** Renders navigation bar.
 *
 * Props:
 *  - auth: token
 *  - logout fn
 *
 * State: none
 *
 * App -> Navigation
*/

function Navigation({ auth, logout }) {

  const { username } = useContext(userContext);

  if (!auth) {
    return (
      <nav className="Navigation">
        <NavLink to="/"> Jobly </NavLink>
        <NavLink to="/login" end> Login </NavLink>
        <NavLink to="/signup" end> Signup </NavLink>
      </nav>
    );
  }

  return (
    <nav className="Navigation">
      <NavLink to="/"> Jobly </NavLink>
      <NavLink to="/companies" end> Companies </NavLink>
      <NavLink to="/jobs" end> Jobs </NavLink>
      <NavLink onClick={logout} to="/" end> Log out {username}</NavLink>
    </nav>
  );
}

export default Navigation;