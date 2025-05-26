import React from 'react';
import '../styles/ImplementationOfMaharishi.css';

const ImplementationOfMaharishi = () => {
  return (
    <div className="maharishi-implementation-page">
      <section className="hero">
        <h2>Implementation of MAHARISHI</h2>
        <p className="full-form">
          <strong>MAHARISHI</strong> - Millet And OtHer Ancient GRains International ReSearcH Initiative
        </p>
        <p>A Global Initiative</p>
      </section>

      <section className="initiative-overview">
        <h3>About the Initiative</h3>
        <p>
          The MAHARISHI (Millet And OtHer Ancient GRains International ReSearcH Initiative) was proposed at the G20 MACS meeting in April 2023 in India and received endorsement to enhance global food and nutritional security by integrating millets into global diets.
        </p>
        <p>
          This initiative establishes a framework for defining strategic research and organizational priorities for millet research across developed and developing nations. MAHARISHI aims to improve communication among researchers, funding bodies, and policymakers, facilitating efficient and long-term investments in millet research and development. It also supports activities to improve global research partnerships and broaden access to information, resources, and technologies related to millets.
        </p>
      </section>

      {/* <section className="vision-mission">
        <h3>Vision</h3>
        <p>
          To foster and support a dynamic global millet research community, enhancing capabilities through the sharing of resources, data, knowledge, and ideas to improve millet productivity, quality, and sustainability.
        </p>
        <h3>Mission</h3>
        <p>
          To prioritize nutritional and livelihood security for resource-poor populations in developing and underdeveloped countries reliant on millets, by increasing yields and promoting sustainable and resilient agricultural production systems. This mission extends to a global platform to maximize international value-added opportunities.
        </p>
      </section> */}

      <section className="objectives">
        <h3>Key Objectives for Implementation</h3>
        <div className="no-bullets">
          <li>Establish networks connecting researchers and institutions focused on identified crops to improve the dissemination of research findings, information, and to identify research gaps.</li>
          <li>Develop web platforms to connect researchers, regularly share information, communication materials, and thematic briefs to encourage research and raise awareness.</li>
          <li>Organize knowledge transfer and capacity-building activities, as well as international research workshops and conferences, based on voluntary and mutually agreed terms.</li>
          <li>Provide research and innovation prizes or awards to support young scientists' research interests and promote open access publication of research outcomes.</li>
        </div>
      </section>

      <section className="research-priorities">
        <h3>Research Priorities for Implementation</h3>
        <div className="no-bullets">
          <li>Strengthening existing research activities related to millets and ancient grains.</li>
          <li>Advancing breeding methodologies, biotechnology, and genomics in millet research.</li>
          <li>Enhancing agronomic practices in their broadest sense, encompassing crop production and soil management.</li>
          <li>Broadening the genetic base of millets by utilizing global genetic resources.</li>
          <li>Focusing on value addition and establishing international standards for the global millet market.</li>
        </div>
      </section>

      <section className="challenges">
        <h3>Addressing Key Challenges</h3>
        <p>
          The implementation of MAHARISHI will need to address critical issues such as the decline in millet cultivation areas, the need for enhanced yields, and the development of robust seed supply chains. Specific challenges include:
        </p>
        <div className="no-bullets">
          <li>Integrating local and landraces into breeding programs and initiating pre-breeding efforts.</li>
          <li>Focusing global programs on the introgression of novel genes to improve stress tolerance, nutritional quality, and yield.</li>
          <li>Advancing omics studies and their application in marker-assisted selection (MAS).</li>
          <li>Improving genetic gains through genomic selection and the use of gene editing technologies.</li>
          <li>Conducting nutritional profiling and validating traditional knowledge of millets and ancient grains.</li>
          <li>Developing policies that encourage farmers to grow millets and support sustainability goals.</li>
        </div>
      </section>

      <section className="technology-partnerships">
        <h3>Leveraging Technology and Partnerships</h3>
        <p>
          Successful implementation will depend on access to modern technologies and fostering collaborations:
        </p>
        <div className="no-bullets">
          <li>Training researchers in advanced plant breeding techniques and tools (sequencing, genomics, etc.).</li>
          <li>Supporting multinational research initiatives and public-private partnerships to leverage diverse expertise and resources.</li>
        </div>
      </section>

      {/* You could add a section about the structure and organization if needed,
         though the text mentions the 'Charter' for explicit details. */}
    </div>
  );
};

export default ImplementationOfMaharishi;