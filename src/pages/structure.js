import React from 'react';
import '../styles/structure.module.css';
import ET from '../assets/images/emty.jpg';
import mangilal from '../assets/images/ml.jat_cc1.png';
import Mandal from '../assets/images/B.Mandal.png';
import Neeru from '../assets/images/neeru.jpg';
import devender from '../assets/images/devender.jpg';
import Director from '../assets/images/DIR3.png';
import pradhan from '../assets/images/sk_pradhan3.png';
import Jaishankar from '../assets/images/jaishankar.jpg';



const committeeMembers = [
  {
    name: 'Dr. Mangi Lal Jat',
    description:
      'Secretary, DARE & DG, ICAR Chairman',
    image: mangilal,
  },
  {
    name: '.......',
    description:
      'Additional Secretary (Crops), DA&FW, Ministry of Agriculture & Farmers Welfare Member',
    image: ET,
  },
  {
    name: 'Dr Devendra Kumar Yadava',
    description: 'Deputy Director General (Crop Science), ICAR',
    image: devender,
  },
  {
    name: 'Dr. Sharat Kumar Pradhan',
    description:
      'Assistant Director General (Food & Fodder Crops), ICAR Member',
    image: pradhan,
  },
  {
    name: 'Dr. Bikash Mandal',
    description:
      'Assistant Director General (International Relations), ICAR',
    image: Mandal,
  },
  {
    name: 'Dr. Neeru Bhooshan',
    description:
      'Assistant Director General (Intellectual Property & Technology Management),ICAR',
    image: Neeru,
  },
  {
    name: '.....',
    description:
      'Director, Legal,ICAR Member',
    image: ET,
  },
  {
    name: 'Dr. S. Jaishankar',
    description:
      'Representative from Ministry of External Affairs Member',
    image: Jaishankar,
  },
  {
    name: 'Dr. (Mrs.) C. Tara Satyavathi',
    description:
      'Director, ICAR-lndian Institute of Millet Research, Hyderabad Member Secretary',
    image: Director,
  },
  
];

const CoordinationCommittee = () => {
  return (
    <div className="committee-section">
      <h2 className="section-title">
        <span className="highlight">Steering</span> Committee
      </h2>
      <p className="section-subtitle">
        A Forum of all MAHARISHI members constituted to advise, review and approve annual or multi-annual Initiative
      </p>
      <div className="committee-grid">
        {committeeMembers.map((member, index) => (
          <a
            href={member.url}
            target="_blank"
            rel="noopener noreferrer"
            className="committee-card"
            key={index}
          >
            <img
              src={member.image}
              alt={member.name}
              className="committee-image"
            />
            <div className="committee-info">
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
              <div className="underline" />
              <p>{member.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CoordinationCommittee;
