import React from 'react';
import '../styles/structure.module.css';
import Prime from '../assets/images/prime Minister.png';
import Shivaraj from '../assets/images/DDG32.png';
import devesh from '../assets/images/dr_devesh.jpg';
import mangilal from '../assets/images/ml.jat_cc1.png';
import devender from '../assets/images/devender.jpg';
import Director from '../assets/images/DIRECTOR.jpg';


const committeeMembers = [
  {
    name: 'Shri Narendra Damodardas Modi',
    description:
      'Hon’ble Prime Minister of India',
    image: Prime,
  },
  {
    name: 'Shri Shivaraj Singh Chouhan',
    description:
      'Union Agriculture and Farmers Welfare Minister,Govt of India',
    image: Shivaraj,
  },
  {
    name: 'Shri. Devesh Chaturvedi',
    description: 'Secretary, Department of Agriculture & Farmers Welfare (DA&FW), Govt of India',
    image: devesh,
  },
  {
    name: 'Dr. Mangi Lal Jat',
    description:
      'Director General, Indian Council of Agricultural Research and Secretary, Department of Agricultural Research and Education, Govt of India',
    image: mangilal,
  },
  {
    name: 'Dr Devendra Kumar Yadava',
    description:
      'Deputy Director General (Crop Science) of Indian Council of Agricultural Research',
    image: devender,
  },
  {
    name: 'Dr (Mrs) C Tara Satyavathi',
    description:
      'Director, ICAR-Indian Institute of Millet Research',
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
