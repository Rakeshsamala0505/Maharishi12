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
  </defs>

  {/* Arrow to Governance Board */}
  <path d="M 200 280 H 360 V 160 H 460" stroke="darkred" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

  {/* Arrow to Research Advisory Group */}
  <path d="M 200 280 H 360 H 460" stroke="darkred" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

  {/* Arrow to Scientific Panel */}
  <path d="M 200 280 H 360 V 400 H 460" stroke="darkred" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

  {/* NEW: Arrow to Expert Working Group */}
  <path d="M 200 280 H 200 V 580 H 640" stroke="darkred" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
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
