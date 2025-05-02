import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/nutrition_benefits.module.css'; // Ensure your CSS is in this file
import milletImage from '../assets/images/millet_nutitient_image1.avif'; // Import your millet image

const benefitData = [
  { icon: '/images/digestive_health_icon.png', text: 'Good for digestive health' },
  { icon: '/images/blood_sugar_icon.png', text: 'Helps blood sugar levels' },
  { icon: '/images/weight_management_icon.png', text: 'Good for weight management' },
  { icon: '/images/antioxidants_icon.png', text: 'Rich in antioxidants, calcium & magnesium' },
  { icon: '/images/gluten_free_icon.png', text: 'Gluten Free' },
  // Add more benefits as needed
];

const NutritionBenefits = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    const headings = document.querySelectorAll('.toggle-heading');
    headings.forEach((heading) => {
      heading.addEventListener('click', function () {
        const content = this.nextElementSibling;
        const allContents = document.querySelectorAll('.toggle-content');
        const allHeadings = document.querySelectorAll('.toggle-heading');

        allContents.forEach((c) => (c.style.display = 'none'));
        allHeadings.forEach((h) => h.classList.remove('active'));

        if (content) {
          content.style.display = content.style.display === 'block' ? 'none' : 'block';
          this.classList.add('active');
        }
      });
    });

    return () => {
      observer.disconnect();
      headings.forEach((heading) => {
        heading.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="nutrition-benefits-container">
      <h1 className="title visual-title" ref={titleRef}>
        Nutrition Benefits
      </h1>

      <section className="nutri-facts-section">
        <div className="nutri-facts-text">
          <h2>Nutri Facts</h2>
          <p>
            Millets and other ancient grains have been a staple food in human civilization
            for thousands of years, providing essential nutrients and sustaining populations
            across different cultures. These grains were widely cultivated in ancient India,
            China, Africa, and Mesopotamia, forming the foundation of early agricultural
            societies. Millets are known as nutri-cereals due to their exceptional health
            benefits.
          </p>
          <h3>Historical Importance</h3>
          <p>
            Ancient grains like sorghum, pearl millet, finger millet, foxtail millet, and
            barley were valued for their resilience in harsh climates, minimal water
            requirements, and high nutritional content. In traditional Indian and African
            diets, millets were a primary source of sustenance, offering energy, strength, and
            disease resistance to generations of people.
          </p>
        </div>
        <div className="millet-visual-container">
          <img src={milletImage} alt="Millet with Benefits" className="millet-visual" />
          <ul className="benefits-list">
            {benefitData.map((benefit, index) => (
              <li key={index}>
                <img src={benefit.icon} alt={benefit.text} />
                {benefit.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="health-benefits-section">
        <h2>Health and Nutrient Benefits of Millets</h2>
        <div className="main-section">
          <div className="main-content">
            <p>
              Millets are an excellent source of slow-digesting starch, dietary fiber, and
              vital minerals like magnesium. They are abundant in bioactive compounds such as
              phenolic compounds, tannins, and antioxidants, which help reduce oxidative
              stress and inflammation. They also provide essential amino acids such as cystine
              and methionine, which are beneficial for human health. As a nutrient-dense
              food, millets play a role in managing chronic conditions like diabetes and heart
              disease. Their high levels of fiber, protein, vitamins, minerals, and
              antioxidants make them a valuable addition to a balanced diet, offering benefits
              like improved digestion, and support for brain function. Regular consumption
              of millets as part of a balanced diet can be a preventive measure against CVD.
            </p>
          </div>
          <div className="side-bar">
            <div className="content-box">
              <h3 className="toggle-heading">Cardiovascular and Diabetes Management</h3>
              <p className="toggle-content">
                Millets are rich in magnesium, which relaxes blood vessels, regulates blood
                pressure, and improves insulin sensitivity, helping manage diabetes and reduce
                the risk of cardiovascular diseases.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default NutritionBenefits;