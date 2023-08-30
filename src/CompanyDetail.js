import React from "react";
import { useParams } from 'react-router-dom';
import JoblyApi from "./api";


/** Houses logic to retrieve list of jobs associated with one company.
 *
 * State: list of jobs
 *
 * RoutesList -> CompanyDetail -> JobCardList
 */

function CompanyDetail() {
  const { handle } = useParams();

  return (
    <h1>CompanyDetail for {handle}: Something should be here!</h1>
  )
}


export default CompanyDetail;