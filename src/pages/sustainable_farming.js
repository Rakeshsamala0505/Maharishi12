import React from 'react';
import styles from '../styles/sustainable_farming.module.css'; // Assuming you are using CSS Modules
import 'bootstrap/dist/css/bootstrap.min.css'; // If you need Bootstrap styles
import sustainableImage from '../assets/images/sustainable_millets_images1.avif'; // Adjust path as needed

const SustainableAgriculturePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
          <h3>Sustainable Agriculture</h3>
        <ul>
          <li>
            <a href="#Millets-and-Sustainable-Agriculture"> ➤ &nbsp;Millets and Sustainable Agriculture</a>
          </li>
          <li>
            <a href="#Millets-for-Healthy-Ecosystems">➤ &nbsp; Millets for Healthy Ecosystems</a>
          </li>
          <li>
            <a href="#Millets-Thrive-in-Poor-Soils"> ➤ &nbsp;Millets Thrive in Poor Soils</a>
          </li>
          <li>
            <a href="#Millets-and-Reduced-Dependency-on-Agrochemicals">
              ➤ &nbsp;Millets and Reduced Dependency on Agrochemicals
            </a>
          </li>
          <li>
            <a href="#Millets-a-Climate-Resilient-Crop"> ➤ &nbsp;Millets a Climate-Resilient Crop</a>
          </li>
          <li>
            <a href="#Millets-Intercropping"> ➤ &nbsp;Millets in Crop Rotation and Intercropping</a>
          </li>
          <li>
            <a href="#Environmental-Cultivation"> ➤ &nbsp;Environmental Benefits of Millet Cultivation</a>
          </li>
          <li>
            <a href="#Preserving-Biodiversity"> ➤ &nbsp;Preserving Biodiversity</a>
          </li>
          <li>
            <a href="#Adapting-Changes"> ➤ &nbsp;Adapting to Climate Change</a>
          </li>
        </ul>
      </div>
      <img
        src={sustainableImage}
        alt="Sustainable Millets"
        className={styles['sustainable-image']}
      />
      <div className={styles.content}>
        <div id="sustainable" className={styles['content-section']}>
          <h2>Millets for Sustainable Agriculture</h2>
          <p>
            Millets are a crucial solution to the ongoing environmental crisis caused by human activities.
            These ancient grains are not only rich in nutrients but also highly sustainable, requiring fewer
            resources to grow compared to other crops. Shifting towards millet-based agricultural systems
            can significantly reduce input costs, conserve our dwindling water resources, protect eroding
            soils, and enhance the resilience of our farming practices to climate change.
          </p>
        </div>

        <div id="Millets-and-Sustainable-Agriculture" className={styles['content-section']}>
          <h3>Millets and Sustainable Agriculture</h3>
          <p>
            Millets play a key role in promoting sustainable agriculture, a system that emphasizes maintaining
            soil health, ecological balance, and human well-being. Sustainable agriculture focuses on
            principles of health, ecology, fairness, and care, aiming to cultivate land and grow crops in
            ways that foster long-term soil vitality and overall environmental health.
          </p>
          <p>
            Millets are regarded as eco-friendly crops because they need minimal water and fertilizer and
            can grow in nutrient-poor soils. Incorporating millets into agricultural systems can promote
            sustainability by conserving water and reducing greenhouse gas emissions. Declaring an
            International Year of Millets could help raise awareness about the significance of sustainable
            farming practices and encourage broader use of these crops.
          </p>
        </div>

        <div id="Millets-for-Healthy-Ecosystems" className={styles['content-section']}>
          <h3>Millets for Healthy Ecosystems</h3>
          <p>
            Millets are highly adaptable and can grow in a wide variety of ecological conditions. They are
            particularly well-suited to regions with shallow, poor-quality soils, often thriving in areas with
            less than 15 cm of soil depth. These grains offer exceptional nutritional benefits, which makes
            them especially important for disadvantaged communities and agricultural workers. Additionally,
            in mixed farming systems, millets serve as both food and fodder, providing economic benefits to
            farmers.
          </p>
        </div>

        <div id="Millets-Thrive-in-Poor-Soils" className={styles['content-section']}>
          <h3>Millets Thrive in Poor Soils</h3>
          <p>
            Many varieties of millets are capable of flourishing in low-fertility soils, with some even able
            to tolerate acidic or saline conditions. Their resilience is demonstrated by their ability to
            thrive in arid regions, such as the Deccan and Rajasthan, where rainfall is scarce (often under
            500 mm annually), and soils tend to be sandy and acidic. This adaptability allows millets to
            provide vital sustenance for both people and livestock in some of the most challenging
            environments.
          </p>
        </div>

        <div id="Millets-and-Reduced-Dependency-on-Agrochemicals" className={styles['content-section']}>
          <h3>Millets and Reduced Dependency on Agrochemicals</h3>
          <p>It helps align various initiatives effectively. This avoids duplication and promotes synergy.</p>
        </div>

        <div id="Millets-a-Climate-Resilient-Crop" className={styles['content-section']}>
          <h3>Millets a Climate-Resilient Crop</h3>
          <p>
            Millets are increasingly recognized as a potential solution to the global climate crisis. Studies
            have shown that they can help reduce atmospheric CO2 levels, playing a significant role in
            mitigating climate change. While crops like wheat and rice focus primarily on food security,
            millets offer additional benefits—providing food, fodder, health benefits, livelihoods, and
            ecological advantages. This makes them a key component of agricultural security in the face of
            a changing climate.
          </p>
        </div>

        <div id="Millets-Intercropping" className={styles['content-section']}>
          <h3>Millets in Crop Rotation and Intercropping</h3>
          <p>It helps align various initiatives effectively. This avoids duplication and promotes synergy.</p>
        </div>

        <div id="Environmental-Cultivation" className={styles['content-section']}>
          <h3>Environmental Benefits of Millet Cultivation</h3>
          <h4>Reducing Carbon Footprint and Greenhouse Gas Emissions</h4>
          <p>
            Millet cultivation has notable environmental benefits, including reducing the carbon footprint and
            lowering greenhouse gas (GHG) emissions. Compared to high-input crops like rice and wheat,
            millets require fewer chemical fertilizers and pesticides, leading to lower emissions of nitrous
            oxide, a potent greenhouse gas associated with fertilizer use. Millets are typically grown in
            rainfed conditions, meaning they use less water and energy for irrigation, further reducing
            their environmental impact. Additionally, practices like crop rotation and intercropping promote
            soil carbon sequestration. The deep-rooting nature of millets helps store carbon in the soil,
            contributing to climate change mitigation by removing CO2 from the atmosphere.
          </p>
        </div>

        <div id="Preserving-Biodiversity" className={styles['content-section']}>
          <h3>Preserving Biodiversity</h3>
          <p>
            Millet cultivation supports biodiversity, an essential aspect of environmental sustainability.
            Traditional farming systems that include millets are often more diverse, supporting a range of
            crops and fostering a habitat for various flora and fauna. This biodiversity is critical for
            maintaining ecological balance and enhancing the resilience of agricultural systems. A diverse
            range of crops reduces vulnerability to pests and diseases and supports beneficial organisms,
            such as pollinators and natural predators of pests. Furthermore, the genetic diversity among
            millet varieties offers valuable resources for adapting to changing environmental conditions and
            mitigating risks of crop failures due to pests or diseases.
          </p>
        </div>

        <div id="Adapting-Changes" className={styles['content-section']}>
          <h3>Adapting to Climate Change</h3>
          <p>
            Millets are particularly well-suited for climate change adaptation. Their inherent resilience to
            drought, low-fertility soils, and extreme weather conditions makes them ideal for regions affected
            by climate variability. By promoting millet cultivation, farming systems can become more
            adaptable to climate change, ensuring food security in the face of environmental
            unpredictability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SustainableAgriculturePage;