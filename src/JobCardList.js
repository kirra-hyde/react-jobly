import React from "react";
import JoblyApi from "./api";
import JobCard from "./JobCard";
import SearchForm from "./SearchForm";

/** Renders page displaying list of jobs.
 *
 * State: list of jobs [{name, description, logoUrl}, ...]
 *
 * RoutesList -> JobsList -> JobCard
 */

function JobsList() {

  return (
    <div>
      <h1>JobsList: Something should be here!</h1>
      <SearchForm />
      <JobCard />
    </div>
  )
}


export default JobsList;