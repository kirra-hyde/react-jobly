import React from "react";

/** Renders individual job card.
 *
 * Props: job, ex. {companyName, title, equity, salary}
 *
 * State: none
 *
 * JobCardList -> JobCard
 */

function JobCard({ job }) {

  // return(<p>I'm a job card.</p>);

  return (
    <div className="Job">
      <div className="Job-title">
        <h3>{job.title}</h3>
      </div>
      <div className="Job-salary">
        Salary: {job.salary}
      </div>
      <div className="Job-equity">
        Equity: {job.equity}
      </div>
    </div>
  )
}

export default JobCard;