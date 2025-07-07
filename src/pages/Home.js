import React, { useState, useEffect } from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WorldMapSection from "../pages/WorldMapSection";

import President from "../assets/images/President.jpeg";
import PM from "../assets/images/PM.avif";

const images = [
  "/images/foxtail-home1.avif",
  "/images/Foxtail_millet.avif",
  "/images/Little-home.avif",
  "/images/foxtail-home1.avif",
  "/images/BARNYARD.avif",
];

const announcements = [
  "The MAHARISHI Initiative, endorsed under India’s G20 Presidency, aims to promote international research collaboration on climate-resilient and nutritious crops, including millets and other underutilized ancient grains",
];

const Home = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    const announcementInterval = setInterval(() => {
      setCurrentAnnouncementIndex((prev) => (prev + 1) % announcements.length);
    }, 3000);

    AOS.init({ duration: 1000 });

    return () => {
      clearInterval(slideInterval);
      clearInterval(announcementInterval);
    };
  }, []);

  const nextAnnouncement = () => {
    setCurrentAnnouncementIndex((prev) => (prev + 1) % announcements.length);
  };

  const prevAnnouncement = () => {
    setCurrentAnnouncementIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  return (
    <div className="home-container">
      {/* Image Slider */}
      <div className="image-slider">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`slide-${index}`}
            className={`slider-image ${index === currentSlideIndex ? "active" : ""}`}
          />
        ))}
          <h2 className="slider-title">
  <span className="main-title">MAHARISHI</span><br />
  <span className="sub-title">Sowing Heritage, Harvesting Innovations</span><br />
  <span className="sub-title">For People and Planet</span>
</h2>
      </div>

      {/* Latest Announcements */}
      <section className="latest-announcements">
             <div className="d-flex align-items-start flex-column flex-md-row w-100 gap-3">
               <h2 className="latest-title">Latest Announcements</h2>
               <div className="announcement-wrapper">
                 <div className="announcement-card">
                   <span className="announcement-text">
                           {announcements.map((text, index) => (
                            <a key={index} href="#" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none", marginRight: "0.5rem" }}>
                               {text} {index !== announcements.length - 1 && <strong style={{ fontWeight: 'bold', margin: '0 0.5rem' }}>|</strong>}
                            </a>
                          ))}
                    </span>
                 </div>
               </div>
             </div>
      </section>

{/* World Map Section */}
      <WorldMapSection />
      {/* Highlights Section */}
      <section
        id="latest-updates"
        className="py-5"
        style={{
          backgroundImage: "url('/images/bg1.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className="container">
          <h2 className="text-dark fs-4 text-start title-shift" data-aos="fade-up">
            HIGHLIGHTS
          </h2>
          <div className="row">
            {[
              {
                img: "images/employee.png",
                title: "EXPERT WORKING GROUPS",
                text:
                  "Working groups are established by bringing together experts with a focus on a topic of relevance with broader vision and specific objectives. It provides a platform for knowledge sharing on specific research and organizational development.",
                  // link: "/highlights/ewg",
              },
              {
                img: "images/crop_image.png",
                title: "AHEAD",
                text:
                  "Conducting regular progress and coordination meetings to ensure the project stays on track and to address any challenges.Stakeholders meet, EWG meeting, formulation of consultative groups for implementation of MAHARISHI.",
                  // link: "/highlights/ewg",
              },
              {
                img: "images/video_image.png",
                title: "VIDEOS",
                text:
                  "Our Expert Working Groups record presentations and webinars as well as they hold video competitions. All video recordings are available here.",
                  // link: "/highlights/ewg",
              },
            ].map((item, idx) => (
              <div className="col-md-4 mb-2" data-aos="fade-up" key={idx}>
                <div className="card h-100">
                  <img src={item.img} className="card-img-top1" alt={`Update ${idx + 1}`} />
                  <div className="card-body">
                    <h5 className="card-title fs-5 fw-bold custom-color">{item.title}</h5>
                    <p className="card-text">{item.text}</p>
                    <a href="#" className="btn btn-primary py-2 px-4 fs-5">Learn More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="latest-news" className="no-hover-effect position-relative">
         <video autoPlay muted loop className="bg-video">
           <source src="images/millets_video2.mp4" type="video/mp4" />
         </video>

  <div className="container position-relative z-2 py-5" data-aos="fade-up">
    <div className="row align-items-center justify-content-center gap-md-custom">
      {/* Left Column */}
      <div className="col-md-4 text-white">
        <div className="content-block">
          <h2 className="section-title">NEWSLETTER</h2>
          <p className="section-description">
            Sign Up to explore the World of Traditional Grains through our Quarterly Newsletter. Click below to know more.
          </p>
          <a href="newsletter.js" className="btn btn-primary mt-1">Learn More</a>
        </div>
      </div>

      {/* Right Column */}
      <div className="col-md-4 text-white">
        <div className="content-block">
          <h2 className="section-title">LAUNCH EVENT</h2>
          <p className="section-description">
            Explore, Engage, and Discover Scientific Perspectives on Millets and Ancient Grains . Click below to join
          </p>
          <a href="nutrition_benefits.js" className="btn btn-primary mt-4">Learn More</a>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Leader Messages */}
      <section className="section-container">
        {[{
          img: President,
          quote: "Millets were essential ingredients of our diet and they are making a comeback among sections of society. Coarse grains like millets are eco-friendly as they require less water to grow and yet they provide high levels of nutrition. If more and more people turn to millets, it will help conserve ecology and also improve health.",
          // link: "https://economictimes.indiatimes.com/news/india/millets-can-help-tackle-challenges-of-food-security-pm-modi/articleshow/98751033.cms?from=mdr",
          author: "- Smt. Droupadi Murmu",
          position: "Hon’ble President of India",
        }, {
          img: PM,
          quote: "'Shree Anna' has been a part of the lifestyle in India for centuries. In different regions of the country, many types of coarse grains like Jowar, Bajra, Ragi, Sama, Kangni, Cheena, Kodon, Kutki, Kuttu are prevalent. We want to share our agricultural practices and experiences related to 'Shree Anna' with the world. We also want to learn anything new and special that the world and other countries have to offer. We also intend to learn.",
          author: "- Shri Narendra Modi",
          position: "Hon’ble Prime Minister of India",
        }].map((item, idx) => (
          <div className="card" data-aos="fade-up" key={idx}>
            <img src={item.img} alt={item.author} />
            <div className="card-content">
              {item.quote && <p>{item.quote}</p>}
              {item.link && <a href={item.link}>read more</a>}
              <p className="quote-author">{item.author}</p>
              <p className="quote-position">{item.position}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
