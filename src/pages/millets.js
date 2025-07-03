// src/pages/MilletsPage.jsx
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/millets.module.css';

/* ——— images ——— */
import sorghumImage       from '../assets/images/sorghum.avif';
import pearlMilletImage   from '../assets/images/Pearl_millet.avif';
import fingerMilletImage  from '../assets/images/finger millet.jpg';
import foxtailMilletImage from '../assets/images/Foxtail_millet.avif';
import barnyardMilletImage from '../assets/images/BARNYARD.avif';
import kodoMilletImage    from '../assets/images/KODOMILLET.avif';
import littleMilletImage  from '../assets/images/little_millet.avif';
import prosoMilletImage   from '../assets/images/proso.avif';

/* ——— data ——— */
const milletData = [
  {
    image: sorghumImage,
    title: 'Sorghum',
    overlay: 'Grain for a Sustainable Future',
    scientific: 'Sorghum bicolor',
    commonNames: 'Sorghum / Jowar / Great Millet',
    description:
      'Sorghum is a resilient, climate-smart grain that has been cultivated for thousands of years. Grown mostly in dry and arid regions, it thrives with minimal water and inputs, making it a powerful ally in the face of climate change.',
    climate:
      'Its deep roots improve soil health and reduce erosion. Sorghum requires less fertilizer and water, reducing the environmental footprint of farming.',
    nutrition: [
      ['Energy (Kcal)', '334'],
      ['Protein (g)', '9.9'],
      ['Fat (g)', '1.73'],
      ['Carbohydrate(g)', '67.7'],
      ['Ca (mg)', '27.6'],
      ['Fe (mg)', '3.9'],
    ],
  },
  {
    image: pearlMilletImage,
    title: 'Pearl Millet',
    overlay: 'A Smart Grain for a Healthier, Resilient World',
    scientific: 'Cenchrus americanus',
    commonNames: 'Pearl Millet',
    description:
      'Sorghum is rich in nutrients and highly climate‑resilient. It thrives in semi‑arid regions, making it a dependable crop under harsh conditions.',
    climate:
      'Tolerates drought, heat, and soil salinity better than most cereals, requiring minimal irrigation.',
    nutrition: [
      ['Energy (Kcal)', '329'],
      ['Protein (g)', '10.6'],
      ['Fat (g)', '3.5'],
      ['Carbohydrate(g)', '72.1'],
      ['Ca (mg)', '25'],
      ['Fe (mg)', '4.1'],
    ],
  },
  {
    image: fingerMilletImage,
    title: 'Finger Millet',
    overlay: 'Grain for a Sustainable Future',
    description:
      'Sorghum is rich in nutrients and highly climate‑resilient. It thrives in semi‑arid regions, making it a dependable crop under harsh conditions.',
    scientific: 'Sorghum bicolor',
    commonNames: 'Sorghum / Jowar / Great Millet',
    climate:
      'Tolerates drought, heat, and soil salinity better than most cereals, requiring minimal irrigation.',
    nutrition: [
      ['Energy (Kcal)', '329'],
      ['Protein (g)', '10.6'],
      ['Fat (g)', '3.5'],
      ['Carbohydrate(g)', '72.1'],
      ['Ca (mg)', '25'],
      ['Fe (mg)', '4.1'],
    ],
  },
  {
    image: foxtailMilletImage,
    title: 'Foxtail Millet',
    overlay: 'Grain for a Sustainable Future',
    description:
      'Sorghum is rich in nutrients and highly climate‑resilient. It thrives in semi‑arid regions, making it a dependable crop under harsh conditions.',
    scientific: 'Sorghum bicolor',
    commonNames: 'Sorghum / Jowar / Great Millet',
    climate:
      'Tolerates drought, heat, and soil salinity better than most cereals, requiring minimal irrigation.',
    nutrition: [
      ['Energy (Kcal)', '329'],
      ['Protein (g)', '10.6'],
      ['Fat (g)', '3.5'],
      ['Carbohydrate(g)', '72.1'],
      ['Ca (mg)', '25'],
      ['Fe (mg)', '4.1'],
    ],
  },
  {
    image: barnyardMilletImage,
    title: 'Barnyard Millet',
    overlay: 'Grain for a Sustainable Future',
    description:
      'Sorghum is rich in nutrients and highly climate‑resilient. It thrives in semi‑arid regions, making it a dependable crop under harsh conditions.',
    scientific: 'Sorghum bicolor',
    commonNames: 'Sorghum / Jowar / Great Millet',
    climate:
      'Tolerates drought, heat, and soil salinity better than most cereals, requiring minimal irrigation.',
    nutrition: [
      ['Energy (Kcal)', '329'],
      ['Protein (g)', '10.6'],
      ['Fat (g)', '3.5'],
      ['Carbohydrate(g)', '72.1'],
      ['Ca (mg)', '25'],
      ['Fe (mg)', '4.1'],
    ],
  },
  {
    image: kodoMilletImage,
    title: 'Kodo Millet',
    overlay: 'Grain for a Sustainable Future',
    description:
      'Sorghum is rich in nutrients and highly climate‑resilient. It thrives in semi‑arid regions, making it a dependable crop under harsh conditions.',
    scientific: 'Sorghum bicolor',
    commonNames: 'Sorghum / Jowar / Great Millet',
    climate:
      'Tolerates drought, heat, and soil salinity better than most cereals, requiring minimal irrigation.',
    nutrition: [
      ['Energy (Kcal)', '329'],
      ['Protein (g)', '10.6'],
      ['Fat (g)', '3.5'],
      ['Carbohydrate(g)', '72.1'],
      ['Ca (mg)', '25'],
      ['Fe (mg)', '4.1'],
    ],
  },

  {
    image: littleMilletImage,
    title: 'Little Millet',
    overlay: 'Grain for a Sustainable Future',
    description:
      'Sorghum is rich in nutrients and highly climate‑resilient. It thrives in semi‑arid regions, making it a dependable crop under harsh conditions.',
    scientific: 'Sorghum bicolor',
    commonNames: 'Sorghum / Jowar / Great Millet',
    climate:
      'Tolerates drought, heat, and soil salinity better than most cereals, requiring minimal irrigation.',
    nutrition: [
      ['Energy (Kcal)', '329'],
      ['Protein (g)', '10.6'],
      ['Fat (g)', '3.5'],
      ['Carbohydrate(g)', '72.1'],
      ['Ca (mg)', '25'],
      ['Fe (mg)', '4.1'],
    ],
  },
{
    image: prosoMilletImage,
    title: 'Proso Millet',
    overlay: 'Grain for a Sustainable Future',
    description:
      'Sorghum is rich in nutrients and highly climate‑resilient. It thrives in semi‑arid regions, making it a dependable crop under harsh conditions.',
    scientific: 'Sorghum bicolor',
    commonNames: 'Sorghum / Jowar / Great Millet',
    climate:
      'Tolerates drought, heat, and soil salinity better than most cereals, requiring minimal irrigation.',
    nutrition: [
      ['Energy (Kcal)', '329'],
      ['Protein (g)', '10.6'],
      ['Fat (g)', '3.5'],
      ['Carbohydrate(g)', '72.1'],
      ['Ca (mg)', '25'],
      ['Fe (mg)', '4.1'],
    ],
  },];

