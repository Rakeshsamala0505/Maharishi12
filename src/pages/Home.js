import React, { useState, useEffect } from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WorldMapSection from "../pages/WorldMapSection";

import PM from "../assets/images/new image PM3.png";
import Minister from "../assets/images/shiva1w.avif"

const images = [
  "/images/foxtail-home1.avif",
  "/images/Sorghum.jpg",
  "/images/Little-home.avif",
  "/images/foxtail-home1.avif",
  "/images/pearl-home.jpg",
];

const announcements = [
  {
    text: "The MAHARISHI Initiative, endorsed under India’s G20 Presidency, aims to promote",
    link: "https://example.com/maharishi-initiative"
  },{
    text: "The MAHARISHI Initiative, endorsed under India’s G20 Presidency, aims to promote",
    link: "https://example.com/maharishi-initiative"
  },{
    text: "The MAHARISHI Initiative, endorsed under India’s G20 Presidency, aims to promote",
    link: "https://example.com/maharishi-initiative"
  },
  
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

  

  return (
    <div className="home-container">
       {/* Image Slider */}
       <div className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden">
          {/* Images */}
          {images.map((src, index) => (
             <img
               key={index}
               src={src}
               alt={`slide-${index}`}
               className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
                 index === currentSlideIndex ? "opacity-100" : "opacity-0"
               }`}
             />
             ))}
          
            {/* Full image overlay */}
               <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none"></div>
                  <div className="hero-content">
                      <h2 className="maharishi-title">MAHARISHI</h2>
                      <p className="maharishi-subtitle">
                        Cultivating Heritage, Harnessing Innovations <br></br>For People and Planet
                      </p>
                      <a href="\aboutmaharishi" className="btn-outline">About Us</a>
                  </div>
               </div>

{/* Latest Announcements */}
<section className="bg-gray-100 py-2 md:py-4 lg:py-6">
  <div className="flex items-center w-full px-4">
    <div className="w-full overflow-hidden relative">
      <div className="inline-block animate-ticker whitespace-nowrap pl-[10%] pr-[10%]">
        {announcements.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-medium hover:text-blue-600 transition-colors duration-200"
          >
            <span className="mx-2 sm:mx-3 md:mx-4 text-xs sm:text-sm md:text-base lg:text-lg font-normal text-gray-500">
                |
              </span>
            {item.text}
            {index !== announcements.length * 2 - 1 && (
              <span className="mx-2 sm:mx-3 md:mx-4 text-xs sm:text-sm md:text-base lg:text-lg font-normal text-gray-500">
                |
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Leader Messages */}
<section className="section-container">
        {[ {
          img: PM,
          quote: "'Shree Anna' has been a part of the lifestyle in India for centuries. In different regions of the country, many types of coarse grains like Jowar, Bajra, Ragi, Sama, Kangni, Cheena, Kodon, Kutki, Kuttu are prevalent. We want to share our agricultural practices and experiences related to 'Shree Anna' with the world. We also want to learn anything new and special that the world and other countries have to offer. We also intend to learn.",
          author: "- Shri Narendra Modi",
          position: "Hon’ble Prime Minister of India",
        },
        {
          img: Minister,
          quote: "We must ensure food and nutritional security for our 1.44 billion population, preserve our soil for future generations, and contribute to global food availability. While many countries are pursuing material progress at the cost of nature, India must choose a path of sustainable development that protects nature",
          // link: "https://economictimes.indiatimes.com/news/india/millets-can-help-tackle-challenges-of-food-security-pm-modi/articleshow/98751033.cms?from=mdr",
          author: "- Shivraj Singh Chouhan",
          position: "Hon’ble Minister of Agriculture & Farmer's Welfare",
        }
        ].map((item, idx) => (
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

      {/* World Map Section  */}
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

     {/* Latest News Section */}
<section id="latest-news" className="relative overflow-hidden text-white">
  {/* Background Video */}
  <video
  autoPlay
  muted
  loop
  className="bg-video"
>
  <source src="images/millets_video2.mp4" type="video/mp4" />
</video>



  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
      
      {/* Left Column */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FFF0E1] mb-4">
          NEWSLETTER
        </h2>
        <p className="text-base md:text-lg max-w-md mb-6">
          Sign Up to explore the World of Traditional Grains through our
          Quarterly Newsletter. Click below to know more.
          Quarterly Newsletter. Click below to know more.
        </p>
        <a
          href="newsletter.js"
          className="learn-more-btn"
        >
          Learn More
        </a>
      </div>

      {/* Right Column */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FFF0E1] mb-4">
          LAUNCH EVENT
        </h2>
        <p className="text-base md:text-lg max-w-md mb-6">
          Explore, Engage, and Discover Scientific Perspectives on Millets and
          Ancient Grains. Click below to join.
        </p>
        <a
          href="\launchevent"
          className="learn-more-btn"
        >
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