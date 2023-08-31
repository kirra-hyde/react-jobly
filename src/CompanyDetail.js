import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import JoblyApi from "./api";
import JobCardList from "./JobCardList";


/** Houses logic to retrieve list of jobs associated with one company.
 *
 * Props: none
 *
 * State: company
 *
 * RoutesList -> CompanyDetail -> JobCardList
 */

function CompanyDetail() {
  const { handle } = useParams();

  const [company, setCompany] = useState({
    data: null,
    isLoading: true,
    exists: false  //TODO: Put in different piece of state.  (Because of lines 39-41.)  Independent.
  });

  console.log("CompanyDetail rendered ", handle);

  useEffect(function fetchCompanyWhenMounted() {
    console.log("effect ran")
    async function fetchCompany() {
      try {
        const companyRes = await JoblyApi.getCompany(handle);
        setCompany({
          data: companyRes,
          isLoading: false,
          exists: true
        });
      } catch (err) {
        console.warn(err);
        setCompany({
          exists: false
        })
      }
    }
    fetchCompany();
  }, [handle]);

  if (company.isLoading === true) {
    return (<h1>Loading...</h1>);
  }

  if (company.exists === false) {
    return (<h3>Sorry, no such company</h3>);
  }

  //TODO: missing class name.
  return (
    <div>
      <h3>{ company.data.name }</h3>
      <p>{ company.data.description }</p>
      <br />
      <JobCardList jobs={company.data.jobs} />
    </div>
  );
}


export default CompanyDetail;