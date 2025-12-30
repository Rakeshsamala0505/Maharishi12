import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/database.css";

export default function Databases() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const cards = [
    {
      title: "MILLETS NEWS",
      text: `Secretary Department of agriculture research and exbhibition, (DARE) and Director General ICAR,
      Dr.Himanshu Pathak visited the ICAR-IIMR on 29.02.25 to review the progress of millet research and
      development activities being carried out at the institute.`,
      button: "MILLETS NEWS",
      icon: "/icons/DB_icon2.png",
    },
    {
      title: "MILLET DATABASE",
      text: `The Indian Institute of Millets Research (IIMR) formerly Directorate of Sorghum Research 
      (DSR) and National Research Centre for Sorghum (NRCS), is the central agency to work on all 
      aspects of millet research and development.`,
      button: "MILLETS NEWS",
      icon: "/icons/Database.png",
    },
    {
      title: "OTHER DATABASES AND LINKS",
      text: `This section provides links to other online tools, databases, and resources on Millets.`,
      button: "OTHER DATABASES",
      icon: "/icons/DB_icon3.png",
    },
  ];

  const handleSearch = () => {
    if (!searchText.trim()) return;
    navigate("/results", { state: { query: searchText } });
  };

  return (
    <div className="db-container">

      {/* 🔍 PERMANENT SEARCH HEADER */}
      <h2 className="db-search-title">
        Search MAIS{" "}
        <span className="db-search-keyword">
          {searchText}
        </span>
      </h2>

      {/* 🔍 SEARCH BOX */}
      <div className="db-search">
        <input
          type="text"
          placeholder="Search researcher, country, publication, year..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* PAGE TITLE */}
      <h1 className="db-title">DATABASES</h1>

      <p className="db-subtitle">
        We are diligently working to facilitate access to information regarding
        leading researchers and international research projects concerning millet,
        sustainable development, and food security.
      </p>

      <p className="db-subtitle">
        If you have questions regarding our databases, or need specific help,
        please contact us through the below options.
      </p>

      <hr className="db-divider" />

      {/* CARDS */}
      <div className="db-cards">
        {cards.map((item, i) => (
          <div className="db-card" key={i}>
            <img className="db-icon" src={item.icon} alt="" />
            <h2 className="db-card-title">{item.title}</h2>
            <p className="db-card-text">{item.text}</p>
            <button className="db-btn">{item.button}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
