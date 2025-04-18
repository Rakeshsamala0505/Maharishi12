import React from 'react';
import styles from '../styles/structure.module.css'; // Assuming you are using CSS Modules
import NarendraModiImage from '../assets/images/DDG412.png';
import ShivarajSinghChouhanImage from '../assets/images/DDG32.png';
import DeveshChaturvedi from '../assets/images/dr_devesh.jpg';
import Drdevenderkumar from '../assets/images/devender.jpg';
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
    name: 'Shri. Devesh Chaturvedi, IAS, Secretary',
    title: 'Department of Agriculture & Farmer Welfare',
    image: DeveshChaturvedi,
    alt: 'Devesh Chaturvedi',
  },
  {
    id: 4,
    name: 'Dr Devendra Kumar',
    title: 'national academy of agricultural sciences',
    image: Drdevenderkumar,
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