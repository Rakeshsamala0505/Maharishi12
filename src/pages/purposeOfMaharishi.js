import React from "react";
import styles from "../styles/purposeOfMaharishi.module.css"; // ✅ Importing as CSS Module
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap for utility classes

const PurposeOfMaharishi = () => {
  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.text_content}>
        <div className={styles.container__content}></div>
        <h1 className={`fs-3 fs-md-1 text-start ms-1 ms-md-1 ${styles.title}`}>
          Purpose of Maharishi
        </h1>
        <p className={styles["text-content"]}>
          MAHARISHI (Millets And Other Ancient Grains International Research Initiative), launched during the MACS G20, aims to strengthen international research collaboration on climate-resilient and nutritious grains, including millets and other underutilized ancient grains. It seeks to:
Enhance knowledge sharing among researchers and institutions; Through MAHARISHI, we avoid duplication of efforts and aspires to advance sustainable food systems and nutritional security globally. Identify research gaps and priorities;
Promote open-access publication of research findings;</p>
        <p className={styles["text-content"]}>
          Support voluntary knowledge transfer, capacity-building activities, and global research events;
Encourage scientific engagement through innovation awards and recognition.
        </p>
        
        <h1 className={`fs-3 fs-md-2 text-start ${styles.title}`}>Background</h1>
        <p className={styles["text-content"]}>
           Millets are small seeded, hardy grass species which include sorghum, pearl millet, finger millet, foxtail millet, proso millet, kodo millet, little millet, barnyard millet, and brown-top millet. Apart from these there are other ancient grains that are consumed as food which include teff, fonio, sekia, job’s tears, buckwheat, amaranth, quinoa etc. Since, beginning from early settlers to the thriving civilisations, human was dependent on millets and ancient crops for food and nutrition. Till green revolution, globally major part of the food demand was met by cultivating millets and other ancient crops viz. pearl millet, sorghum, finger millet, foxtail millet, proso millet, barnyard millet, kodo millet, brown-top millet, jobs tears, teff, fonio, sekia, amaranth etc. These crops have the potential to address the challenges of climate change, depleting natural resources and increasing life-style disorders. MAHARISHI is intended to revive these crops keeping the interest of small and resource poor farmers and other stake-holders worldwide. Its inception marks a global platform for innovation and collaboration in millets and other ancient crops.
This initiative was proposed in G20 MACS meeting in April 2023 in India and endorsed by G20 MACS participants to contribute to improving world food and nutritional security through bringing millets in global consumer’s diet.
        </p>
        <h1 className={`fs-3 fs-md-2 text-start ${styles.title}`}>Why Millets?</h1>
        <p className={styles["text-content"]}>
         Millets are the most versatile crops which can be grown in diverse agroclimatic condition. 
          These crops have wide adaptation and most suited for the current agrarian vulnerabilities viz. 
          climate change, drought, depleting natural resources, rise in CO2 and temperature etc. 
          Paleo-botanical studies revealed that millets and other ancient crops were the first choice of the early human settlers worldwide. 
          Most of the millets and the ancient grain crops are C4, which means they have better water, nutrient and radiation use efficiency. 
          They are also resilient to abiotic stress and resistance to pest and diseases. 
          These crops are mainly grown in arid and semi-arid regions of the world. Most of the resource poor farmers or tribes grow minor millets for food and livelihood security.
          Millets in general are crucial to the world food economy, they contribute to food security in many of the world's poorest, most food-insecure regions. As per the UN Food 
          and Agriculture Organization’s data millets can be a sustainable alternative to rice and wheat, as a staple food.
           It can also help in providing food security to large population in the coming years. 
           In Africa and Asia, more than 70% of the sorghum and cumulatively, 95% of the millets are consumed as food. 
           A large proportion of farm households aim simply to produce enough grain to meet household requirements - and many often fail to meet even this limited goal. 
           Only a small proportion of the harvest is traded, mostly on local food markets.Since, the beginning of systematic research in these crops, 
           considerable progress is made in enhancing yield and other agronomic traits in sorghum and pearl millet. However, 
           these efforts are sporadic and unmatched to the progress made globally in the major cereals viz. wheat, rice, and maize. 
           Millets and ancient crops remained unexplored and neglected.Since, the beginning of systematic research in these crops,
            considerable progress is made in enhancing yield and other agronomic traits in sorghum and pearl millet. However, 
            these efforts are sporadic and unmatched to the progress made globally in the major cereals viz. wheat, rice, and maize. 
            Millets and ancient crops remained unexplored and neglected. Millet cultivation and consumption has many advantages 
            which can be summarized as ‘good for people, good farmer and good for earth’. 
        </p>
      </div>
    </div>
  );
};

export default PurposeOfMaharishi;
