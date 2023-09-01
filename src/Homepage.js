import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "./userContext.js";


/** Renders homepage.
 *
 * RoutesList -> Homepage
 */

function Homepage() {

  const { firstName } = useContext(userContext);

  const welcomeMessage = firstName
    ? <h2>Welcome back, {firstName}!</h2>
    : <div>
        <Link to="/login"><button>Log in</button></Link>
        <Link to="/signup"><button>Sign up</button></Link>
      </div>;


  return (
    <div className="Homepage">
      <h1 className="Homepage-title">
        Jobly
      </h1>
      <h3 className="Homepage-slogan">
        All jobs in one, convenient place.
      </h3>
      {welcomeMessage}
    </div>
  );
}


export default Homepage;