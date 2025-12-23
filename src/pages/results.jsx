import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import researchData from "../data/researchData.json";
import "../styles/results.css";

export default function Results() {
  const location = useLocation();
  const query = location.state?.query || "";

  const [rows, setRows] = useState([]);
  const [searchText, setSearchText] = useState("");

  // 🔹 Initial search from Database page
  useEffect(() => {
    if (query) {
      handleSearch(query);
      setSearchText("");
    }
  }, [query]);

  // 🔹 Unified search (used by BOTH searches)
  const handleSearch = (text) => {
    const q = text.toLowerCase().trim();

    if (!q) {
      setRows([]);
      return;
    }

    const filtered = researchData.filter((r) =>
      [
        r.researcher,
        r.institution,
        r.country,
        r.paper,
        r.publication,
        r.thematic,
        r.year?.toString()
      ].some((val) =>
        String(val || "")
          .toLowerCase()
          .trim()
          .includes(q)
      )
    );

    setRows(filtered);
  };

  // Keyword beside title
  const activeKeyword = searchText || query;

  return (
    <div className="results-container">
      <h2 className="results-title">
        Search Results{" "}
        {activeKeyword && (
          <span className="results-keyword">"{activeKeyword}"</span>
        )}
      </h2>

      <hr className="results-divider" />

      {/* 🔍 SEARCH BOX (NOW WORKS LIKE DATABASE) */}
      <div className="db-searches">
        <input
          type="text"
          placeholder="Search researcher, institution, country, publication, year..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch(searchText);
          }}
        />
        <button onClick={() => handleSearch(searchText)}>Search</button>
      </div>

      {/* TABLE */}
      <div className="results-table-wrapper">
        <table className="results-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Researcher</th>
              <th>Institution</th>
              <th>Research Country</th>
              <th>Paper / Article</th>
              <th>Publication</th>
              <th>Year</th>
              <th>Thematic Area</th>
              <th>Link</th>
            </tr>
          </thead>

          <tbody>
            {rows.length > 0 ? (
              rows.map((r, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{r.researcher}</td>
                  <td>{r.institution}</td>
                  <td>{r.country}</td>
                  <td>{r.paper}</td>
                  <td>{r.publication}</td>
                  <td>{r.year}</td>
                  <td>{r.thematic}</td>
                  <td>
                    <a
                      href={r.reference}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="no-results">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
