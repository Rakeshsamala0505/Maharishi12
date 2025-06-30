import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/millets.module.css';

// Images
import sorghumImage from '../assets/images/sorghum.avif';
import pearlMilletImage from '../assets/images/Pearl_millet.avif';
import fingerMilletImage from '../assets/images/finger millet.jpg';
import foxtailMilletImage from '../assets/images/Foxtail_millet.avif';
import barnyardMilletImage from '../assets/images/BARNYARD.avif';
import kodoMilletImage from '../assets/images/KODOMILLET.avif';
import littleMilletImage from '../assets/images/little_millet.avif';
import prosoMilletImage from '../assets/images/proso.avif';

const milletData = [
  { image: sorghumImage, title: 'Sorghum', overlay: 'Grain for a Sustainable Future', description: 'Sorghum is rich in nutrients and climate resilient.Sorghum is rich in nutrients and climate resilientSorghum is rich in nutrients and climate resilientSorghum is rich in nutrients and climate resilientSorghum is rich in nutrients and climate resilientSorghum is rich in nutrients and climate resilient' },
  { image: pearlMilletImage, title: 'Pearl Millet', overlay: 'An Iron Rich Grain for Nutrition and Climate Action', description: 'Pearl millet contains high iron and grows in drought.' },
  { image: fingerMilletImage, title: 'Finger Millet', overlay: 'The Calcium Champion for Stronger Lives', description: 'Finger millet is packed with calcium for bone health.' },
  { image: foxtailMilletImage, title: 'Foxtail Millet', overlay: 'The Balanced Grain for Modern Wellness', description: 'Foxtail millet supports weight management and diabetes control.' },
  { image: barnyardMilletImage, title: 'Barnyard Millet', overlay: 'The Quick-Growing Climate Ally', description: 'Barnyard millet grows quickly and is rich in fiber.' },
  { image: kodoMilletImage, title: 'Kodo Millet', overlay: 'The Gut and Heart Friendly Grain', description: 'Kodo millet helps with digestion and heart health.' },
  { image: littleMilletImage, title: 'Little Millet', overlay: 'The Tiny Grain with Big Nutritional Value', description: 'Little millet is small but nutrient dense.' },
  { image: prosoMilletImage, title: 'Proso Millet', overlay: 'The Fast Food of Ancient Grains', description: 'Proso millet cooks quickly and provides instant energy.' },
];

const MilletsPage = () => {
  const [footerContent, setFooterContent] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch('/footer.html')
      .then((response) => response.text())
      .then((data) => setFooterContent(data));
  }, []);

  const openFullImage = (millet) => {
    setSelectedImage(millet);
  };

  const closeFullImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className={styles.section}>
        <h1 className={styles.title}>MILLETS</h1>
        <div className={styles.container}>
          {milletData.map((millet, index) => (
            <div key={index} className={styles.card} onClick={() => openFullImage(millet)}>
              <div className={styles.imageWrapper}>
                <img src={millet.image} alt={millet.title} />
                <div className={styles.overlay}>
                  <span>{millet.overlay}</span>
                </div>
              </div>
              <h3>{millet.title}</h3>
              <div className={styles.hoverLine}></div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className={styles.fullscreenOverlay} onClick={closeFullImage}>
          <div className={styles.fullscreenContent} onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <h2>{selectedImage.title}</h2>
            <p>{selectedImage.description}</p>
            <button onClick={closeFullImage}>Close</button>
          </div>
        </div>
      )}

      <div id="footer" dangerouslySetInnerHTML={{ __html: footerContent }} />
    </div>
  );
};

export default MilletsPage;
