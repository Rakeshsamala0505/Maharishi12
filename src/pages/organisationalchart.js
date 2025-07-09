import React from "react";
import styles from "../styles/g20.module.css";
import Governance from '../assets/logos/governance.png';
import Research from '../assets/logos/research.png';
import Scientific from '../assets/logos/Scientific logo.png';
import Expert from '../assets/logos/ExPert.png';

const OrganisationChart = () => {
  return (
    <div className={styles.wrapper}>
      
      {/* SVG Arrows */}
    <svg className={styles.svgArrows}>
  <defs>
    {/* Normal arrowhead for the end */}
    <marker
      id="arrowhead"
      markerWidth="14"
      markerHeight="10"
      refX="10"
      refY="5"
      orient="auto"
    >
      <polygon points="0 0, 14 5, 0 10" fill="darkred" />
    </marker>

    {/* Reversed arrowhead for the start */}
    <marker
      id="arrowhead-start"
      markerWidth="14"
      markerHeight="10"
      refX="4"  // Adjusted for better alignment
      refY="5"
      orient="180"
    >
      <polygon points="0 0, 14 5, 0 10" fill="darkred" />
    </marker>
  </defs> {/* Line with double arrows */} 
  <path d="M 560 280 H 600 H 980" stroke="darkred" strokeWidth="2" fill="none" markerStart="url(#arrowhead-start)" markerEnd="url(#arrowhead)" />


</svg>





      {/* Left Box */}
      <div className={styles.leftBox}>
        <div className={styles.halfBorderBox}>
          <div className={styles.boxRow}>
            <span className={styles.boxText}>Manager<br />and Secretariat</span>
          </div>
        </div>
      </div>

      {/* Right Stack */}
      <div className={styles.rightStack}>
        <div className={styles.halfBorderBox}>
          <div className={styles.boxRow}>
            <img src={Governance} alt="Governance" className={styles.iconLeft} />
            <span className={styles.boxText}>MAHARISHI<br />Governance Board</span>
          </div>
        </div>
        <div className={styles.halfBorderBox}>
          <div className={styles.boxRow}>
            <img src={Research} alt="Research" className={styles.iconLeft} />
            <span className={styles.boxText}>Research<br />Advisory Group</span>
          </div>
        </div>
        <div className={styles.halfBorderBox}>
          <div className={styles.boxRow}>
            <img src={Scientific} alt="Scientific" className={styles.iconLeft} />
            <span className={styles.boxText}>Scientific<br />Panel</span>
          </div>
        </div>
      </div>

      {/* Bottom Box */}
      <div className={styles.bottomBox}>
        <div className={styles.halfBorderBox}>
          <div className={styles.boxRow}>
            <img src={Expert} alt="Expert" className={styles.iconLeft} />
            <span className={styles.boxText}>Expert Working<br />Group (EWG)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganisationChart;