const MilletsPage = () => {
  const [footerContent, setFooterContent] = useState('');
  const [selectedMillet, setSelectedMillet] = useState(null);

  /* fetch footer once */
  useEffect(() => {
    fetch('/footer.html')
      .then((res) => res.text())
      .then(setFooterContent);
  }, []);

  const openModal  = (millet) => setSelectedMillet(millet);
  const closeModal = () => setSelectedMillet(null);

  return (
    <div>
      {/* ── GRID ─────────────────────────────────────────── */}
      <section className={styles.section}>
        <h1 className={styles.title}>MILLETS</h1>

        <div className={styles.container}>
          {milletData.map((millet, idx) => (
            <div
              key={idx}
              className={styles.card}
              onClick={() => openModal(millet)}
            >
              <div className={styles.imageWrapper}>
                <img src={millet.image} alt={millet.title} />

                {/* overlay text now has its own class */}
                <div className={styles.overlay}>
                  <span className={styles.overlayText}>{millet.overlay}</span>
                </div>
              </div>

              {/* card title now has its own class */}
              <h3 className={styles.cardTitle}>{millet.title}</h3>

              <div className={styles.hoverLine}></div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MODAL ────────────────────────────────────────── */}
      {selectedMillet && (
        <div className={styles.fullscreenOverlay} onClick={closeModal}>
          <div
            className={styles.fullscreenContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>
<span className={styles.modalName}>{selectedMillet.title}</span>
  <span className={styles.modalTagline}>{selectedMillet.overlay}</span>            
  </h2>

            <div className={styles.modalBody}>
              {/* LEFT – details */}
              <div className={styles.details}>
                <p>
                  <strong>Scientific Name:</strong>{' '}
                  <em>{selectedMillet.scientific}</em>
                </p>
                <p>
                  <strong>Common Name:</strong> {selectedMillet.commonNames}
                </p>
                <p>{selectedMillet.description}</p>
                <p>
                  <strong>🌍Climate Resilience</strong> {selectedMillet.climate}
                </p>
              </div>

              {/* RIGHT – nutrition facts */}
              <div className={styles.nutritionCard}>
                <h3>Nutrition Facts</h3>
                <small>
                  High dietary fibre &amp; antioxidant activity with high iron
                  content
                </small>

                <table className={styles.nutritionTable}>
  <thead>
    <tr>
      <th>Nutrients</th>
      <th>Value per 100 grams</th>
    </tr>
  </thead>
  <tbody>
    {selectedMillet.nutrition.map(([n, v]) => (
      <tr key={n}>
        <td>{n}</td>
        <td>{v}</td>
      </tr>
    ))}
  </tbody>
</table>

              </div>
            </div>

            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      {/* ── FOOTER ───────────────────────────────────────── */}
      <div
        id="footer"
        dangerouslySetInnerHTML={{ __html: footerContent }}
      />
    </div>
  );
};

export default MilletsPage;
