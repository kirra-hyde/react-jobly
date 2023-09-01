import React, { useState } from "react";

/** Renders registration form.
 *
 * Props: signUp()
 *
 * State: formData
 *
 * RoutesList -> SignupForm -> Homepage
 */


function SignupForm( { signUp }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  })

  /** update search term. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData(formData => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  /** On form submission, send searchTerm to parent. */
  function handleSubmit(evt) {
    evt.preventDefault();
    signUp(formData);
  }

  return (
    <form className="SignupForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username: </label>
        <input
            name="username"
            type="text"
            onChange={handleChange}
            value={formData.username}
            required
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
            name="password"
            type="new-password"
            onChange={handleChange}
            value={formData.password}
            required
        />
      </div>
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input
            name="firstName"
            type="text"
            onChange={handleChange}
            value={formData.firstName}
            required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name: </label>
        <input
            name="lastName"
            type="text"
            onChange={handleChange}
            value={formData.lastName}
            required
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
            name="email"
            type="email"
            onChange={handleChange}
            value={formData.email}
            required
        />
      </div>
      <button>Submit</button>
    </form>
  )
}

export default SignupForm;