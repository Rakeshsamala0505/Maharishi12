import React from 'react';
import '../styles/ExpertWorkingGroup.css';
import bannerImg from '../assets/images/banner2_expert.jpg';

const ExpertWorkingGroup = () => {
  return (
    <div>
      <div className="banner-container">
        <img
          src={bannerImg}
          alt="Banner"
          className="banner-image"
        />
        <div className="banner-title">Climate Expert Working Group</div>
      </div>

      <div className="content-section">
        {/* <h2>Welcome to the Expert Working Group</h2> */}
        <p>
The Climate Expert Working Group focuses on the intersections of climate resilience and grain research. It analyses how millets and ancient grains contribute to climate-smart agriculture, evaluates their role in adaptation and mitigation strategies, and identifies innovations to reduce risks from changing environments. The group offers recommendations that link scientific findings with policies and practices for sustainable agriculture under climate change.       </p>
          
      </div>
    </div>
  );
};

export default ExpertWorkingGroup;
