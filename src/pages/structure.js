import React from 'react';
import styles from '../styles/structure.module.css'; // Assuming you are using CSS Modules
import NarendraModiImage from '../assets/images/DDG412.png';
import ShivarajSinghChouhanImage from '../assets/images/DDG32.png';
import DeveshChaturvedi from '../assets/images/dr_devesh.jpg';
import Drdevenderkumar from '../assets/images/devender.jpg';
import DrCTaraSatyavathiImage from '../assets/images/director.png';
import DrMangilal from '../assets/images/dr_mangi_lal1.png';

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
    name: 'Dr. Mangi Lal Jat',
    title: 'Department of Agricultural Research and Education (DARE) and Director General (DG) of ICAR',
    image: DrMangilal,
    alt: 'A well-recognized Systems Agronomist',
  },
  {
    id: 6,
    name: 'Dr (Mrs) C Tara Satyavathi',
    title: 'Director of IIMR (Rajendra nagar, Hyderabad)',
    image: DrCTaraSatyavathiImage,
    alt: 'Dr (Mrs) C Tara Satyavathi, Director of IIMR',
  },
  
];

const Structure = () => {
  return (
    <div className={styles.container}> {/* Using CSS Module class */}

      <div className={styles.contentWrapper}>
        
        <div className={styles.structureContainer}>
        <h1 className={styles.title}>Key persons of MAHARISHI</h1> {/* Using CSS Module class */}

          {people.map((person) => (
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
    </div> /* ✅ Closing the outermost div */
  );
};


export default Structure; 