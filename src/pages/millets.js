import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/millets.module.css'; // Import as 'styles'

// Import images
import sorghumImage from '../assets/images/sorghum.avif';
import pearlMilletImage from '../assets/images/Pearl_millet.avif';
import fingerMilletImage from '../assets/images/finger millet.jpg';
import foxtailMilletImage from '../assets/images/Foxtail_millet.avif';
import barnyardMilletImage from '../assets/images/BARNYARD.avif';
import kodoMilletImage from '../assets/images/KODOMILLET.avif';
import littleMilletImage from '../assets/images/little_millet.avif';
import prosoMilletImage from '../assets/images/proso.avif';

const MilletsPage = () => {
  const [footerContent, setFooterContent] = useState('');

  useEffect(() => {
    fetch('/footer.html')
      .then((response) => response.text())
      .then((data) => setFooterContent(data));
  }, []);

  return (
    <div>
      <div className={styles.section}>
        <h1 className={styles['millets-title']}>MILLETS</h1>
        <div className={styles.container}>
          <div className={styles.card}>
            <a href="#section1">
              <img src={sorghumImage} alt="Sorghum" />
              <h3>Sorghum</h3>
            </a>
          </div>
          <div className={styles.card}>
            <a href="#section2">
              <img src={pearlMilletImage} alt="Pearl Millet" />
              <h3>Pearl millet</h3>
            </a>
          </div>
          <div className={styles.card}>
            <a href="#section3">
              <img src={fingerMilletImage} alt="Finger Millet" />
              <h3>Finger millet</h3>
            </a>
          </div>
          <div className={styles.card}>
            <a href="#section4">
              <img src={foxtailMilletImage} alt="Foxtail Millet" />
              <h3>Foxtail millet</h3>
            </a>
          </div>
          <div className={styles.card}>
            <a href="#section5">
              <img src={barnyardMilletImage} alt="Barnyard Millet" />
              <h3>Barnyard millet</h3>
            </a>
          </div>
          <div className={styles.card}>
            <a href="#section6">
              <img src={kodoMilletImage} alt="Kodo Millet" />
              <h3>Kodo millet</h3>
            </a>
          </div>
          <div className={styles.card}>
            <a href="#section7">
              <img src={littleMilletImage} alt="Little Millet" />
              <h3>Little millet</h3>
            </a>
          </div>
          <div className={styles.card}>
            <a href="#section8">
              <img src={prosoMilletImage} alt="Proso Millet" />
              <h3>Proso Millet</h3>
            </a>
          </div>
        </div>

        <section className={styles.card_container} style={{ paddingTop: '80px' }}>
          <div id="section1">
            <h2>
              <span>Sorghum</span>
            </h2>
            <p>
              In semi-arid regions, sorghum serves as a crucial crop for resource-constrained,
              small-scale farmers. During the rainy season (kharif), sorghum grain is utilized for both
              human and animal consumption, while the post-rainy season (rabi) yield is primarily
              dedicated to human food in India. This dual-purpose nature makes sorghum essential for
              sustaining both people and livestock. Globally, sorghum, also referred to as Jowar,
              ranks fifth among cereal crops in terms of production and cultivated area, following rice,
              wheat, maize, and barley. In India, sorghum grains are predominantly used for human
              consumption, with the post-harvest stover serving as valuable, nutrient-rich fodder for
              animals.
            </p>
          </div>
          <div id="section2">
            <h2>
              <span>Pearl millet</span>
            </h2>
            <p>
              Pearl millet [Pennisetum glaucum (L.) R. Br.] is a widely cultivated, drought-tolerant
              warm-season cereal that flourishes in some of the most challenging semi-arid tropical
              environments across South Asia and sub-Saharan Africa. It serves as both a food source
              for humans and feed for livestock. Globally, pearl millet is the sixth most significant
              cereal crop, following maize, rice, wheat, barley, and sorghum. In India, it ranks as the
              fourth most extensively cultivated food crop after rice, wheat, and maize, thriving in
              harsh agro-climatic conditions where other crops like sorghum and maize struggle to
              produce economically viable yields. Pearl millet grains are notable for their high protein
              content, well-balanced amino acid profile, and elevated levels of iron, zinc, and
              insoluble dietary fiber.
            </p>
          </div>

          <div id="section3">
            <h2>
              <span>Finger millet</span>
            </h2>
            <p>
              Finger millet, commonly known as ragi, is a primary food staple for rural populations in
              Southern India and East & Central Africa. This versatile crop can be grown across a wide
              range of environments, from sea level to the Himalayan highlands, but thrives best in
              well-drained, loamy soils. Karnataka state accounts for approximately 60% of India's
              finger millet production, which represents about 34% of global output. The plant is
              characterized by its short stature, high tillering capacity, and distinctive finger-like
              terminal inflorescences. Adapted to relatively stable rainfall patterns, finger millet
              possesses an extensive but shallow root system. Its grain is highly nutritious and
              exhibits excellent malting properties.
            </p>
          </div>

          <div id="section4">
            <h2>
              <span>Foxtail millet</span>
            </h2>
            <p>
              Foxtail millet, the third most significant millet crop, is cultivated for food in
              semi-arid tropical Asia and as forage in Europe, North America, Australia, and North
              Africa. Also known as Italian millet, this crop may have untapped potential for grain
              production. Its seeds are produced in a spike-like, compressed panicle resembling yellow
              foxtail, green foxtail, or giant foxtail. Drought-resistant and capable of growing at
              elevations up to 600 feet, foxtail millet is often planted as an alternative to sorghum
              on black cotton soils during periods of insufficient rainfall. This adaptable crop also
              thrives in loamy, alluvial, and clayey soil types.
            </p>
          </div>

          <div id="section5">
            <h2>
              <span>Barnyard millet</span>
            </h2>
            <p>
              Barnyard millet is primarily grown in India, China, Japan, and Korea for both human
              consumption and animal feed. The Japanese and Indian varieties of this millet are robust
              and adaptable to diverse soil and moisture conditions. In India, it is cultivated for
              grain and fodder, particularly in the mountainous regions of Uttarakhand. It is also
              grown in Eastern Asia, parts of Africa, and the Eastern United States, where it serves as
              a valuable forage crop. Barnyard millet thrives on marginal lands where other crops,
              including rice, struggle to grow.
            </p>
          </div>

          <div id="section6">
            <h2>
              <span>Kodo millet</span>
            </h2>
            <p>
              Kodo millet originated in the tropical and subtropical regions of South America and was
              domesticated in India approximately 3,000 years ago. It is widely cultivated throughout
              India, often on the most impoverished soils, but is rarely grown elsewhere. Traditionally,
              kodo millet has a longer growth cycle, requiring four to six months to mature, compared
              to the two to four months needed for other millet varieties. However, recently developed
              varieties have shorter growth periods.
            </p>
          </div>

          <div id="section7">
            <h2>
              <span>Little millet</span>
            </h2>
            <p>
              Little millet was first domesticated in India's Eastern Ghats and became a significant
              part of the diet among tribal communities before spreading to Sri Lanka, Nepal, and
              Myanmar. It shares similarities with proso millet but is generally smaller in stature,
              with more compact panicles and seeds. Little millet is typically grown on a small scale,
              often with minimal care on poor-quality land. It is characterized by its quick maturation
              and ability to withstand both drought and waterlogging.
            </p>
          </div>

          <div id="section8">
            <h2>
              <span>Proso millet</span>
            </h2>
            <p>
              Proso millet, also known as common or broom corn millet, is a fast-growing crop that
              thrives in arid regions across Asia, Africa, Europe, Australia, and North America. This
              versatile plant adapts well to various soil types and climates, requiring minimal moisture
              and facing no significant disease threats. Its drought-resistant nature makes it
              particularly valuable in areas with limited water resources and extended dry periods.
              Proso millet reaches maturity rapidly, typically within 60 to 75 days after planting,
              making it the quickest-maturing among all millet varieties. The plant's distinctive
              feature is its compact panicle that bends at the top, resembling an old broom, which
              inspired its alternative name.
            </p>
          </div>
        </section>

        <div className={styles['table-container']}>
        <h2 className={styles['text-center']}>
             Sample Millet-Based Food Diet
         </h2>
          <table>
            <thead>
              <tr>
                <th>Meal</th>
                <th>Millet-Based Dish</th>
                <th>Benefits</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Breakfast</td>
                <td>Millet Porridge with Fruits</td>
                <td>Rich in fiber and energy</td>
                <td>250</td>
              </tr>
              <tr>
                <td>Lunch</td>
                <td>Millet Salad</td>
                <td>Low glycemic index</td>
                <td>350</td>
              </tr>
              <tr>
                <td>Snacks</td>
                <td>Millet Energy Bars</td>
                <td>High in protein</td>
                <td>150</td>
              </tr>
              <tr>
                <td>Dinner</td>
                <td>Millet Stir-Fry</td>
                <td>Supports digestion</td>
                <td>200</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="footer" dangerouslySetInnerHTML={{ __html: footerContent }} />
    </div>
  );
};

export default MilletsPage;