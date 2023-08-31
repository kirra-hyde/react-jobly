import React from "react";

/** Renders individual job card.
 *
 * Props: job, ex. {companyName, title, equity, salary}
 *
 * State: none
 *
 * JobCardList -> JobCard
 */

function JobCard({ title, salary, equity }) {



  return (
    <div className="Job">
      <div className="Job-title">
        <h3>{title}</h3>
      </div>
      <div className="Job-salary">
        {!salary
          ? <p>Salary: data not provided.</p>
          : <p>Salary: {salary}</p>
        }
      </div>
      <div className="Job-equity">
        {!equity && equity !== 0
          ? <p>Equity: data not provided.</p>
          : <p>Equity: {equity}</p>
        }
      </div>
    </div>
  )
}

//TODO: What if no salary/equity provided?

export default JobCard;