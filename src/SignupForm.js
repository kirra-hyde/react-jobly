import React from "react";

/** Renders registration form.
 *
 * Props: signUp()
 *
 * State: formData
 *
 * RoutesList -> SignupForm -> Homepage
 */


function SignupForm( { signUp }) {

  signUp({username: "pekdfjglkjon23hjkhjkhjk", firstName: "Kirra", lastName: "Hyde", email: "email@gmail.com", password: "password"});
  console.log("In form")
  return (
    <h1>SignupForm</h1>
  )
}

export default SignupForm;