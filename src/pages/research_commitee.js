import React from 'react';
import '../styles/research_commitee.css';
import bannerImg from '../assets/images/banner1_research.jpg';

const ResearchCommitee = () => {
  return (
    <div>
      <div className="banner-container">
        <img
          src={bannerImg}
          alt="Banner"
          className="banner-image"
        />
        <div className="banner-title">Research Commitee</div>
      </div>

      <div className="content-section">
        <h2>Welcome to the Research Committee</h2>
        <p>
          This is a sample paragraph of text that appears below the banner image. You can add more sections, descriptions, or components here as needed. The banner remains at the top of the page.
        </p>
      </div>
    </div>
  );
};

export default ResearchCommitee;
