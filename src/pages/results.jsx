import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import researchData from "../data/researchData.json";
import "../styles/results.css";

export default function Results() {
  const location = useLocation();
  const query = location.state?.query || "";

  const [baseRows, setBaseRows] = useState([]);
  const [rows, setRows] = useState([]);
  const [localSearch, setLocalSearch] = useState("");

  // 🔹 Initial search from Database page
  useEffect(() => {
    const q = query.toLowerCase().trim();
    if (!q) {
      setBaseRows([]);
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
      ].some(
        (val) =>
          val &&
          val.toLowerCase().includes(q)
      )
    );

    setBaseRows(filtered);
    setRows(filtered);
    setLocalSearch("");
  }, [query]);

  // 🔹 Local search (EXACT same logic as Database)
  const handleLocalSearch = () => {
    const q = localSearch.toLowerCase().trim();

    if (!q) {
      setRows(baseRows);
      return;
    }

    const filtered = baseRows.filter((r) =>
      [
        r.researcher,
        r.institution,
        r.country,
        r.paper,
        r.publication,
        r.thematic,
        r.year?.toString()
      ].some(
        (val) =>
          val &&
          val.toLowerCase().includes(q)
      )
    );

    setRows(filtered);
  };

  return (
    <div className="results-container">
      <h2 className="results-title">Search Results</h2>
      <hr className="results-divider" />

      {/* 🔍 SEARCH BOX (SAME AS DATABASE) */}
      <div className="db-searches">
        <input
          type="text"
          placeholder="Search researcher, country, publication, year..."
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleLocalSearch();
          }}
        />
        <button onClick={handleLocalSearch}>Search</button>
      </div>

      {/* TABLE */}
      <div className="results-table-wrapper">
        <table className="results-table">
          <thead>
            <tr>
              <th>Researcher</th>
              <th>Institution</th>
              <th>Country</th>
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
                <td colSpan="8" className="no-results">
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
