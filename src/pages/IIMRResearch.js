// MilletsInfographic.js
import React from 'react';
import '../styles/IIMRResearch.css';

const MilletsInfographic = () => {
  const millets = [
    { name: 'Pearl Millet', image: '/images/pearl_millet.jpg', description: 'Known for its high iron content and drought resistance.' },
    { name: 'Finger Millet', image: '/images/finger_millet.jpg', description: 'Rich in calcium and fiber, often used in porridges and breads.' },
    { name: 'Foxtail Millet', image: '/images/foxtail_millet.jpg', description: 'A good source of antioxidants and dietary fiber.' },
    { name: 'Sorghum', image: '/images/sorghum.jpg', description: 'Gluten-free and high in antioxidants, used in various forms.' },
    { name: 'Barnyard Millet', image: '/images/barnyard_millet.jpg', description: 'Fast-growing and rich in fiber, suitable for diabetic diets.' },
    { name: 'Kodo Millet', image: '/images/kodo_millet.jpg', description: 'Rich in B vitamins and dietary fiber, easily digestible.' },
    { name: 'Little Millet', image: '/images/little_millet.jpg', description: 'High in iron and fiber, often used in rice substitutes.' },
    { name: 'Proso Millet', image: '/images/proso_millet.jpg', description: 'Quick-cooking and rich in carbohydrates, used in cereals and breads.' },
    { name: 'Brown Top Millet', image: '/images/brown_top_millet.jpg', description: 'High in fiber and antioxidants, beneficial for heart health.' },
  ];

  return (
    <div className="millets-infographic">
      <h1>The Nine Nutritional Powerhouses: Millets</h1>
      <p className="intro">
        Discover the incredible health benefits and versatility of the nine major types of millets. Each variety offers unique nutritional advantages and can be incorporated into a wide range of delicious dishes.
      </p>
      <div className="millets-grid">
        {millets.map((millet, index) => (
          <div key={index} className="millet-card">
            <img src={millet.image} alt={millet.name} className="millet-image" />
            <h3>{millet.name}</h3>
            <p className="millet-description">{millet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MilletsInfographic;