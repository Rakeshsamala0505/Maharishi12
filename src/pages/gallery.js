import React, { useState } from "react";
import "../styles/gallery.css";

import img1 from "../assets/images/gallery1.avif";
import img2 from "../assets/images/gallery2.avif";
import img3 from "../assets/images/gallery3.avif";
import img4 from "../assets/images/gallery6.avif";
import img5 from "../assets/images/gallery_11.avif";
import img6 from "../assets/images/gallery_2.avif";
import img7 from "../assets/images/gallery_3.avif";

const galleryItems = [
  { type: "image", src: img1, alt: "Image 1", title: "Maharishi Launch" },
  { type: "image", src: img2, alt: "Image 2", title: "Maharishi Launch" },
  { type: "image", src: img3, alt: "Image 3", title: "Maharishi Launch" },
  { type: "image", src: img4, alt: "Image 6", title: "International Symposium" },
  { type: "image", src: img5, alt: "Image 5", title: "International Symposium"},
  { type: "image", src: img6, alt: "Image 6", title: "International Symposium" },
  { type: "image", src: img7, alt: "Image 7", title: "International Symposium" },
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

  return (
    <div className="gallery-wrapper">
      <div className="gallery-inner">
        <h2 className="gallery-heading">Gallery</h2>
        <div className="gallery-grid">
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
