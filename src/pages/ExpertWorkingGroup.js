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
        <div className="banner-title">Expert Working Group</div>
      </div>

      <div className="content-section">
        {/* <h2>Welcome to the Expert Working Group</h2> */}
        <p>
          Expert Working Groups deliver state of the art, gap analysis and recommendtaions addressing the specific research or organisational areas for which they were created
        </p>
        <p>
          <strong>Expert Working Group</strong> is a group of experts in the field of millets and other ancient grains, who are responsible for the development of the vision and strategy of MAHARISHI and for the monitoring of implementation. The Expert Working Group is responsible for the development of the vision and strategy of MAHARISHI and for the monitoring of implementation.
        </p>
      </div>
    </div>
  );
};

export default ExpertWorkingGroup;
