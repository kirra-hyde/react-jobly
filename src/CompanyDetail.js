import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import JoblyApi from "./api";
import JobCardList from "./JobCardList";


/** Houses logic to retrieve list of jobs associated with one company.
 *
 * Props: none
 *
 * State: company, ex. { data, isLoading }
 *
 * RoutesList -> CompanyDetail -> JobCardList
 */

function CompanyDetail() {
  const { handle } = useParams();

  const [company, setCompany] = useState({
    data: null,
    isLoading: true
  });

  useEffect(function fetchCompanyWhenMounted() {
    async function fetchCompany() {
      try {
        const companyRes = await JoblyApi.getCompany(handle);
        setCompany({
          data: companyRes,
          isLoading: false
        });
      } catch (err) {
        console.warn(err);
        setCompany({
          data: null,
          isLoading: false
        });
      }
    }
    fetchCompany();
  }, [handle]);

  if (company.isLoading === true) {
    return (<h1>Loading...</h1>);
  }

  if (company.data === null) {
    return (<h3>Sorry, no such company.</h3>);
  }

  return (
    <div className="CompanyDetail">
      <h3>{company.data.name}</h3>
      <p>{company.data.description}</p>
      <br />
      <JobCardList jobs={company.data.jobs} />
    </div>
  );
}


export default CompanyDetail;