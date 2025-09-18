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
        <div className="banner-title">Research Advisory Group</div>
      </div>

      <div className="content-section px-3 px-md-5">
        {/* <h2>Welcome to the Research Committee</h2> */}
        <p>
          The Research Advisory Group develops the scientific vision and research strategy of the Initiative. It identifies priority themes, recommends areas for collaboration, reviews the outputs of expert groups, and advises on budgets and new research opportunities. By engaging leading scientists, it ensures that MAHARISHI’s work remains relevant to evolving global research and innovation needs.        
        </p>   
      </div>

    </div>
  );
};

export default ResearchCommitee;
