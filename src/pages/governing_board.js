import React from 'react';
import '../styles/scientific_commitee.css';
import bannerImg from '../assets/images/banner2_scientific.jpg';

const ScientificCommitee = () => {
  return (
    <div>
      <div className="banner-container">
        <img
          src={bannerImg}
          alt="Banner"
          className="banner-image"
        />
        <div className="banner-title">MAHARISHI GOVERNING BOARD</div>
      </div>

 <div className="content-section px-3 px-md-5">        
  {/* <h2>Welcome to the Scientific Committee</h2> */}
  <p>
     The Governing Board serves as the main decision-making forum, bringing together member countries, research organisations, and international partners. It reviews and approves work plans, budgets, and financial frameworks, while also aligning research and funding efforts across countries. It considers recommendations from advisory bodies and plays a central role in strengthening global collaboration on millet and ancient grain research.  
  </p>
      </div>
    </div>
  );
};

export default ScientificCommitee;
