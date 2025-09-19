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
import browntop from '../assets/images/browntop.avif'

/* ——— data ——— */
const milletData = [
  {
    image: pearlMilletImage,
    title: 'Pearl Millet',
    overlay: 'A Smart Grain for a Healthier, Resilient World',
    scientific: 'Cenchrus americanus',
    commonNames: 'Pearl Millet',
    description:
      'Pearl millet thrives in poor, sandy, and low-fertility soils with very little rainfall. It matures quickly and supports farming in regions prone to drought and heat stress, ensuring food production even under extreme conditions. pearl millet is more than just a traditional staple.',
    climate:
      'Its short growing cycle and minimal input needs reduce pressure on natural resources. Pearl millet improves soil structure and fits well into climate-resilient cropping systems.',
    nutrition: [
      ['Energy (Kcal)', '347'],
      ['Protein (g)', '10.9'],
      ['Fat (g)', '5.43'],
      ['Carbohydrate(g)', '61.8'],
      ['Ca (mg)', '27.4'],
      ['Fe (mg)', '6.4'],
    ],
  },
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
    image: fingerMilletImage,
    title: 'Finger Millet',
    overlay: 'The Calcium Champion for Stronger Lives',
    scientific: 'Eleusine coracana',
    commonNames: 'Finger Millet',
    description:
      'Finger millet, widely known as Ragi, is a hardy and highly nutritious grain that has nourished communities for generations. Indigenous to Africa and South Asia, this ancient millet thrives in tough conditions where many crops fail, making it a true food security grain.',
    climate:
      'Resilience Its ability to withstand drought and heat makes finger millet a key player in climate-smart farming systems. It improves soil organic matter and fits well in intercropping and rotational models.',
    nutrition: [
      ['Energy (Kcal)', '320'],
      ['Protein (g)', '7.2'],
      ['Fat (g)', '1.92'],
      ['Carbohydrate(g)', '66.8'],
      ['Ca (mg)', '364'],
      ['Fe (mg)', '4.6'],
    ],
  },
  {
    image: foxtailMilletImage,
    title: 'Foxtail Millet',
    overlay: 'The Balanced Grain for Modern Wellness',
    scientific: 'Setaria italica',
    commonNames: 'Foxtail Millet / Kangni / Korra / Thinai',
    description:
      'Foxtail millet is one of the oldest cultivated millets, known for its adaptability, short growing cycle, and excellent nutritional profile. Traditionally grown in arid and semi-arid regions of Asia, it is now regaining attention as a smart food for modern, health-conscious consumers. Foxtail millet is highly adaptable to drought-prone and low-input conditions, maturing in about 70–90 days.',
    climate:
      'Foxtail Millet requires very little water and grows well on marginal, rainfed lands, making it a suitable crop for climate-resilient agriculture. Its early maturity and pest resistance make it a preferred crop in regions with short growing windows and erratic weather.',
    nutrition: [
      ['Energy (Kcal)', '331'],
      ['Protein (g)', '12.3'],
      ['Fat (g)', '4.3'],
      ['Carbohydrate(g)', '60.1'],
      ['Ca (mg)', '31'],
      ['Fe (mg)', '2.8'],
    ],
  },
  
  {
    image: littleMilletImage,
    title: 'Little Millet',
    overlay: 'The Tiny Grain with Big Nutritional Value',
    scientific: 'Panicum sumatrense',
    commonNames: 'Little Millet / Kutki / Samai / Sama / Gajro',
    description:
      'Little millet is a tiny but mighty grain traditionally grown in India’s tribal and hilly regions. Though small in size, it is packed with nutrients and boasts strong resilience to harsh environmental conditions. It is gaining recognition as a versatile, climate-smart, and health-promoting crop.',
    climate:
      'Little millet is well-adapted to drought-prone, low-fertility, and rainfed areas. It requires very little water and can grow in upland soils where other crops struggle.  It is highly suited to climate-resilient farming systems and can serve as a fallback crop in times of rainfall uncertainty.',
    nutrition: [
      ['Energy (Kcal)', '346'],
      ['Protein (g)', '10.1'],
      ['Fat (g)', '5.89'],
      ['Carbohydrate(g)', '65.5'],
      ['Ca (mg)', '16.1'],
      ['Fe (mg)', '1.2'],
    ],
  },
  {
    image: barnyardMilletImage,
    title: 'Barnyard Millet',
    overlay: 'Grain for a Sustainable Future',
    scientific: 'Echinochloa esculenta',
    commonNames: 'Barnyard Millet, Japanese Barnyard Millet',
    description:
      'Barnyard millet is a fast-growing, highly adaptable millet traditionally cultivated in hilly, rainfed, and tribal regions of Asia Barnyard millet matures in just 45–60 days, making it one of the quickest millet crops to harvest. It grows well in poor soils, high altitudes, and water-scarce conditions, offering a vital safety net for farmers during dry spells or crop failures.',
    climate:
      'Barnyard millet ability to fit into short-season rotations makes it valuable for adaptive farming in areas impacted by climate variability.',
    nutrition: [
      ['Energy (Kcal)', '307'],
      ['Protein (g)', '11.2'],
      ['Fat (g)', '2.2'],
      ['Carbohydrate(g)', '65.5'],
      ['Ca (mg)', '11'],
      ['Fe (mg)', '15.2'],
    ],
  },
  {
    image: kodoMilletImage,
    title: 'Kodo Millet',
    overlay: 'Grain for a Sustainable Future',
     scientific: 'Paspalum scrobiculatum',
    commonNames: 'Kodo Millet / Kodra / Arikelu / Varagu',
    description:
      'Kodo millet is a traditional grain cultivated in the tribal regions of India and parts of Africa for centuries. Kodo millet grows well in poor, rocky, or shallow soils with minimal rainfall. It is highly drought-tolerant and suitable for rainfed, low-input farming. Known for its ability to thrive in marginal conditions, this millet plays a significant role in food security, sustainable agriculture, and digestive wellness.',
    climate:
      'Its hardiness and low water needs make it an ideal grain for climate-resilient cropping systems, especially in dryland and tribal farming landscapes.',
    nutrition: [
      ['Energy (Kcal)', '331'],
      ['Protein (g)', '8.9'],
      ['Fat (g)', '2.55'],
      ['Carbohydrate(g)', '70.4'],
      ['Ca (mg)', '14'],
      ['Fe (mg)', '0.2'],
    ],
  },

