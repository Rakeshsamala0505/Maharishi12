import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/charter.css"; // Importing external CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faWallet,
  faBuilding,
  faFlask,
  faUsers,
  faCogs,
  faUserSecret,
  faCalendarCheck,
  faShieldAlt,
  faBook,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";

const Maharishi = () => {
  return (
    <div className="container-fluid main-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Charter</h3>
        <ul>
          <li>
            <a href="#purpose-of-charter">
              <FontAwesomeIcon icon={faGavel} /> Purpose of the Charter
            </a>
          </li>
          <li>
            <a href="#scope-financial-resources">
              <FontAwesomeIcon icon={faWallet} /> Scope and Financial Resources
            </a>
          </li>
          <li>
            <a href="#institutions-coordination">
              <FontAwesomeIcon icon={faBuilding} /> Institutions' Coordination
            </a>
          </li>
          <li>
            <a href="#research-committee">
              <FontAwesomeIcon icon={faFlask} /> Research Committee
            </a>
          </li>
          <li>
            <a href="#scientific-board">
              <FontAwesomeIcon icon={faFlask} /> Scientific Board
            </a>
          </li>
          <li>
            <a href="#expert-working-groups">
              <FontAwesomeIcon icon={faUsers} /> Expert Working Groups
            </a>
          </li>
          <li>
            <a href="#maharishi-initiative-manager">
              <FontAwesomeIcon icon={faCogs} /> Maharishi Initiative Manager
            </a>
          </li>
          <li>
            <a href="#secretariat">
              <FontAwesomeIcon icon={faUserSecret} /> Secretariat
            </a>
          </li>
          <li>
            <a href="#committees-meetings">
              <FontAwesomeIcon icon={faCalendarCheck} /> Committees' Meetings
            </a>
          </li>
          <li>
            <a href="#confidentiality">
              <FontAwesomeIcon icon={faShieldAlt} /> Confidentiality
            </a>
          </li>
          <li>
            <a href="#publication">
              <FontAwesomeIcon icon={faBook} /> Publication
            </a>
          </li>
          <li>
            <a href="#intellectual-property">
              <FontAwesomeIcon icon={faCogs} /> Intellectual Property
            </a>
          </li>
          <li>
            <a href="#commencement-modification">
              <FontAwesomeIcon icon={faExchangeAlt} /> Commencement & Withdrawal
            </a>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="content">
        <section id="purpose-of-charter">
          <h2>MAHARISHI Charter</h2>
          <div className="point">
            <h3>1. Governance Framework</h3>
            <p>
              The charter establishes clear governance policies. This ensures
              smooth decision-making and accountability.
            </p>
          </div>
          <div className="point">
            <h3>2. Operational Guidelines</h3>
            <p>
              It provides structured guidelines for operations, ensuring
              consistency across initiatives.
            </p>
          </div>
          <div className="point">
            <h3>3. Effective Implementation</h3>
            <p>
              The charter ensures successful project execution, outlining steps
              to achieve targeted goals.
            </p>
          </div>
          <div className="point">
            <h3>4. Coordination of Initiatives</h3>
            <p>
            It helps align various initiatives effectively. This avoids duplication and promotes synergy.
            </p>
          </div>
          <h2>Scope and Financial Resources of Maharishi</h2>
          <div className="point">
            <p>
            The scope of the MAHARISHI initiative spans across multiple sectors 
            including agriculture, sustainability, food security, and health. 
            Financial resources will be secured through various channels including 
            government grants, partnerships, and private investments.
            </p>
          </div>
          <h2>Institutions' Coordination Committee</h2>
          <div className="point">
            <p>
            The Institutions' Coordination Committee is tasked with 
            overseeing the collaboration between institutions and 
            stakeholders involved in the MAHARISHI initiative, ensuring 
            alignment with the core goals and objectives of the initiative.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Maharishi;
