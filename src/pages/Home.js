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
                  "Working groups bring experts together to share knowledge, research, and development objectives.",
              },
              {
                img: "images/crop_image.png",
                title: "AHEAD",
                text:
                  "Coordination meetings ensure smooth progress and implementation of MAHARISHI.",
              },
              {
                img: "images/video_image.png",
                title: "VIDEOS",
                text:
                  "Access expert presentations, webinars, and video competition content here.",
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
            {["The vision of MAHARISHI is to build a global millet research community...", "Major focus on food and livelihood security through millet promotion..."]
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
          quote: "Millets are crucial for food security. Consumption has grown significantly...",
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
