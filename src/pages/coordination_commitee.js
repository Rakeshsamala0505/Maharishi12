import React from 'react';
import '../styles/coordination_commitee.css';
import DrMangilal from '../assets/images/ml.jat_cc1.png';
import pradhan from '../assets/images/sk_pradhan3.png';
import Mandal from '../assets/images/B.Mandal_cc25.png';
import Satyavathi from '../assets/images/DIR3.png';
import DeveshChaturvedi from '../assets/images/dr_devesh1.png';

const committeeMembers = [
  {
    name: 'Dr. Mangi Lal Jat',
    description:
      'Department of Agricultural Research and Education (DARE) and Director General (DG) of ICAR',
    image: DrMangilal,
    url: 'https://www.icrisat.org/about/team/dr-mangi-lal-jat',
  },
  {
    name: 'Shri. Devesh Chaturvedi',
    description:
      'Department of Agriculture and Farmers Welfare Government of India',
    image: DeveshChaturvedi,
    url: 'https://www.nabard.org/profile.aspx?Id=1434&cId=9',
  },
  {
    name: 'Dr (Mrs) C Tara Satyavathi',
    role: '',
    description: 'Director, ICAR-Indian Institute of Millet Research',
    image: Satyavathi,
    url: 'https://www.millets.res.in/sstaff/DrTara.php',
  },
  {
    name: 'Dr. Sarat Kumar Pradhan',
    role: 'Assistant Director General (FFC)',
    description:
      'Indian Council of Agricultural Research New Delhi, India',
    image: pradhan,
    url: 'https://naas.org.in/detail.php?id=661',
  },
  {
    name: 'Dr. B. Mandal',
    role: 'Assistant Director General (ADG)',
    description:
      'Indian Council of Agricultural Research (ICAR)',
    image: Mandal,
    url: 'https://icar.org.in/contact-4',
  },
];

const CoordinationCommittee = () => {
  return (
    <div className="committee-section">
      <h2 className="section-title">
        <span className="highlight">Coordination</span> Committee
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
