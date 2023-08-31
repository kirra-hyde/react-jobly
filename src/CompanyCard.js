import React from "react";
import { Link } from "react-router-dom";

/** Renders individual company card.
 *
 * Props:
 * - handle
 * - url
 * - name
 * - desc
 *
 * State: none
 *
 * CompanyList -> CompanyCard
 */

function CompanyCard({ handle, url, name, desc }) {

// another opt: {company.logoUrl && <img alt={handle} src={`${url}`}/>}

  return(
    <div className="Company">
        <div className="Company-logo">
          {url !== null
            ? <img alt={handle} src={`${url}`}/>
            : ""
          }
        </div>
        <div className="Company-name">
          <Link to={`/companies/${handle}`}>
            <h3>{name}</h3>
          </Link>
        </div>
        <div className="Company-description">
          <p>{desc}</p>
        </div>
        <br />
        <br />
    </div>
  );
}

export default CompanyCard;