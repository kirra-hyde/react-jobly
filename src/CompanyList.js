import React from "react";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";

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

  return (
    <div>
      <h1>CompanyList: Something should be here!</h1>
      <SearchForm />
      <CompanyCard />
    </div>
  )
}


export default CompanyList;