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
          Millets are small seeded, hardy grass species which include sorghum,
          pearl millet, finger millet, foxtail millet, proso millet, kodo
          millet, little millet, barnyard millet, and brown-top millet. Apart
          from these, there are other ancient grains that are consumed as food
          which include teff, fonio, sekia, job’s tears, buckwheat, amaranth,
          quinoa etc.
        </p>
        <p className={styles["text-content"]}>
          Millets are small seeded, hardy grass species which include sorghum,
          pearl millet, finger millet, foxtail millet, proso millet, kodo
          millet, little millet, barnyard millet, and brown-top millet. Apart
          from these, there are other ancient grains that are consumed as food
          which include teff, fonio, sekia, job’s tears, buckwheat, amaranth,
          quinoa etc.
        </p>
        <p className={styles["text-content"]}>
          Millets are small seeded, hardy grass species which include sorghum,
          pearl millet, finger millet, foxtail millet, proso millet, kodo
          millet, little millet, barnyard millet, and brown-top millet. Apart
          from these, there are other ancient grains that are consumed as food
          which include teff, fonio, sekia, job’s tears, buckwheat, amaranth,
          quinoa etc.
        </p>
        <h1 className={`fs-3 fs-md-2 text-start ${styles.title}`}>Background</h1>
        <p className={styles["text-content"]}>
          Since early settlers to thriving civilizations, humans have depended
          on millets and ancient crops for food and nutrition.
        </p>
        <h1 className={`fs-3 fs-md-2 text-start ${styles.title}`}>Why Millets?</h1>
        <p className={styles["text-content"]}>
          Millets are the most versatile crops, grown in diverse agro-climatic
          conditions. These crops are crucial to the world food economy and
          contribute to food security in many food-insecure regions.
        </p>
      </div>
    </div>
  );
};

export default PurposeOfMaharishi;
