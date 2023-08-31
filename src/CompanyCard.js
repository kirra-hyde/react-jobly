import React from "react";
import { Link } from "react-router-dom";

/** Renders individual company card.
 *
 * Props: company, ex. {name, description, logoUrl}
 *
 * State: none
 *
 * CompanyList -> CompanyCard
 */

function CompanyCard({ company }) {

  return(
    <div className="Company">
        <div className="Company-logo">
          <img alt={company.handle} src={`${company.logoUrl}`}/>
        </div>
        <div className="Company-name">
          <Link to={`/companies/${company.handle}`}>
            <h3>{company.name}</h3>
          </Link>
        </div>
        <div className="Company-description">
          <p>{company.description}</p>
        </div>
        <br />
        <br />
    </div>
  );
}

export default CompanyCard;