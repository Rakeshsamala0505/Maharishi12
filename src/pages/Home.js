import React, { useState, useEffect } from "react";
import "./Home.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap for styling
import HimanshuPathakImage from '../assets/home_images/dr_devesh.jpg';
import PM from '../assets/images/PM.avif';


const images = [
  "/images/foxtail-home1.avif",
  "/images/Foxtail_millet.avif",
  "/images/Little-home.avif",
  "/images/foxtail-home1.avif",
  "/imageS/BARNYARD.avif",
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % images.length // Loop seamlessly
      );
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);
  
  
useEffect(() => {
  AOS.init({ duration: 1000 }); // duration in ms
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
      {/* Latest Updates Section */}
<section
  id="latest-updates"
  className="py-5"
  style={{
    backgroundImage: "url('/images/bg1.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
  }}
>
  <div className="container">
    <h2 className="text-dark fs-1 text-start" data-aos="fade-left">
      HIGHLIGHTS
    </h2>
    <div className="row">
      {/* Update 1 */}
      <div className="col-md-4 mb-4" data-aos="fade-up">
        <div className="card h-100">
          <img src="images/employee.png" className="card-img-top1" alt="Update 1" />
          <div className="card-body">
            <h5 className="card-title fs-5 fw-bold custom-color">EXPERT WORKING GROUPS</h5>
            <p className="card-text">
            Working groups are established by bringing together experts with a focus on a topic of relevance with broader vision and specific objectives. It provides a platform for knowledge sharing on specific research and organizational development.            </p>
            <a href="#" className="btn btn-primary py-0 px-4 fs-4">Learn More</a>
          </div>
        </div>
      </div>

      {/* Update 2 */}
      <div className="col-md-4 mb-4" data-aos="fade-up">
        <div className="card h-100">
          <img src="images/crop_image.png" className="card-img-top1" alt="Update 2" />
          <div className="card-body">
            <h5 className="card-title fs-5 fw-bold custom-color">AHEAD</h5>
            <p className="card-text">
            Conducting regular progress and coordination meetings to ensure the project stays on track and to address any challenges. Stakeholders meet, EWG meeting, formulation of consultative groups for implementation of MAHARISHI.            </p>
            <a href="#" className="btn btn-primary py-3 px-4 fs-4">Learn More</a>
          </div>
        </div>
      </div>

      {/* Update 3 */}
      <div className="col-md-4 mb-4" data-aos="fade-up">
        <div className="card h-100">
          <img src="images/video_image.png" className="card-img-top1" alt="Update 3" />
          <div className="card-body">
            <h5 className="card-title fs-5 fw-bold custom-color">VIDEOS</h5>
            <p className="card-text">
            Our Expert Working Groups record presentations and webinars as well as they hold video competitions. All video recordings are available here.            </p>
            <a href="#" className="btn btn-primary py-3 px-4 fs-4">Learn More</a>
          </div>
        </div>
      </div>
    </div>
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
              <p className="left-text" data-aos="fade-right">
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
              <p className="right-text" data-aos="fade-left">
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
