import React from 'react';
import styles from '../styles/ExpertWorkingGroup.module.css'; // adjust if needed

const ExpertWorkingGroup = () => {
  return (
    <div className={styles.expertWrapper}>

      {/* Sanskrit Quote Section */}
      <section className={styles.quoteSection}>
        <h4>अयं निजः परो वेति गणना लघुचेतसाम्।</h4>
        <h5>उदारचरितानां तु वसुधैव कुटुम्बकम्॥</h5>
        <p>
          ‘This person is mine, and that one is another’s’ is the thinking of narrow-minded individuals.
          But for those with a noble heart, the whole world is a family.
          <br />
          
        </p>
      </section>

      {/* Title + Tagline */}
      <section className={styles.titleSection}>
        <h1>Expert Working Groups – Driving Global Research and Innovation</h1>
        <p className={styles.tagline}>
          Collaborating globally to unlock the potential of millets and ancient grains for a sustainable future.
        </p>
      </section>

      {/* Section 1: What Are Expert Working Groups? */}
      <section className={styles.section}>
        <h2>What Are Expert Working Groups?</h2>
        <p>
          The Expert Working Groups (EWGs) are the backbone of the MAHARISHI initiative, bringing together
          leading scientists, researchers, breeders, policymakers, and industry experts from around the world.
          These groups are dedicated to addressing the most pressing challenges in the development, adoption,
          and utilization of millets and ancient grains.
        </p>
        <ul>
          <li><strong>Connect Researchers:</strong> Facilitate collaboration among global institutions to share findings.</li>
          <li><strong>Identify Gaps:</strong> Pinpoint critical research needs and challenges.</li>
          <li><strong>Drive Innovation:</strong> Develop breeding techniques and sustainable practices.</li>
          <li><strong>Promote Advocacy:</strong> Raise awareness of nutritional and environmental benefits.</li>
        </ul>
        <blockquote>
          “For those with a noble character, the whole world is a family. Our EWGs embody this spirit,
          uniting global expertise to ensure millets and ancient grains nourish the planet sustainably.”
        </blockquote>
      </section>

      {/* Section 2: Structure and Focus Areas */}
      <section className={styles.section}>
        <h2>Structure and Focus Areas</h2>
        <p>
          EWGs are organized into crop-specific and thematic categories. Each group is composed of
          multidisciplinary experts collaborating on global research priorities.
        </p>
        <h4>Crop-Specific EWGs:</h4>
        <ul>
          <li><strong>Sorghum EWG:</strong> Genetic diversity, yield, drought tolerance, Striga resistance, shoot-fly resistance.</li>
          <li><strong>Pearl Millet EWG:</strong> Yield, downy mildew resistance, micronutrients, hybrid development.</li>
          <li><strong>Small Millets EWG:</strong> Finger millet, foxtail millet, proso millet, hybrid breeding, biofortification.</li>
          <li><strong>Ancient Grains EWG:</strong> Teff, fonio, quinoa, amaranth – germplasm hubs, nutritional profiling.</li>
        </ul>
        <h4>Thematic EWGs:</h4>
        <ul>
          <li><strong>Breeding and Genomics</strong></li>
          <li><strong>Agronomy and Sustainability</strong></li>
          <li><strong>Nutrition and Value Addition</strong></li>
          <li><strong>Policy and Advocacy</strong></li>
        </ul>
      </section>

      {/* Section 3: Who’s Involved? */}
      <section className={styles.section}>
        <h2>Who’s Involved?</h2>
        <p>
          EWGs bring together experts from academia, industry, and farming communities. Our network includes:
        </p>
        <ul>
          <li><strong>Plant Breeders & Geneticists</strong></li>
          <li><strong>Agronomists</strong></li>
          <li><strong>Nutritionists</strong></li>
          <li><strong>Policy Experts</strong></li>
          <li><strong>Young Scientists</strong></li>
        </ul>
        <p>
          Are you a researcher, farmer, or professional passionate about millets and ancient grains?
          <a href="/get-involved"> Join our global network.</a>
        </p>
      </section>

      {/* Section 4: Achievements and Impact */}
      <section className={styles.section}>
        <h2>Achievements and Impact</h2>
        <p>EWGs have already delivered key breakthroughs, including:</p>
        <ul>
          <li><strong>Research:</strong> Drought-tolerant sorghum, biofortified finger millet.</li>
          <li><strong>Global Collaboration:</strong> Shared genomic databases and germplasm hubs.</li>
          <li><strong>Capacity Building:</strong> Training programs on gene editing and phenotyping.</li>
          <li><strong>Policy Advocacy:</strong> Influencing national policy in favor of millet cultivation.</li>
        </ul>
        <p><em>Case Study:</em> The Pearl Millet EWG developed a downy mildew-resistant hybrid boosting yields by 20% in India.</p>
      </section>

      {/* Section 5: Get Involved */}
      <section className={styles.section}>
        <h2>Get Involved</h2>
        <p>
          The success of MAHARISHI depends on global collaboration. Here’s how you can contribute:
        </p>
        <ul>
          <li><strong>Researchers:</strong> Join an EWG or propose new projects.</li>
          <li><strong>Farmers:</strong> Partner with us to test new varieties.</li>
          <li><strong>Industry:</strong> Collaborate on value-added products.</li>
          <li><strong>Students:</strong> Apply for research grants and internships.</li>
        </ul>
        <p>
          <a href="/contact">Contact us</a> | <a href="/newsletter">Sign up for our newsletter</a> | <a href="/resources">Access shared resources</a>
        </p>
      </section>
    </div>
  );
};

export default ExpertWorkingGroup;
