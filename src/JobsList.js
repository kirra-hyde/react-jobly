import React from "react";
import JoblyApi from "./api";
//import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";


/** Houses logic to retrieve list of jobs.
 *
 * State: list of jobs [{companyName, title, equity, salary}, ...]
 *
 * RoutesList -> JobsList -> JobCardList
 */

function JobsList() {

  return (
    <div>
      <JobCardList />
    </div>
  )
}


export default JobsList;