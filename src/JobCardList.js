import React from "react";
import JoblyApi from "./api";
import JobCard from "./JobCard";
import SearchForm from "./SearchForm";


/** Renders page displaying list of jobs.
 *
 * Props: jobs
 *  ex. [{id, title, equity, salary, companyName, companyHandle}, ...]
 *
 * State: none
 *
 * RoutesList -> JobsList -> JobCard
 */

function JobsCardList({ jobs }) {

  console.log(jobs);

  return jobs.map(job => (
    <div key={job.id}>
      <JobCard
        title={job.title}
        salary={job.salary}
        equity={job.equity} />
    </div>
  ));

};



export default JobsCardList;