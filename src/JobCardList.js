import React from "react";
import JoblyApi from "./api";
import JobCard from "./JobCard";
import SearchForm from "./SearchForm";
import { v4 as uuid } from "uuid";

/** Renders page displaying list of jobs.
 *
 * Props: jobs, ex. [{companyName, title, equity, salary}, ...]
 *
 * State: none
 *
 * RoutesList -> JobsList -> JobCard
 */

function JobsCardList({ jobs }) {

  return jobs.map(job => (
    <div key={uuid()}>
      <JobCard job={job} />
    </div>
  ));

};


export default JobsCardList;