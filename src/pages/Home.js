import React, { useState, useEffect } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap for styling

const images = [
  "/images/foxtail-home1.avif",
  "/images/Foxtail_millet.avif",
  "/images/Little-home.avif",
  "/images/foxtail-home1.avif",
  "/images/barnyard.avif"
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % images.length // Loop seamlessly
      );
    }, 3000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const textBlocks = document.querySelectorAll("#latest-news p");

    const animateTextOnScroll = () => {
      textBlocks.forEach((text) => {
        const rect = text.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight - 100) {
          text.classList.add("slide-in");
        }
      });
    };

    window.addEventListener("scroll", animateTextOnScroll);
    return () => window.removeEventListener("scroll", animateTextOnScroll);
  }, []);

  

  return (
    <div className="home-container">  
      {/* Image Slider */}
      <div className="image-slider">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`slide-${index}`}
            className={`slider-image ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>

      {/* Latest Updates Section */}
      <section id="latest-updates" className="container py-5">
        <h2 className="text-dark fs-1 text-start">HIGHLIGHTS</h2>
        <div className="row">
          {/* Update 1 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="images/employee.png" className="card-img-top1" alt="Update 1" />
              <div className="card-body">
                <h5 className="card-title fs-5 fw-bold custom-color">
                  EXPERT WORKING GROUPS
                </h5>
                <p className="card-text">
                  Working groups are established by bringing together experts with
                  a focus on a topic of relevance with broader vision and specific
                  objectives. It provides a platform for knowledge sharing on
                  specific research and organizational development.
                </p>
                <a href="#" className="btn btn-primary py-3 px-4 fs-4">Learn More</a>
              </div>
            </div>
          </div>
          
          {/* Update 2 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="images/crop_image.png" className="card-img-top1" alt="Update 2" />
              <div className="card-body">
                <h5 className="card-title fs-5 fw-bold custom-color">AHEAD</h5>
                <p className="card-text">
                  Conducting regular progress and coordination meetings to ensure
                  the project stays on track and to address any challenges.
                  Stakeholders meet, EWG meeting, formulation of consultative
                  groups for implementation of MAHARISHI.
                </p>
                <a href="#" className="btn btn-primary py-3 px-4 fs-4">Learn More</a>
              </div>
            </div>
          </div>

          {/* Update 3 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="images/video_image.png" className="card-img-top1" alt="Update 3" />
              <div className="card-body">
                <h5 className="card-title fs-5 fw-bold custom-color">VIDEOS</h5>
                <p className="card-text">
                  Our Expert Working Groups record presentations and webinars as
                  well as they hold video competitions. All video recordings are
                  available here.
                </p>
                <a href="#" className="btn btn-primary py-3 px-4 fs-4">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="millets-section">
        <div className="downloads">
          <h3>Downloads</h3>
          <ul>
            <li><i class="fa-solid fa-download"></i><a href="#">Annual Report</a></li>
            <li> <i class="fa-solid fa-download"></i><a href="#">AICRP Budget Releases</a></li>
            <li><i class="fa-solid fa-download"></i> <a href="#">For Farmers</a></li>
            <li><i class="fa-solid fa-download"></i> <a href="#">Publications</a></li>
            <li><i class="fa-solid fa-download"></i> <a href="#">Millet Recipes</a></li>
            <li><i class="fa-solid fa-download"></i> <a href="#">Millets News (External Links)</a></li>
            <li><i class="fa-solid fa-download"></i> <a href="#">IIMR Newsletters</a></li>
            <li><i class="fa-solid fa-download"></i> <a href="#">VIC Proforma</a></li>
            <li><i class="fa-solid fa-download"></i> <a href="#">CVRC Proforma</a></li>
            <li><i class="fa-solid fa-download"></i> <a href="#">Holiday List 2025</a></li>
            <li><i class="fa-solid fa-download"></i> <a href="#">Pensioner’s Page</a></li>
            <li><i class="fa-solid fa-download"></i> <a href="#">CGHS Hospital List</a></li>
          </ul>
        </div>

        {/* Research Description */}
        <div className="millets-content">
          <h2>Indian Institute of Millets Research</h2>
          <p>
            The Indian Institute of Millets Research (IIMR) is a premier agricultural research institute engaged in basic and strategic research on sorghum and other millets under the Indian Council of Agricultural Research (ICAR).
          </p>
          <p>
            IIMR coordinates and facilitates millet research at the national level through the All India Coordinated Research Projects on Sorghum, Pearl Millet, and Small Millets and provides linkages with various national and international agencies. <a href="#">Read More</a>
          </p>
        </div>

        {/* Image Section */}
        <div className="millets-image">
          <img src="https://i.imgur.com/XRfz1xX.jpg" alt="Millets Research Institute" />
        </div>
      </section>
      <section id="latest-news" className="no-hover-effect">
        <video autoPlay muted loop>
          <source src="images/millets_video2.mp4" type="video/mp4" />
        </video>

        <div className="container">
          <div className="row gx-4 justify-content-center">
            {/* Left Block */}
            <div className="col-md-4 mb-4 text-center">
              <p className="left-text">
                The vision of MAHARISHI is to encourage and support the
                development of an active global millet research community for
                enhancing capabilities by sharing resources, data, knowledge,
                and ideas to improve millet productivity, quality, and
                sustainability.
              </p>
              <a href="#" className="btn btn-primary py-2 px-3">
                Learn More
              </a>
            </div>

            {/* Right Block */}
            <div className="col-md-4 mb-4 text-center">
              <p className="right-text">
                The major focus is to provide nutritional and livelihood
                security to the resource-poor in developing and underdeveloped
                countries that depend on millets, enhancing yield, and
                promoting sustainable and resilient agricultural production
                systems.
              </p>
              <a href="#" className="btn btn-primary py-2 px-3">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
