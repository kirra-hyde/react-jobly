import React from "react";

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
        <img src={`${company.logoUrl}`}/>
      </div>
      <div className="Company-name">
        <h3>{company.name}</h3>
      </div>
      <div className="Company-description">
        <p>{company.description}</p>
      </div>
    </div>
  );
}

export default CompanyCard;