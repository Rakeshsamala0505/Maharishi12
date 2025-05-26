import React from 'react';
import styles from '../styles/structure.module.css';
import NarendraModiImage from '../assets/images/DDG412.png';
import ShivarajSinghChouhanImage from '../assets/images/DDG32.png';
import DeveshChaturvedi from '../assets/images/dr_devesh.jpg';
import Drdevenderkumar from '../assets/images/devender.jpg';
import DrCTaraSatyavathiImage from '../assets/images/director.png';
import DrMangilal from '../assets/images/dr_mangi_lal1.png';

const people = [
  {
    id: 1,
    name: ' Shri Narendra Damodardas Modi',
    title: ' Honerable Prime Minister of India',
    image: NarendraModiImage,
    alt: 'Narendra Modi, Prime Minister of India',
  },
  {
    id: 2,
    name: ' Shri Shivaraj Singh Chouhan',
    title: " Union Agriculture and Farmers Welfare Minister,Govt of India",
    image: ShivarajSinghChouhanImage,
    alt: "Shivaraj Singh Chouhan, Minister of Agriculture and Farmers' Welfare",
  },
  {
    id: 3,
    name: 'Shri. Devesh Chaturvedi',
    title: 'Secretary, Department of Agriculture & Farmers Welfare (DA&FW), Govt of India',
    image: DeveshChaturvedi,
    alt: 'Devesh Chaturvedi',
  },
  {
    id: 4,
    name: 'Dr. Mangi Lal Jat',
    title: 'Director General, Indian Council of Agricultural Research and Secretary, Department of Agricultural Research and Education, Govt of India',
    image: DrMangilal,
    alt: 'A well-recognized Systems Agronomist',
    specialClass: 'mangiFix',
  },
  {
    id: 5,
    name: 'Dr Devendra Kumar Yadava',
    title: 'Deputy Director General (Crop Science) of Indian Council of Agricultural Research',
    image: Drdevenderkumar,
    alt: 'Dr Devendra Kumar',
  },
  {
    id: 6,
    name: 'Dr (Mrs) C Tara Satyavathi',
    title: 'Director, ICAR-Indian Institute of Millet Research',
    image: DrCTaraSatyavathiImage,
    alt: 'Dr (Mrs) C Tara Satyavathi, Director of IIMR',
  },
];

const Structure = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.structureContainer}>
          <h1 className={styles.title}>Key persons of MAHARISHI</h1>

          {/* Render first 2 normally */}
          {people.slice(0, 2).map((person) => (
            <div key={person.id} className={styles.person}>
              <img src={person.image} alt={person.alt} />
              <div className={styles.bioContent}>
                <h3 className={styles.headingAbout}>{person.name}</h3>
                <p>{person.title}</p>
              </div>
            </div>
          ))}

          {/* Render 3rd & 4th side-by-side */}
          <div className={styles.personRow}>
            {people.slice(2, 4).map((person) => (
              <div
                key={person.id}
                className={`${styles.person} ${person.specialClass ? styles[person.specialClass] : ''}`}
              >
                <img src={person.image} alt={person.alt} />
                <div className={styles.bioContent}>
                  <h3 className={styles.headingAbout}>{person.name}</h3>
                  <p>{person.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Render last two normally */}
          {people.slice(4).map((person) => (
            <div key={person.id} className={styles.person}>
              <img src={person.image} alt={person.alt} />
              <div className={styles.bioContent}>
                <h3 className={styles.headingAbout}>{person.name}</h3>
                <p>{person.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Structure;
