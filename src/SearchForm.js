import React from "react";

/** Renders SearchForm component.
 *
 * Props: searchFor function
 *
 * State: FormData
 *
 * { JobsList, CompanyList } -> SearchForm
 */

function SearchForm() {

  return (
    <form>
      <input type="text" placeholder="something..."/>
      <button>Do something!</button>
    </form>
  )
}

export default SearchForm;