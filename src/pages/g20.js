import React from "react";
import "../styles/g20.module.css"; // Importing external CSS
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap for styling


const g20 = () => {
  return (
    <div className="container">
      <div className="text_content">
        <div className="container__content"></div>
        <h1 className="title fs-3 fs-md-1 text-start ms-1 ms-md-1">
        MAHARISHI (Millet And OtHer Ancient GRains International ReSearcH Initiative)
        </h1>
        <p className="text-content">
        This initiative was proposed in the G20 MACS meeting in April 2023 in
         India and endorsed by G20 MACS participants to contribute to improving 
         world food and nutritional security through bringing millets into the 
         global consumer’s diet. This initiative provides a framework to establish 
         strategic research and organization priorities for millet research at the 
         international level in both developed and developing countries. 
        </p>
        <p className="text-content">
        The MAHARISHI
          fosters communication between the research community, funders, and global
           policymakers and aims at securing efficient and long-term investments to
            meet millet research and development goals. It also initiates and supports
             activities to enhance communication and increase access to information, 
             resources, and technologies with respect to millets.
        </p><p className="text-content">
          Millets are small seeded, hardy grass species which include sorghum,
          pearl millet, finger millet, foxtail millet, proso millet, kodo
          millet, little millet, barnyard millet, and brown-top millet. Apart
          from these, there are other ancient grains that are consumed as food
          which include teff, fonio, sekia, job’s tears, buckwheat, amaranth,
          quinoa etc.
        </p>
        <h1 className="title fs-3 fs-md-2">Vision</h1>
        <p className="text-content">
        The vision of MAHARISHI is to encourage and support the development of an active global millet research community for enhancing capabilities by sharing resources, data, knowledge, and ideas to improve millet productivity, quality, and sustainability.
        </p>
        <h1 className="title fs-3 fs-md-2">Mission</h1>
        <p className="text-content">
        The major focus is to provide nutritional and livelihood security to the resource-poor in the developing and underdeveloped countries that depend on millets, enhancing yield, and promoting sustainable and resilient agricultural production systems while considering societal demands by broadening the platform to a global level for maximizing opportunities for gaining added value internationally.
        </p>
        <div className="image-container">
          <img src="/images/picture1.png" alt="G20" className="responsive-image"/>
          </div>
      </div>
    </div>
  );
};

export default g20;
