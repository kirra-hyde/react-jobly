import React, { useState } from "react";

/** Renders SearchForm component.
 *
 * Props: searchFor function
 *
 * State: FormData
 *
 * { JobsList, CompanyList } -> SearchForm
 */

function SearchForm({ searchFor }) {

  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    searchFor(searchTerm);
  }

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input
          type="text"
          placeholder="Enter a search term..."
          onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  )
}

export default SearchForm;