import React, { useState } from "react";

/** Renders user profile form.
 *
 * Props: editUser()
 *
 * State: formData
 *
 * RoutesList -> Profile
 */


function ProfileForm({ editUser, user }) {

  const [formData, setFormData] = useState({
    username: "",  //TODO: figure out how to harcode this. And make sure empty strings don't make changes.
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
    editUser(formData);
  }

  return (
    <form className="SignupForm" onSubmit={handleSubmit}>
      <h3>Edit profile</h3>
      <div>
        <label htmlFor="username">Username: </label>
        <input
            name="username"
            type="text"
            value={user.username}
            placeholder={user.username}
            disabled
        />
      </div>
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input
            name="firstName"
            type="text"
            onChange={handleChange}
            value={formData.firstName}
            placeholder={user.firstName}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name: </label>
        <input
            name="lastName"
            type="text"
            onChange={handleChange}
            value={formData.lastName}
            placeholder={user.lastName}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
            name="email"
            type="email"
            onChange={handleChange}
            value={formData.email}
            placeholder={user.email}
        />
      </div>
      <button>Submit</button>
    </form>
  )

  return (
    <h1>ProfileForm</h1>
  );
}

export default ProfileForm;