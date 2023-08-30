import React from "react";
import JoblyApi from "./api";
//import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";


/** Houses logic to retrieve list of jobs.
 *
 * Props: none
 *
 * State: list of jobs [{companyName, title, equity, salary}, ...]
 *
 * RoutesList -> JobsList -> JobCardList
 */

function JobsList() {

  // return (
  //   <div>
  //     <JobCardList />
  //   </div>
  // )
      return (
      <div>
        <h1>JobsList: Something should be here!</h1>
        <SearchForm />
        {/* <JobCardList /> */}
      </div>
    );
}


export default JobsList;