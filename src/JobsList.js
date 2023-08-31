import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";


/** Houses logic to retrieve list of jobs.
 *
 * Props: none
 *
 * State: list of jobs [{companyName, title, equity, salary}, ...]
 *
 * RoutesList -> JobsList -> JobCardList
 */

function JobsList() {
  const [jobs, setjobs] = useState({
    data: null,
    isLoading: true,
  });


  /** Makes an API call to fetch list of jobs that contain
   * passed in keyword and updates state for jobs.
   */
  async function searchFor(keyword) {
    if (keyword !== ""){
      const jobsRes = await JoblyApi.getJobsByTerm(keyword);
      setjobs({
        data: jobsRes,
        isLoading: false
      });
    } else {
      const jobsRes = await JoblyApi.getJobs();
      setjobs({
        data: jobsRes,
        isLoading: false
      });
    }
  }
  //TODO: singular (And, less important, maybe in api.js).

  useEffect(function fetchjobsWhenMounted() {
    async function fetchJobs() {
      try {
        const jobsRes = await JoblyApi.getJobs();
        setjobs({
          data: jobsRes,
          isLoading: false
        });
      } catch (err) {
        console.warn(err);
      }
    }
    fetchJobs();
  }, []);

  if (jobs.isLoading === true) {
    return (<h1>Loading...</h1>);
  }

  if (jobs.data.length === 0){
    return (<h3>Sorry, no results found!</h3>)
  }

  return (
  <div>
    <SearchForm searchFor={searchFor}/>
    <JobCardList jobs={jobs.data}/>
  </div>
  );
}


export default JobsList;