import React, { useRef, useState, useEffect } from 'react'; // update this line if not already
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/aboutmaharishi.module.css';

const PurposeOfMaharishi = () => {
  const animationRef = useRef(null);
  const [cardsInView, setCardsInView] = useState(false);
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !cardsInView) {
          setCardsInView(true);
          observer.disconnect(); // 🔥 Stop observing after first trigger
        }
      },
      { threshold: 0.5 }
    );

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    return () => observer.disconnect(); // Clean up observer
  }, [cardsInView]);

  return (
    <>
      {/* Section 1: Purpose of Maharishi  */}
      <section className={`py-5 ${styles.sectionBackground}`}>
        <div className={styles.purposeContainer}>
          {/* Block 1 */}
          <div className="row">
            <div className="col-md-4">
              <h2 className={styles.sectionHeading}>About Maharishi</h2>
            </div>
            <div className="col-md-8">
              <p>
                <h1 className={styles.HeadingTitle}>Behind MAHARISHI - Lies a Shared Global Vision</h1>
                Global food security faces mounting threats from COVID-19, conflicts, and climate change. Millets and other ancient grains offer a sustainable solution whether it is climate-resilient, nutrient-rich, and resource-efficient, they can strengthen food systems, support smallholder farmers, and promote health and environmental sustainability.
              </p>
              <p>
                The MAHARISHI initiative, launched under India's G20 Presidency as part of the G20 MACS Global Research Collaboration Priority, promotes international research on these underutilized grains. Building on the momentum of the International Year of Millets 2023, it unites fragmented efforts under a shared framework to advance global food and nutrition security.
              </p>
              
            </div>
          </div>
           {/* Block 2 */}
    
          <div className="row">
            <div className="col-md-4">
              <h2 className={styles.sectionHeading}>WHAT WE AIM FOR</h2>
            </div>
            <div className="col-md-8">
              <p>
                MAHARISHI aims to coordinate international research on millets and ancient grains to strengthen global food and nutrition security. By optimizing and pooling resources, the initiative seeks to enhance economic efficiency and add value to ongoing national and international efforts both public and private. We foster cross-country linkages to accelerate advancements in research and development, ensuring these climate-resilient crops contribute to sustainable agriculture. Our focus is on building scientific competence to meet evolving environmental challenges while responding to the growing demand for nutritious, safe, and resilient food systems.
              </p>
             
            </div>
          </div>
        </div>
      </section>
      <section
          className={`${styles.animatedCardsSection} ${cardsInView ? styles.reveal : ''}`}
          ref={animationRef}
        >
          <div className={`${styles.animatedCard} ${styles.card1}`}>
            <div className={`${styles.overlay} ${styles.leftOverlay}`}></div>
            <div className={styles.cardContent}>
              <h2>Vision</h2>
              <p>
                 To cultivate a globally connected and forward-looking research ecosystem that 
                 unlocks the full potential of millets and ancient grains through collaborative 
                 knowledge exchange, innovation, and inclusive partnerships ensuring sustainable
                 agriculture, resilient food systems, and healthier communities for generations to come.

        </p>
            </div>
          </div>

          <div className={`${styles.animatedCard} ${styles.card2}`}>
            <div className={`${styles.overlay} ${styles.rightOverlay}`}></div>
            <div className={styles.cardContent}>
              <h2>Mission</h2>
              <p>To establish robust mechanisms for connecting global researchers and institutions 
                working on millets and ancient grains, enabling effective knowledge exchange, 
                identification of research gaps, and dissemination of innovations. Through digital 
                platforms, collaborative workshops, open-access publications, and recognition of young scientists, 
                the initiative aims to accelerate research, build capacity, and raise awareness of the nutritional, 
                cultural, and climate-resilient value of these crops empowering smallholder farmers and advancing 
                sustainable food systems.</p>
            </div>
          </div>
      </section>

      <section className={`py-5 ${styles.section_2background}`}>
        <div className={styles.purposeContainer}>
          {/* Block 1 */}
          <div className="row">
            <div className="col-md-4">
              <h2 className={styles.sectionHeading}>WHY MILLETS AND ANCIENT GRAINS</h2>
            </div>
            <div className="col-md-8">
              <p>
                With global food security threatened by climate change, resource depletion, conflict, and rising population pressures, millets and other ancient grains offer a powerful solution grounded in sustainability, nutrition, and adaptability. Despite their immense potential, these crops have long been under-researched and underutilized, necessitating renewed scientific focus. These crops offer integrated solutions to climate, health, and food system challenges. Unlocking their full potential through coordinated international research can help deliver on global commitments to end hunger, improve nutrition, and promote sustainable agriculture.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.statsContainer}>
          {/* Top Stats Row */}
          <div className={styles.topStatsRow}>
            <div className={styles.statCard}>
              <h2 className={styles.statValue}>30%</h2>
              <p className={styles.statSubtitle}>Cuts in Crop Yields<br />due to Climate Change</p>
              <p className={styles.statSource}>IPCC 2023</p>
            </div>

            <div className={styles.statCard}>
              <h2 className={styles.statValue}>735</h2>
              <p className={styles.statSubtitle}>Million People<br />CHRONIC HUNGER</p>
              <p className={styles.statSource}>FAO SOFI REPORT 2023</p>
            </div>
          </div>

          {/* Bottom Two Cards */}
          <div className={styles.bottomInfoRow}>
            <div className={styles.infoCard}>
              <h3>Climate Resilience</h3>
              <p>
                Millets and ancient grains are climate-smart crops, especially vital in the face of intensifying climate change. As C4 plants, they exhibit exceptional water, nutrient, and radiation use efficiency, allowing them to thrive in arid and semi-arid conditions where other crops fail. Their resilience to heat, drought, and poor soils makes them indispensable for farmers in vulnerable regions grappling with erratic weather patterns and declining natural resources.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Food Security</h3>
              <p>
                In Asia and Africa, over 70% of sorghum and 95% of millets are consumed directly as food. Yet, many farm households still struggle to meet their own subsistence needs. These grains are vital for rural food and livelihood security, especially among resource-poor farmers and indigenous communities.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className={styles.statsSection}>
        <div className={styles.statsContainer}>
          {/* Top Stats Row */}
          <div className={styles.topStatsRow}>
            <div className={styles.statCard}>
              <h2 className={styles.statValue}>45</h2>
              <p className={styles.statSubtitle}>Million Children under 5<br />WASTING</p>
              <p className={styles.statSource}>UNICEF,  WHO,  WORLD BANK JOINT  ESTIMATES,  2023</p>
            </div>

            <div className={styles.statCard}>
              <h2 className={styles.statValue}>200%</h2>
              <p className={styles.statSubtitle}>Increase in<br />FERTILIZER PRICES</p>
              <p className={styles.statSource}>WORLD BANK, FAO</p>
            </div>
          </div>

          {/* Bottom Two Cards */}
          <div className={styles.bottomInfoRow}>
            <div className={styles.infoCard}>
              <h3>Nutrition </h3>
              <p>
                Millets and Ancient  grains are rich in essential nutrients, fiber, and bioactive compounds. They help manage lifestyle diseases such as diabetes and cardiovascular conditions-issues increasingly prevalent worldwide. Their role in combating malnutrition, especially in low-income and food-insecure populations, aligns directly with global health and nutrition targets under the UN Sustainable Development Goals (SDGs).
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Sustainability and Soil Health </h3>
              <p>
               Millets and ancient grains support low-input, eco-friendly agriculture. Their deep, fibrous roots improve soil structure and enhance nutrient cycling, making them ideal for organic farming and intercropping. Their cultivation reduces dependence on synthetic fertilizers and irrigation, lowering agriculture’s environmental footprint
              </p>
            </div>
          </div>
        </div>
      </section>
      

    </>
  );
};
  
export default PurposeOfMaharishi;
