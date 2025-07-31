import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/ancient_grains.module.css'; // Import as 'st yles'

// Import images
import oats from '../assets/images/oatsimage.avif';
import quinoa from '../assets/images/quinoa.avif';
import barley from '../assets/images/barley_new.jpg';
import fonio from '../assets/images/FONIO DEHULLED.avif';
import jobstearspoon from '../assets/images/jobstearspoon.avif';
import teff from '../assets/images/teff-grains.avif';
import chia from '../assets/images/chiaseeds.avif';
import buckwheatseed from '../assets/images/buckwheatseed.avif';
/* ——— data ——— */
const milletData = [
  {
    image: oats,
    title: 'Oats',
    overlay: 'The Heart-Healthy Grain for Everyday Wellness',
    scientific: 'Avena sativa',
    commonNames: 'Oats / Jai / Kharabij / Hafer',
    description:
      'Oats are one of the most popular whole grains globally, cherished for their mild flavor, versatility, and powerful health benefits. Cultivated mainly in temperate regions, oats have become a staple in modern diets thanks to their cholesterol-lowering properties and digestive benefits.',
    climate:
      'Oats are well-suited to cooler, wetter climates and can be grown on less fertile soils. Their adaptability and low input requirements make them a practical option for crop diversification in temperate farming systems.',
    Health:
      'Rich in soluble fiber, especially beta-glucan, oats support heart health by reducing LDL cholesterol. They are also a good source of manganese, phosphorus, and antioxidants such as avenanthramides. Oats aid in blood sugar regulation, digestive wellness, and provide long-lasting energy, making them ideal for daily consumption.',
      nutrition: [
      ['Energy (Kcal)', '389'],
      ['Protein (g)', '16.9'],
      ['Fat (g)', '6.9'],
      ['Carbohydrate(g)', '66.3'],
      ['Ca (mg)', '54'],
    ],
  },
  {
    image: quinoa,
    title: 'Quinoa',
    overlay: 'The Complete Protein for Global Nutrition',
    scientific: 'Chenopodium quinoa',
    commonNames: 'Quinoa / Kinwa / Keen-wah',
    description:
      'Quinoa, a sacred crop of the Andean civilizations, is a gluten-free pseudocereal now recognized worldwide for its exceptional nutritional value. Known as a "complete protein," it contains all nine essential amino acids, a rarity in plant-based foods.',
    climate:
      'Quinoa is incredibly hardy, tolerating poor soils, drought, and high altitudes. It performs well in semi-arid and saline environments, offering a sustainable cropping option for marginal lands and climate-challenged areas.',
    Health:
      'Quinoa is a powerhouse of protein, fiber, iron, magnesium, and lysine. Its anti-inflammatory properties and low glycemic index make it suitable for cardiovascular, metabolic, and gluten-free diets. A favorite among vegans, vegetarians, and fitness communities globally.',
      nutrition: [
      ['Energy (Kcal)', '368'],
      ['Protein (g)', '14'],
      ['Fat (g)', '6'],
      ['Carbohydrate(g)', '64'],
      ['Ca (mg)', '47'],
    ],
  },
  
  {
    image: fonio,
    title: 'Fonio',
    overlay: 'Africa’s Ancient Supergrain for Fast and Resilient Farming',
    scientific: 'Digitaria exilis',
    commonNames: 'Fonio / Acha / Hungry Rice',
    description:
      'Fonio is among the oldest cultivated grains in West Africa. Its tiny seeds pack a serious punch in nutrition and cultural heritage. Revered for its quick maturity and adaptability, fonio is gaining global interest as a climate-smart crop.',
    climate:
      'Fonio matures in as little as 6–8 weeks and thrives on poor, sandy soils with minimal water. It is perfect for dryland farming and offers a reliable yield even under challenging climatic conditions.',
    Health:
      'Naturally gluten-free, fonio is rich in iron, zinc, methionine, and cysteine—amino acids often lacking in major cereals. It supports digestion, helps prevent anemia, and is ideal for gluten-sensitive individuals. Its quick cooking time adds to its appeal for busy lifestyles.',
      nutrition: [
      ['Energy (Kcal)', '360'],
      ['Protein (g)', '7'],
      ['Fat (g)', '2'],
      ['Carbohydrate(g)', '72'],
      
    ],
  },
  {
    image: jobstearspoon,
    title: 'Job’s Tears',
    overlay: 'The Medicinal Grain for Gut and Metabolic Health',
    scientific: 'Coix lacryma-jobi',
    commonNames: ' Job’s Tears / Adlay / Hatomugi',
    description:
      'Job’s Tears is a pearl-like grain traditionally used in East and Southeast Asia for food and medicine. It is both a healing grain and a nourishing cereal, valued for its anti-inflammatory and metabolic benefits.',
    climate:
      'It grows well in humid subtropical climates and tolerates varying rainfall conditions. It is suited to both upland and lowland environments, offering flexibility in regional cultivation.',
    Health:
      'Job’s Tears contains high levels of protein, dietary fiber, and unique compounds like coixenolide, which may support immune and metabolic functions. It aids digestion, helps control blood sugar, and supports gut health, making it a functional grain for wellness-oriented diets.',
      nutrition: [
      ['Energy (Kcal)', '360'],
      ['Protein (g)', '8'],
      ['Fat (g)', '1'],
      ['Carbohydrate(g)', '78'],
      
    ],
  },
  {
    image: teff,
    title: 'Teff',
    overlay: 'The Tiny Powerhouse Behind Ethiopia’s Endurance',
     scientific: 'Eragrostis tef',
    commonNames: 'Teff',
    description:
      'Teff is a staple of Ethiopian cuisine, particularly known as the main ingredient in injera. Despite its tiny size, teff delivers mighty nutrition and endurance-boosting qualities, which have supported long-distance runners and farmers alike.',
    climate:
      'Teff adapts to a variety of conditions, from waterlogging to drought. Its short growing season and tolerance to poor soils make it an excellent choice for sustainable agriculture in varied climates.',
    Health:
      'Teff is rich in calcium, iron, and resistant starch, which benefits bone health and glycemic control. It is naturally gluten-free and high in protein and fiber. Teff supports endurance, making it a preferred grain for athletes and active individuals.',
      nutrition: [
      ['Energy (Kcal)', '367'],
      ['Protein (g)', '13'],
      ['Fat (g)', '2.1'],
      ['Carbohydrate(g)', '73'],
      ['Ca (mg)', '180'],
    ],
  },

  {
    image: chia,
    title: 'Chia',
    overlay: 'The Omega-3 Rich Seed for Holistic Wellness',
    scientific: 'Salvia hispanica',
    commonNames: 'Chia',
    description:
      'Chia seeds, once a staple of Aztec and Mayan diets, are now celebrated as a global superfood. These tiny seeds are nutritional powerhouses, offering a dense profile of essential nutrients in a compact form.',
    climate:
      'Chia thrives in dry, warm climates and is often grown with minimal pesticide use. It fits well in rotational cropping and regenerative agricultural practices.',
    Health:
      'Chia is exceptionally high in omega-3 fatty acids, fiber, protein, calcium, and antioxidants. It supports heart, digestive, and bone health, while promoting satiety and hydration. Soaked chia forms a gel-like texture that is beneficial for gut health and detox.',
      nutrition: [
      ['Energy (Kcal)', '486'],
      ['Protein (g)', '16'],
      ['Fat (g)', '31'],
      ['Carbohydrate(g)', '42'],
      ['Ca (mg)', '631']    ],
  },
{
    image: buckwheatseed,
    title: 'Buckwheat',
    overlay: 'The Pseudocereal Champion for Heart and Soil Health',
    scientific: ' Fagopyrum esculentum',
    commonNames: 'Buckwheat / Kuttu',
    description:
      'Buckwheat, despite its name, is not related to wheat. It’s a gluten-free pseudocereal known for both its health-enhancing properties and soil-revitalizing abilities, especially in organic and regenerative farming.',
    climate:
      'Buckwheat grows quickly, matures in poor soils, and thrives in cool, moist conditions. Its fast growth helps suppress weeds and improve soil fertility, making it a valuable rotation crop.',
    Health:
      'Buckwheat is rich in rutin, a flavonoid with cardiovascular benefits, along with fiber, magnesium, and complete protein. It supports heart health, blood sugar regulation, and gut function, making it a staple in functional foods and gluten-free diets.',
      nutrition: [
      ['Energy (Kcal)', '343'],
      ['Protein (g)', '13'],
      ['Fat (g)', '3.5'],
      ['Carbohydrate(g)', '71'],
      ['Ca (mg)', '18'],
    ],
  },{
    image: barley,
    title: 'Barley',
    overlay: 'Essential in cooking and brewing, including beer, whiskey.',
    scientific: 'Hordeum vulgare',
    commonNames: 'Barley/ Jau / Jav / Barlibiyam',
    description:
      'Barley (Hordeum vulgare ssp. vulgare), the fourth most important cereal globally, was among the first crops domesticated by humans. Its adaptability has led to widespread cultivation across diverse climates and regions. At present, it is widely used as a primary livestock feed and a key ingredient in the brewing industry.',
    climate:
      'Barley prefers cool, dry climates with temperatures of 15–30°C and well-drained soils, tolerating drought, salinity, and frost but sensitive to heat and humidity. It grows best with 300–500 mm of rainfall and full sunlight, thriving in temperate and high-altitude tropical areas.',
    Health:
      'Barley is rich in functional compounds like resistant starch, β-glucans, unsaturated fatty acids, phytosterols, and essential amino acids. It also provides minerals and B vitamins such as thiamine, riboflavin, pyridoxine, and folate, boosting its nutritional value and health benefits.',
      nutrition: [
      ['Energy (Kcal)', '354'],
      ['Protein (g)', '12.5'],
      ['Fat (g)', '2.3'],
      ['Carbohydrate(g)', '73.5'],
      ['Ca (mg)', '33'],
      ['Fiber (g)', '17.3'],

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
        <h1 className={styles.title}>ANCIENT MILLETS</h1>

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
                <p>
                  <strong>🥗 Health & Nutrition</strong> {selectedMillet.climate}
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