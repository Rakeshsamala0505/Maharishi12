import React, { useState } from "react";
import {useEffect} from "react";


import "../styles/gallery.css";

import img1 from "../assets/images/gallery1.avif";
import img2 from "../assets/images/gallery2.avif";
import img3 from "../assets/images/gallery3.avif";
import img4 from "../assets/images/gallery6.avif";
import img5 from "../assets/images/gallery_11.avif";
import img6 from "../assets/images/gallery_2.avif";
import img7 from "../assets/images/gallery_12.jpg";
import img8 from "../assets/images/images_gal.jpeg";
import img9 from "../assets/images/images_gallery2.jpeg";
import img10 from "../assets/images/gallery_image.jpeg";

const galleryItems = [
  { type: "image", src: img1, alt: "Image 1", title: "Maharishi Launch" },
  { type: "image", src: img2, alt: "Image 2", title: "Maharishi Launch" },
  { type: "image", src: img3, alt: "Image 3", title: "Maharishi Launch" },
  { type: "image", src: img4, alt: "Image 4", title: "International Symposium" },
  { type: "image", src: img5, alt: "Image 5", title: "International Symposium"},
  { type: "image", src: img6, alt: "Image 6", title: "International Symposium" },
  { type: "image", src: img7, alt: "Image 7", title: "Maharishi Launch" },
  { type: "image", src: img8, alt: "Image 8", title: "" },
  { type: "image", src: img9, alt: "Image 9", title: "" },
  { type: "image", src: img10, alt: "Image 10", title: "" },
  
];

const Gallery = () => {

  
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleOpen = (index) => setCurrentIndex(index);

  const handleClose = () => setCurrentIndex(null);

  const showNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  };

  useEffect(() => {
  if (currentIndex === null) return;

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    } 
    else if (e.key === "ArrowLeft") {
      setCurrentIndex((prev) =>
        prev === 0 ? galleryItems.length - 1 : prev - 1
      );
    } 
    else if (e.key === "Escape") {
      setCurrentIndex(null); // Close popup with ESC
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  // cleanup
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [currentIndex]);


  return (
    <div className="gallery-wrapper">
      <div className="gallery-inner">
        <h2 className="gallery-heading">Gallery</h2>
        <div className="gallery-masonry">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="gallery-card"
              onClick={() => handleOpen(index)}
            >
              <img src={item.src} alt={item.alt} className="gallery-media" />
              <div className="hover-title">{item.title}</div>
            </div>
          ))}
        </div>
      </div>

      {currentIndex !== null && (
  <div className="popup" onClick={handleClose}>
    <span className="close-btn" onClick={handleClose}>&times;</span>

    {/* Left (Prev) Button */}
    <button className="nav-btn screen-left" onClick={showPrev}>
      &#10094;
    </button>

    <img
      src={galleryItems[currentIndex].src}
      alt=""
      className="popup-img"
      onClick={(e) => e.stopPropagation()}
    />

    {/* Right (Next) Button */}
    <button className="nav-btn screen-right" onClick={showNext}>
      &#10095;
    </button>
  </div>
)}

    </div>
  );
};

export default Gallery;
