/* ─────────────────────────  src/components/OrgChart.jsx  ───────────────────────── */
import React from "react";
import styles from "../styles/g20.module.css";   // NOTE: CSS‑module import
// import logo from "../../assets/logo.png";        // sample icon, replace path if needed

const OrgChart = () => (
  <div className={styles.chart}>
    {/* vertical red rail (the backbone arrow) */}
    <div className={styles.rail} />

    <div className={styles.chartContainer}>
      {/* ── 1. Manager / Secretariat ── */}
      <div className={styles.chartSection}>
        <p>Manager<br />and&nbsp;Secretariat</p>
      </div>

      {/* ── 2. Governance Board ── */}
      <div className={styles.chartSection}>
        {/* <img src={logo} alt="" /> */}
        <p>MAHARISHI<br />Governance&nbsp;Board</p>
      </div>

      {/* ── 3. Research Advisory Group ── */}
      <div className={styles.chartSection}>
        {/* <img src={logo} alt="" /> */}
        <p>Research<br />Advisory&nbsp;Group</p>
      </div>

      {/* ── 4. Scientific Panel ── */}
      <div className={styles.chartSection}>
        {/* <img src={logo} alt="" /> */}
        <p>Scientific<br />Panel</p>
      </div>
    </div>
  </div>
);

export default OrgChart;
