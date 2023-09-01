import React, { useState } from "react";

/** Renders login form.
 *
 * Props: login()
 *
 * State: formData
 *
 * RoutesList -> LoginForm -> Homepage
 */

function LoginForm({ login }) {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
    login(formData);
  }

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <h3>Log In</h3>
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
      <button>Submit</button>
    </form>
  );
}

export default LoginForm;