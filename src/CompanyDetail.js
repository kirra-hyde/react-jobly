import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import JoblyApi from "./api";
import JobCardList from "./JobCardList";


/** Houses logic to retrieve list of jobs associated with one company.
 *
 * Props: none
 *
 * State: list of jobs (modify at later point)
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
      }
    }
    fetchCompany();
  }, []);

  if (company.isLoading === true) {
    return (<h1>Loading...</h1>);
  }

  return (
    <div>
      <h3>{company.data.name }</h3>
      <p>{company.data.description }</p>
      <br />
      <JobCardList jobs={company.data.jobs} />
    </div>
  );
}


export default CompanyDetail;