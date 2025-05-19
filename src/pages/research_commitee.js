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

      <div className="content-section px-3 px-md-5">
        {/* <h2>Welcome to the Research Committee</h2> */}
        <p>
          The Research Committee is responsible for the development of the vision and strategy of MAHARISHI and for the monitoring of implementation.
        </p>
        <p>
          The Research Committee of MAHARISHI (Millet And OtHer Ancient GRains International ReSearcH Initiative) is inspired by this ancient wisdom, embracing a global, inclusive, and collaborative approach to food and nutritional security. We believe that through collective knowledge and coordinated action, the underutilized potential of millets and other ancient grains can be unlocked for the benefit of humanity and the planet.        
        </p>
         <p>
            The Research Committee serves as the backbone of the MAHARISHI initiative, fostering global collaboration to revive, promote, and advance scientific understanding and innovation in millets and other ancient grains. These grains, often overlooked in modern agriculture, offer climate resilience, nutritional richness, and a path to sustainable farming.        
        </p>
      </div>

    </div>
  );
};

export default ResearchCommitee;
