import React from "react";
import { useParams } from 'react-router-dom';
import JoblyApi from "./api";

/**
 *
 */

function CompanyDetail() {
  const { handle } = useParams();

  return (
    <h1>CompanyDetail for {handle}: Something should be here!</h1>
  )
}


export default CompanyDetail;