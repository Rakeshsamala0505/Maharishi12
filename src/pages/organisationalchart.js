import React from "react";
import styles from "../styles/g20.module.css";
import ET from '../assets/images/emty.jpg';
import mangilal from '../assets/images/ml.jat_cc1.png';
import devender from '../assets/images/devender.jpg';
import pradhan from '../assets/images/sk_pradhan3.png';
import Mandal from '../assets/images/B.Mandal.png';
import Neeru from '../assets/images/neeru.jpg';
import Jaishankar from '../assets/images/jaishankar.jpg';
import Director from '../assets/images/DIR3.png';




const OrganisationChart = () => {
  return (
    <div className={styles.orgWrapper}>
      <h2 className={styles.orgTitle}>Organisation Chart</h2>
      
      <div className={styles.chartContainer}>
        <div className={styles.chartContent}>
          
          {/* Top Row */}
          <div className={styles.box} style={{ top: '30px', left: '50px' }}>
            <div className={styles.label}>MAHARISHI<br />Governing Board</div>
                <div className={styles.popup}>
                <div className={styles.popupTitle}>Maharishi Governing Board</div>

                  <div className={styles.member}>
                        <img src={ET} alt="Dr. A. K. Singh" className={styles.memberImg} />
                     <div className={styles.memberInfo}>
                         <strong>Dr. Mangi Lal Jat</strong><br /> Secretary, DARE & DG, ICAR Chairman
                     </div>
                   </div><div className={styles.member}>
                        <img src={ET} alt="Dr. A. K. Singh" className={styles.memberImg} />
                     <div className={styles.memberInfo}>
                         <strong>Dr. Mangi Lal Jat</strong><br /> Secretary, DARE & DG, ICAR Chairman
                     </div>
                   </div>
               </div>
          </div>
          <div className={`${styles.box} ${styles.centerBox}`} style={{ top: '30px', left: '400px' }}>
            <div className={styles.label}>Steering<br />Committee</div>
            <div className={styles.popup}>
              <div className={styles.popupTitle}>Steering Committee</div>
                   <div className={styles.member}>
                        <img src={mangilal} alt="Dr. A. K. Singh" className={styles.memberImg} />
                     <div className={styles.memberInfo}>
                         <strong>Dr. Mangi Lal Jat</strong><br /> Secretary, DARE & DG, ICAR Chairman
                     </div>
                   </div>
                   <div className={styles.member}>
                        <img src={devender} alt="Dr. A. K. Singh" className={styles.memberImg} />
                     <div className={styles.memberInfo}>
                         <strong>Dr Devendra Kumar Yadava</strong><br /> Deputy Director General (Crop Science), ICAR
                     </div>
                   </div><div className={styles.member}>
                        <img src={pradhan} alt="Dr. A. K. Singh" className={styles.memberImg} />
                     <div className={styles.memberInfo}>
                         <strong>Dr. Sharat Kumar Pradhan</strong><br /> Assistant Director General (Food & Fodder Crops), ICAR Member
                     </div>
                   </div><div className={styles.member}>
                        <img src={Mandal} alt="Dr. A. K. Singh" className={styles.memberImg} />
                     <div className={styles.memberInfo}>
                         <strong>Dr. Bikash Mandal</strong><br /> Assistant Director General (International Relations), ICAR
                     </div>
                   </div><div className={styles.member}>
                        <img src={Neeru} alt="Dr. A. K. Singh" className={styles.memberImg} />
                     <div className={styles.memberInfo}>
                         <strong>Dr. Neeru Bhooshan</strong><br /> Assistant Director General (Intellectual Property & Technology Management),ICAR
                     </div>
                   </div><div className={styles.member}>
                        <img src={Jaishankar} alt="Dr. A. K. Singh" className={styles.memberImg} />
                     <div className={styles.memberInfo}>
                         <strong>Dr. S. Jaishankar</strong><br /> Representative from Ministry of External Affairs Member
                     </div>
                   </div><div className={styles.member}>
                        <img src={Director} alt="Dr. A. K. Singh" className={styles.memberImg} />
                     <div className={styles.memberInfo}>
                         <strong>Dr. (Mrs.) C. Tara Satyavathi</strong><br /> Director, ICAR-lndian Institute of Millet Research, Hyderabad Member Secretary
                     </div>
                   </div>
               </div>
          </div>
          <div className={styles.box} style={{ top: '20px', left: '700px' }}>
            <div className={styles.label}>Member secy<br />of Managing Institute<br />(ICAR-IIMR)</div>
          </div>

          {/* Mid Row */}
          <div className={`${styles.box}`} style={{ top: '250px', left: '220px' }}>
            <div className={styles.label}>Research<br />Advisory Group</div>
          </div>
          <div className={`${styles.box} ${styles.secretariat}`} style={{ top: '250px', left: '700px' }}>
            <div className={styles.label}>Manager and<br />Secretariat</div>
          </div>

          {/* Bottom Row */}
          <div className={`${styles.box} ${styles.smallBox}`} style={{ top: '480px', left: '10px' }}>
            <div className={styles.label}>Millets EWG</div>
          </div>
          <div className={`${styles.box} ${styles.smallBox}`} style={{ top: '480px', left: '220px' }}>
            <div className={styles.label}>Ancient Grains EWG</div>
          </div>
          <div className={`${styles.box} ${styles.smallBox}`} style={{ top: '480px', left: '430px' }}>
            <div className={styles.label}>Climate EWG</div>
          </div>
          <svg
             viewBox="0 0 1000 625"
             className={styles.lines}
             xmlns="http://www.w3.org/2000/svg">

             {/* Steering Committee to MAHARISHI Governing Board */}
             <line x1="400" y1="65" x2="250" y2="65" stroke="#999" strokeWidth="2" />
           
             {/* Top to Mid */}
             <path d="M150 97 V270 A20 10 0 0 0 160 280 H220" stroke="#999" strokeWidth="2" fill="none" />
             <path d="M500 97 V270 A10 10 0 0 1 490 280 H420" stroke="#999" strokeWidth="2" fill="none" />
             <line x1="800" y1="110" x2="800" y2="250" stroke="#999" strokeWidth="2" />
           
             {/* Mid to Bottom */}
             <path d="M320 350 H110 A10 10 0 0 0 100 360 V480" stroke="#999" strokeWidth="2" fill="none" />
             <line x1="320" y1="317" x2="320" y2="480" stroke="#999" strokeWidth="2" />
             <path d="M320 350 H522 A10 10 0 0 1 532 360 V480" stroke="#999" strokeWidth="2" fill="none" />
           
             {/* Member Secy to Steering Committee (Horizontal Line) */}
             <line x1="700" y1="65" x2="600" y2="65" stroke="#999" strokeWidth="2" />
           
          </svg>

        </div>
      </div>
    </div>
  );
};

export default OrganisationChart;
