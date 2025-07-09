import React from "react";
import styles from "../styles/g20.module.css";
import Governance from '../assets/logos/governance.png';
import Research from '../assets/logos/research.png';
import Scientific from '../assets/logos/Scientific logo.png';
import Expert from '../assets/logos/ExPert.png';

const OrganisationChart = () => {
  return (
    <section className={styles.orgWrapper}>

    <div className={styles.scaleWrapper}>
    <div className={styles.wrapper}>
      <h1 className="text-center text-3xl font-bold mb-8">Organisational Chart</h1>

      {/* SVG Arrows */}
    <svg className={styles.svgArrows}>
  <defs>
    {/* End arrowhead (points automatically) */}
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

    {/* Start arrowhead for horizontal lines (points left) */}
    <marker
      id="arrowhead-start"
      markerWidth="14"
      markerHeight="10"
      refX="4"
      refY="5"
      orient="180"
    >
      <polygon points="0 0, 14 5, 0 10" fill="darkred" />
    </marker>

    {/* Start arrowhead for vertical lines (points down) */}
    <marker
      id="arrowhead-down"
      markerWidth="14"
      markerHeight="10"
      refX="5"
      refY="5"
      orient="270"
    >
      <polygon points="0 0, 14 5, 0 10" fill="darkred" />
    </marker>
    <marker
  id="arrowhead-up"
  markerWidth="14"
  markerHeight="10"
  refX="5"
  refY="5"
  orient="90"
>
  <polygon points="0 0, 14 5, 0 10" fill="darkred" />
</marker>

  </defs>

  {/* Line with both arrows (left to right) */}
  <path
    d="M 560 280 H 600 H 980"
    stroke="darkred"
    strokeWidth="2"
    fill="none"
    markerStart="url(#arrowhead-start)"
    markerEnd="url(#arrowhead)"
  />

  {/* L-shaped line with arrows pointing down and right */}
  <path
    d="M 430 350 V 436 H 980"
    stroke="darkred"
    strokeWidth="2"
    fill="none"
    markerStart="url(#arrowhead-down)"
    markerEnd="url(#arrowhead)"
  />

  <path
    d="M 430 350 V 436 H 980"
    stroke="darkred"
    strokeWidth="2"
    fill="none"
    markerStart="url(#arrowhead-down)"
    markerEnd="url(#arrowhead)"
  />
   <path
  d="M 430 220 V 136 H 980"
  stroke="darkred"
  strokeWidth="2"
  fill="none"
  markerStart="url(#arrowhead-up)"   // ⬆️ correct for upward vertical
  markerEnd="url(#arrowhead)"        // ➡️ for rightward horizontal
/>

 
  <path
    d="M 400 350 V 560 H 600"
    stroke="darkred"
    strokeWidth="2"
    fill="none"
    markerStart="url(#arrowhead-down)"
    markerEnd="url(#arrowhead)"
  />
<path
    d="M 1100 520 V 560 H 910"
    stroke="darkred"
    strokeWidth="2"
    fill="none"
    markerStart="url(#arrowhead-down)"
    markerEnd="url(#arrowhead)"
  />

</svg>
      {/* Left Box  */}
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
      </div>
    </section>
  );
};


export default OrganisationChart;
