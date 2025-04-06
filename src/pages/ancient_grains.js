import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/ancient_grains.module.css'; // Import as 'styles'

// Import images
import sorghumImage from '../assets/images/oatsimage.avif';
import pearlMilletImage from '../assets/images/quinoa.avif';
import fingerMilletImage from '../assets/images/ancientwheat.avif';
import foxtailMilletImage from '../assets/images/FONIO DEHULLED.avif';
import barnyardMilletImage from '../assets/images/jobstearspoon.avif';
import kodoMilletImage from '../assets/images/teff-grains.avif';
import littleMilletImage from '../assets/images/chiaseeds.avif';
import prosoMilletImage from '../assets/images/buckwheatseed.avif';

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
        <h1 className={styles['millets-title']}>ANCIENT GRAINS</h1>
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
              <span>Oats</span>
            </h2>
            <p>
            Oat (Avena sativa L.) is unique among cereal crops due to its wide range of nutrients that are
        valuable for human food, animal feed, healthcare, and cosmetics. This annual crop has been
        cultivated for over 2,000 years in various parts of the world, making it one of the oldest crops
        known to human civilization. Oats are an important source of carbohydrates, soluble dietary
        fiber, balanced protein, lipids, vitamins, minerals, and various phenolic compounds. The
        nutritional composition of oats is distinct from other cereals, featuring a high protein content
        and a rich supply of essential amino acids. The high nutritional value of oats is also attributed
        to their significant β-glucan content.
            </p>
          </div>
          <div id="section2">
            <h2>
              <span>Quinoa</span>
            </h2>
            <p>
            Quinoa (Chenopodium quinoa Wild.) is a pseudocereal that has been grown and consumed as
      a staple food in Southern America for centuries, playing a key role in food self-sufficiency in
      various regions. This crop has gained significant attention due to its impressive nutritional
      profile and its ability to withstand frost, drought, and salinity. Quinoa thrives in poor soils and
      is an excellent ingredient in creating highly nutritious foods, thanks to its rich content of
      minerals, vitamins, and lysine (an essential amino acid). Furthermore, its nutraceutical
      benefits make it a great choice for functional foods designed to reduce the risk of various
      cardiovascular diseases.
            </p>
          </div>

          <div id="section3">
            <h2>
              <span>Ancient wheat</span>
            </h2>
            <p>
            The ancient cultivated wheat varieties, including einkorn, emmer, and spelt, originated in the
      Fertile Crescent, a region in the Middle East that covers modern-day Jordan, Palestine,
      
      Lebanon, Syria, Turkey, Iraq, and Iran. Ancient wheat is generally considered to include
      einkorn, emmer, khorasan, and spelt. Spelt wheat (Triticum spelta) is one of these ancient
      wheat species and is known to potentially contain higher levels of protein, soluble dietary
      fiber, and minerals compared to common bread wheat (Triticum aestivum). Studies have
      shown that the crude fat content in einkorn, emmer, and spelt is significantly higher (p &lt;
      0.05) compared to whole wheat flour made from hard red spring wheat. Spelt is hexaploid
      (Triticum spelta), emmer (Triticum turgidum) and
            </p>
          </div>

          <div id="section4">
            <h2>
              <span>Fonio</span>
            </h2>
            <p>
            Fonio is known by various names depending on the local languages of the regions where it’s
      grown, such as acha, afio, fonio, fundi millet, foni, fundi, hungry rice, hungry millet, and
      hungry koos. The grain is highly nutritious, with a strong protein profile. The white variety,
      known as ‘acha’ or ‘hungry rice’ (Digitaria exilis Staph), and the black variety, called ‘iburu’
      (Digitaria iburua), both have significant nutritional benefits. Fonio has a short growing cycle
      and thrives in harsh environments, making it a popular choice for farmers, especially because
      of its drought resistance. The cereal is known for its excellent culinary and nutritional
      qualities, and its proteins are especially rich in methionine, an essential amino acid not
      commonly found in other cereals.
            </p>
          </div>

          <div id="section5">
            <h2>
              <span>Job&#39;s tears</span>
            </h2>
            <p>
            The annual millet Coix lacryma-Jobi L., commonly known as adlay, coix, Job&#39;s tears, or
      Chinese pearl barley, is a grass in the Poaceae family. It is cultivated as a grain in East Asia,
      India, and much of Southeast Asia. The plant is most widely recognized by the name Job&#39;s
      tears, which comes from the tear-shaped fruit, believed to symbolize the tears and suffering
      of Job from the Old Testament. The fruits of this plant are often used to make rosary beads.
      Coix seeds are known for their potent chemical properties that help scavenge cellular
      oxidants. Additionally, these seeds are rich in minerals such as phosphorus, potassium,
      magnesium, sulfur, and selenium, as well as vitamin E (including γ-tocopherol and γ-
      tocotrienol) and carotenoids like β-carotene.
            </p>
          </div>

          <div id="section6">
            <h2>
              <span>Teff</span>
            </h2>
            <p>
            Teff (Eragrostis tef) is an ancient, small grain known for its high nutritional value,
      particularly its protein content. It is also referred to as Williums love grass, teffa, and annual
      bunch grass. This versatile grain can grow in a variety of conditions, including those where
      other cereals might not thrive. Teff is mainly found in the highlands of Ethiopia and Eritrea,
      thriving at elevations of up to 2700 meters. It is resilient, growing well in both waterlogged
      soils and dry conditions, making it a reliable crop in diverse climates. In Ethiopia, teff is
      cultivated across more than 2 million hectares of land.
            </p>
          </div>

          <div id="section7">
            <h2>
              <span>Chia</span>
            </h2>
            <p>
            Chia (Salvia hispanica L.) is an herbaceous plant in the Lamiales order and the Lamiaceae
      family. Native to northern Guatemala and southern Mexico, the chia plant is now grown in
      countries such as Australia, Bolivia, Colombia, Guatemala, Peru, Argentina, and Mexico,
      which is the largest producer globally. The health benefits of chia seeds are largely due to
      their rich chemical composition, particularly their high content of essential fatty acids
      (EFAs), essential amino acids, polyphenols, vitamins, and bioelements. Chia seeds are also
      known for their high protein concentration.
            </p>
          </div>

          <div id="section8">
            <h2>
              <span>Buckwheat</span>
            </h2>
            <p>
            Buckwheat (Fagopyrum esculentum) is a vital green manure crop and a semi-succulent dicot
      plant belonging to the Fagopyrum genus and the Polygonaceae family. Its name derives from
      these classifications. Originating in China, buckwheat has spread extensively throughout
      Eurasia. This crop is known for its high-quality protein and starch content. Additionally, it is
      rich in fiber, minerals, vitamins, and flavonoids, which offer various health benefits. In India,
      buckwheat is called &quot;kuttu ka atta&quot; and is commonly consumed during Navratri. It is a gluten-
      free flour used to make dishes like parathas and pakodas.ct panicle that bends at the top,
        resembling an old broom, which inspired its alternative name.
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
                <td>Oats Porridge</td>
                <td>Rich in fiber, good for digestion</td>
                <td>250</td>
              </tr>
              <tr>
                <td>Lunch</td>
                <td>Quinoa Salad</td>
                <td>High in protein, gluten-free</td>
                <td>350</td>
              </tr>
              <tr>
                <td>Snacks</td>
                <td>Chia Pudding</td>
                <td>Rich in omega-3 fatty acids</td>
                <td>150</td>
              </tr>
              <tr>
                <td>Dinner</td>
                <td>Fonio Stir-Fry</td>
                <td>Supports bone health</td>
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