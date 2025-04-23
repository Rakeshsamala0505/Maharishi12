import React, { useState, useEffect } from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HimanshuPathakImage from "../assets/home_images/dr_devesh.jpg";
import PM from "../assets/images/PM.avif";

const images = [
  "/images/foxtail-home1.avif",
  "/images/Foxtail_millet.avif",
  "/images/Little-home.avif",
  "/images/foxtail-home1.avif",
  "/images/BARNYARD.avif",
];

const announcements = [
  "Announcement 1",
  "Announcement 2",
  "Announcement 3",
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
      </div>

      {/* Latest Announcements */}
      <section className="latest-announcements">
  <div className="d-flex align-items-start flex-column flex-md-row w-100 gap-3">
    <h2 className="latest-title">Latest Announcements</h2>
    <div className="announcement-wrapper">
      <div className="announcement-card">
<span className="announcement-badge">
  <span className="blinking-text">New</span>
</span>
        <span className="announcement-text">
          {announcements[currentAnnouncementIndex]}
        </span>
      </div>
      <div className="announcement-controls">
        <button className="nav-btn" onClick={prevAnnouncement}>&lt;</button>
        <button className="nav-btn" onClick={nextAnnouncement}>&gt;</button>
      </div>
    </div>
  </div>
</section>


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
          <h2 className="text-dark fs-1 text-start" data-aos="fade-up">
            HIGHLIGHTS
          </h2>
          <div className="row">
            {[
              {
                img: "images/employee.png",
                title: "EXPERT WORKING GROUPS",
                text:
                  "Working groups are established by bringing together experts with a focus on a topic of relevance with broader vision and specific objectives. It provides a platform for knowledge sharing on specific research and organizational development.",
              },
              {
                img: "images/crop_image.png",
                title: "AHEAD",
                text:
                  "Conducting regular progress and coordination meetings to ensure the project stays on track and to address any challenges.Stakeholders meet, EWG meeting, formulation of consultative groups for implementation of MAHARISHI.",
              },
              {
                img: "images/video_image.png",
                title: "VIDEOS",
                text:
                  "Our Expert Working Groups record presentations and webinars as well as they hold video competitions. All video recordings are available here.",
              },
            ].map((item, idx) => (
              <div className="col-md-4 mb-4" data-aos="fade-up" key={idx}>
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
      <section id="latest-news" className="no-hover-effect">
        <video autoPlay muted loop>
          <source src="images/millets_video2.mp4" type="video/mp4" />
        </video>
        <div className="container">
          <div className="row gx-4 justify-content-center">
            {["The vision of MAHARISHI is to encourage and support the development of an active global millet research community for enhancing capabilities by sharing resources, data, knowledge, and ideas to improve millet productivity, quality and sustainability", 
            "The major focus is to provide nutritional and livelihood security to the resource poors in the developing and underdeveloped countries that are dependent on millets, enhancing yield and promoting sustainable and resilient agricultural production systems"]
              .map((text, idx) => (
                <div className="col-md-4 mb-4 text-center" key={idx}>
                  <p className={idx === 0 ? "left-text" : "right-text"} data-aos="fade-up">
                    {text}
                  </p>
                  <a href="#" className="btn btn-primary py-2 px-3">Learn More</a>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Leader Messages */}
      <section className="section-container">
        {[{
          img: PM,
          quote: "The Prime Minister noted that millets are primarily cultivated in 12-13 different states in the country where at-home consumption per month per person was not more than 3 kilograms whereas the consumption has increased to 14 kilograms per month today....",
          link: "https://economictimes.indiatimes.com/news/india/millets-can-help-tackle-challenges-of-food-security-pm-modi/articleshow/98751033.cms?from=mdr",
          author: "- Shri Narendra Modi",
          position: "Prime Minister",
        }, {
          img: HimanshuPathakImage,
          author: "Shri. Devesh Chaturvedi, IAS",
          position: "Department of Agriculture & Farmer Welfare",
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
