import React from 'react';
import styles from '../styles/structure.module.css'; // Assuming you are using CSS Modules
import NarendraModiImage from '../assets/images/DDG412.png';
import ShivarajSinghChouhanImage from '../assets/images/DDG32.png';
import DrHimanshuPathakImage from '../assets/images/DG1.png';
import DrTilakRajSharmaImage from '../assets/images/DDG.png';
import DrCTaraSatyavathiImage from '../assets/images/director.png';

// Array of person data (moved out of the component for better maintainability)
const people = [
  
  {
    id: 1,
    name: 'Narendra Modi',
    title: 'Prime Minister of India',
    image: NarendraModiImage,
    alt: 'Narendra Modi, Prime Minister of India',
  },
  {
    id: 2,
    name: 'Shivaraj Singh Chouhan',
    title: "Minister of Agriculture and Farmers' Welfare",
    image: ShivarajSinghChouhanImage,
    alt: "Shivaraj Singh Chouhan, Minister of Agriculture and Farmers' Welfare",
  },
  {
    id: 3,
    name: 'Dr. Himanshu Pathak, Secretary (DARE)',
    title: 'Director General (ICAR)',
    image: DrHimanshuPathakImage,
    alt: 'Dr. Himanshu Pathak, Secretary (DARE), Director General (ICAR)',
  },
  {
    id: 4,
    name: 'Dr Tilak Raj Sharma',
    title: 'Deputy Director General (Crop Science)',
    image: DrTilakRajSharmaImage,
    alt: 'Dr Tilak Raj Sharma, Deputy Director General (Crop Science)',
  },
  {
    id: 5,
    name: 'Dr (Mrs) C Tara Satyavathi',
    title: 'Director of IIMR (Rajendra nagar, Hyderabad)',
    image: DrCTaraSatyavathiImage,
    alt: 'Dr (Mrs) C Tara Satyavathi, Director of IIMR',
  },
];

const Structure = () => {
  return (
    <div className={styles.contentWrapper}>
    <div className={styles.structureContainer}> {/* Using CSS Module class */}
      {people.map((person) => (
        <div key={person.id} className={styles.person}> {/* Using CSS Module class and adding key */}
          <img src={person.image} alt={person.alt} />
          <div className={styles.bioContent}> {/* Using CSS Module class */}
            <h3 className={styles.headingAbout}>{person.name}</h3> {/* Using CSS Module class */}
            <p>{person.title}</p>
          </div>
        </div>
      ))}
    </div>
    </div>

  );
  
};

export default Structure; 