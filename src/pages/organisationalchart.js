// src/components/OrganisationChart.jsx
import React from "react";
import styles from "../styles/g20.module.css";

const OrganisationChart = () => {
  return (
  <div className={styles.wrapper}>
    
    {/* Boxes (unchanged) */}
    <div className={styles.leftBox}>
      <h1 className={styles.halfBorderBox}>Manager and Secretariat</h1>
    </div>
    <div className={styles.rightStack}>
      <h1 className={styles.halfBorderBox}>MAHARISHI Governance Board</h1>
      <h1 className={styles.halfBorderBox}>Research Advisory Group</h1>
      <h1 className={styles.halfBorderBox}>Scientific Panel</h1>
    </div>
    <div className={styles.bottomBox}>
      <h1 className={styles.halfBorderBox}>Expert Working group (EWG)</h1>
    </div>
  </div>
);

  
};

export default OrganisationChart;
