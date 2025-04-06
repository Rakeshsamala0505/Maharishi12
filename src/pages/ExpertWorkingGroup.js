import React from 'react';
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from '../styles/ExpertWorkingGroup.module.css'; // adjust path if needed

const ExpertWorkingGroup = () => {
  return (
    <div className={styles.expertWrapper}> {/* Changed to expertWrapper */}
      {/* Sanskrit Quote Section */}
      <section className={styles.quoteSection}>
        <h4>अयं निजः परो वेति गणना लघुचेतसाम्।</h4>
        <h5>उदारचरितानां तु वसुधैव कुटुम्बकम्॥</h5>
        <p>
          ‘This person is mine, and that one is another’s’ is the thinking of narrow-minded individuals.
          But for those with a noble heart, the whole world is a family.
          <br />
          <span className={styles.quoteRef}>
            (Maha Upanishad, Chapter 6, Verse 71)
          </span>
        </p>
      </section>

      {/* Title Section */}
      <section className={styles.titleSection}>
        <h1>MAHARISHI</h1>
        <p className={styles.tagline}>
          <strong>M</strong>illet <strong>And</strong> <strong>Ot</strong>Her <strong>A</strong>ncient <strong>R</strong>ains <strong>I</strong>nternational <strong>Re</strong>searc<strong>H</strong> <strong>I</strong>nitiative
        </p>
        <p className={styles.subtext}>A Global Initiative</p>
      </section>

      {/* Accordion Content */}
      <section className={styles.accordionWrapper}>
        <Accordion defaultActiveKey="0" alwaysOpen flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Purpose of the MAHARISHI</Accordion.Header>
            <Accordion.Body>
              Millets are small-seeded, hardy grasses such as sorghum, pearl millet, and finger millet.
              They are highly nutritious and environmentally resilient, offering a sustainable solution
              for food security amid climate change. MAHARISHI aims to revive these crops through global
              collaborative research and innovation.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Background</Accordion.Header>
            <Accordion.Body>
              Historically, millets were dietary staples before the green revolution shifted focus to
              wheat and rice. MAHARISHI, endorsed during the G20 MACS 2023, establishes a structured
              framework to integrate these grains back into mainstream food systems while addressing
              global sustainability challenges.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Why Millets?</Accordion.Header>
            <Accordion.Body>
              Millets grow well in arid and resource-poor regions. They require minimal inputs, are
              climate-resilient, and possess high nutritional value. Once known as “lesser grains”,
              their market is expected to reach $12 billion by 2025, demonstrating growing global interest.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Impact of Climate Change</Accordion.Header>
            <Accordion.Body>
              Millets thrive under elevated CO₂ levels and higher temperatures. With their shorter crop
              cycles and low water demands, they support organic and intercropping systems, contributing
              to enhanced soil health and reduced environmental impact.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>Underutilized Grains as Climate Smart Crops</Accordion.Header>
            <Accordion.Body>
              While wheat, rice, and maize dominate global food systems, underutilized grains like
              millets offer an opportunity to diversify agriculture, strengthen food system resilience,
              and ensure nutritional and environmental security across diverse ecosystems.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </div>
  );
};

export default ExpertWorkingGroup;