{
    image: prosoMilletImage,
    title: 'Proso Millet',
    overlay: 'The Fast Food of Ancient Grains',
    scientific: 'Panicum miliaceum',
    commonNames: 'Proso Millet / Chena / Barri / White Millet',
    description:
      'Proso millet is one of the fastest-growing cereal crops, often harvested within 60–80 days. Known for its hardiness and low input needs, it has been cultivated since ancient times in Asia and Europe. Today, it is gaining popularity as a nutritious, gluten-free grain with wide-ranging applications.',
    climate:
      'Proso millet requires minimal water, thrives in dry climates, and grows on low-fertility soils. It fits well into short-season rotations and is an excellent crop for rainfed and marginal farming systems. Its short life cycle also makes it an ideal choice in areas facing climatic uncertainty or late monsoons.',
    nutrition: [
      ['Energy (Kcal)', '341'],
      ['Protein (g)', '12.5'],
      ['Fat (g)', '2.55'],
      ['Carbohydrate(g)', '70.4'],
      ['Ca (mg)', '14'],
      ['Fe (mg)', '0.2'],
    ],
  },
  {
    image: browntop,
    title: 'Browntop Millet',
    overlay: 'The Traditional Healer of Soil and Body ',
    scientific: 'Brachiaria ramosa',
    commonNames: 'Browntop Millet / Korale / Andakorra / Palapul / Manjulu',
    description:
      'Browntop millet is one of the fastest-maturing and climate-resilient ancient grains, traditionally cultivated in the semi-arid and hilly regions of India. With a growing cycle of just 60–75 days, it is ideal for quick harvests in areas with limited rainfall and degraded soils. This lesser-known millet is gaining recognition for its exceptional environmental adaptability and health-promoting properties.',
    climate:
      'Browntop millet is well-suited for dryland farming, requiring minimal water and inputs. Its short growth cycle allows it to escape drought periods, making it a strategic crop for climate-smart agriculture and crop diversification in fragile ecosystems.',
    nutrition: [
      ['Energy (Kcal)', '338'],
      ['Protein (g)', '11.5'],
      ['Fat (g)', '1.89'],
      ['Carbohydrate(g)', '71.3'],
      ['Ca (mg)', '0.01'],
      ['Fe (mg)', '0.65'],
    ],
  },
];

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
