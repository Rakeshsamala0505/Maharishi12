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
        <div className="banner-title">Scientific Board</div>
      </div>

 <div className="content-section px-3 px-md-5">        
  {/* <h2>Welcome to the Scientific Committee</h2> */}
  <p>
    The Scientific Board of MAHARISHI (Millet And OtHer Ancient GRains International ReSearcH Initiative) is a global consortium of experts dedicated to advancing the understanding and utilization of millets and other ancient grains. This board plays a pivotal role in shaping the research agenda, fostering collaboration, and ensuring the scientific integrity of the initiative's efforts. By bringing together diverse expertise from various fields, the Scientific Board aims to unlock the potential of these underutilized crops for sustainable agriculture, nutrition, and food security.
  </p>
        <p>
          <strong>Scientific Board </strong> Approves final documents beffore dissemination, Identifies new partners for MAHARISHI and proposes their joining to the Steering and Coordination Committee. Ensures that a International Millet and Ancient Grain Research Congress is held (annual or biannual).
        </p>
      </div>
    </div>
  );
};

export default ScientificCommitee;
