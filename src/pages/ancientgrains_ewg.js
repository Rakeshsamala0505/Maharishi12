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
        <div className="banner-title">Ancient Grains Expert Working Group</div>
      </div>

      <div className="content-section">
        {/* <h2>Welcome to the Expert Working Group</h2> */}
        <p>
            The Ancient Grains Expert Working Group explores underutilised cereals and grains beyond millets, drawing attention to their nutritional, cultural, and economic potential. It reviews scientific evidence, identifies areas for further research, and highlights ways to integrate these crops into modern food systems. Its work supports knowledge-sharing and provides strategies to revive and promote ancient grains globally.        
       </p>
          
      </div>
    </div>
  );
};

export default ExpertWorkingGroup;
