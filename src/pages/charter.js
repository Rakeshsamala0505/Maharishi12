import React from "react";
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
    <div className="flex flex-wrap max-w-screen-xl mx-auto px-4 pt-24 md:pt-28 text-sm">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-white p-5 border border-gray-300 rounded-lg shadow-md mb-5 md:mb-0 md:mr-5">
        <h3 className="text-[#003366] text-lg border-b-2 border-[#003366] pb-2 mb-5 text-center md:text-left">
          Charter
        </h3>
        <ul className="space-y-3">
          <li>
            <a href="#purpose-of-charter" className="text-blue-600 flex items-center font-medium hover:underline">
              <FontAwesomeIcon icon={faGavel} className="mr-2" /> PRINCIPLES OF GOVERNANCE OF MAHARISHI 
            </a>
          </li>
          <li>
            <a href="#scope-financial-resources" className="text-blue-600 flex items-center font-medium hover:underline">
              <FontAwesomeIcon icon={faWallet} className="mr-2" /> Scope and Financial Resources
            </a>
          </li>
          <li>
            <a href="#institutions-coordination" className="text-blue-600 flex items-center font-medium hover:underline">
              <FontAwesomeIcon icon={faBuilding} className="mr-2" /> Institutions' Coordination
            </a>
          </li>
          <li>
            <a href="#research-committee" className="text-blue-600 flex items-center font-medium hover:underline">
              <FontAwesomeIcon icon={faFlask} className="mr-2" /> Research Committee
            </a>
          </li>
          <li>
            <a href="#scientific-board" className="text-blue-600 flex items-center font-medium hover:underline">
              <FontAwesomeIcon icon={faFlask} className="mr-2" /> Scientific Board
            </a>
          </li>
          <li>
            <a href="#expert-working-groups" className="text-blue-600 flex items-center font-medium hover:underline">
              <FontAwesomeIcon icon={faUsers} className="mr-2" /> Expert Working Groups
            </a>
          </li>
          <li>
            <a href="#maharishi-initiative-manager" className="text-blue-600 flex items-center font-medium hover:underline">
              <FontAwesomeIcon icon={faCogs} className="mr-2" /> Maharishi Initiative Manager
            </a>
          </li>
          <li>
            <a href="#secretariat" className="text-blue-600 flex items-center font-medium hover:underline">
              <FontAwesomeIcon icon={faUserSecret} className="mr-2" /> Secretariat
            </a>
          </li>
          <li>
            <a href="#committees-meetings" className="text-blue-600 flex items-center font-medium hover:underline">
              <FontAwesomeIcon icon={faCalendarCheck} className="mr-2" /> Committees' Meetings
            </a>
          </li>
          <li>
            <a href="#confidentiality" className="text-blue-600 flex items-center font-medium hover:underline">
              <FontAwesomeIcon icon={faShieldAlt} className="mr-2" /> Confidentiality
            </a>
          </li>
          <li>
            <a href="#publication" className="text-blue-600 flex items-center font-medium hover:underline">
              <FontAwesomeIcon icon={faBook} className="mr-2" /> Publication
            </a>
          </li>
          <li>
            <a href="#intellectual-property" className="text-blue-600 flex items-center font-medium hover:underline">
              <FontAwesomeIcon icon={faCogs} className="mr-2" /> Intellectual Property
            </a>
          </li>
          <li>
            <a href="#commencement-modification" className="text-blue-600 flex items-center font-medium hover:underline">
              <FontAwesomeIcon icon={faExchangeAlt} className="mr-2" /> Commencement & Withdrawal
            </a>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 bg-white p-5 rounded-lg shadow-md">
        <section id="purpose-of-charter">
          <h2 className="text-[#003366] text-xl border-b-2 border-[#003366] pb-2 mb-6">MAHARISHI Charter</h2>

          <div className="mb-6 text-left">
            <h3 className="text-[#003366] text-base font-semibold">1. Governance Framework</h3>
            <p className="text-gray-700 text-justify text-sm leading-relaxed mt-2">
              The charter establishes clear governance policies. This ensures smooth decision-making and accountability.
            </p>
          </div>

          <div className="mb-6 text-left">
            <h3 className="text-[#003366] text-base font-semibold">2. Operational Guidelines</h3>
            <p className="text-gray-700 text-justify text-sm leading-relaxed mt-2">
              It provides structured guidelines for operations, ensuring consistency across initiatives.
            </p>
          </div>

          <div className="mb-6 text-left">
            <h3 className="text-[#003366] text-base font-semibold">3. Effective Implementation</h3>
            <p className="text-gray-700 text-justify text-sm leading-relaxed mt-2">
              The charter ensures successful project execution, outlining steps to achieve targeted goals.
            </p>
          </div>

          <div className="mb-6 text-left">
            <h3 className="text-[#003366] text-base font-semibold">4. Coordination of Initiatives</h3>
            <p className="text-gray-700 text-justify text-sm leading-relaxed mt-2">
              It helps align various initiatives effectively. This avoids duplication and promotes synergy.
            </p>
          </div>

          <h2 id="scope-financial-resources" className="text-[#003366] text-xl border-b-2 border-[#003366] pb-2 my-6">
            Scope and Financial Resources of Maharishi
          </h2>
          <div className="mb-6 text-left">
            <p className="text-gray-700 text-justify text-sm leading-relaxed">
              The scope of the MAHARISHI initiative spans across multiple sectors including agriculture, sustainability,
              food security, and health. Financial resources will be secured through various channels including
              government grants, partnerships, and private investments.
            </p>
          </div>

          <h2 id="institutions-coordination" className="text-[#003366] text-xl border-b-2 border-[#003366] pb-2 my-6">
            Institutions' Coordination Committee
          </h2>
          <div className="mb-6 text-left">
            <p className="text-gray-700 text-justify text-sm leading-relaxed">
              The Institutions' Coordination Committee is tasked with overseeing the collaboration between institutions
              and stakeholders involved in the MAHARISHI initiative, ensuring alignment with the core goals and
              objectives of the initiative.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Maharishi;
