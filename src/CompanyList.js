import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import {v4 as uuid} from "uuid";

/** Renders page displaying list of companies and houses logic
 * to retrieve list of companies.
 *
 * Props: none
 *
 * State: companies, ex. [{name, description, logoUrl}, ...]
 *
 * RoutesList -> CompanyList -> CompanyCard
 */

function CompanyList() {
  const [companies, setCompanies] = useState({
    data: null,
    isLoading: true,
  });

  /** Makes an API call to fetch list of jobs that contain
   * passed in keyword and updates state for companies.
   *
   * If keyword is not provided, return all companies.
   */
  async function searchFor(keyword) {
    if (keyword !== ""){
      const companiesRes = await JoblyApi.getCompaniesByTerm(keyword);
      setCompanies({
        data: companiesRes,
        isLoading: false
      });
    } else {
      const companiesRes = await JoblyApi.getCompanies();
      setCompanies({
        data: companiesRes,
        isLoading: false
      });
    }
  }

  useEffect(function fetchCompaniesWhenMounted() {
    async function fetchCompanies() {
      try {
        const companiesRes = await JoblyApi.getCompanies();
        setCompanies({
          data: companiesRes,
          isLoading: false
        });
      } catch (err) {
        console.warn(err);
      }
    }
    fetchCompanies();
  }, []);

  if (companies.isLoading === true) {
    return (<h1>Loading...</h1>);
  }

  if (companies.data.length === 0){
    return (<h3>Sorry, no results found!</h3>)
  }

  return (
    <div className="CompanyList">
      <SearchForm searchFor={searchFor}/>
      {companies.data.map(c => (
        <div key={uuid()}>
          <CompanyCard company={c}/>
        </div>
      ))}
    </div>
  )
}


export default CompanyList;


// TODO: fix null images, should not show broken image
// TODO: fix searchForm on jobs comp, should show all jobs if no keyword