import React, { useState } from "react";
import "../styles/gallery.css";

import img1 from "../assets/images/gallery1.avif";
import img2 from "../assets/images/gallery2.avif";
import img3 from "../assets/images/gallery3.avif";

const galleryItems = [
  { type: "image", src: img1, alt: "Image 1", title: "Maharishi Launch" },
  { type: "image", src: img2, alt: "Image 2", title: "Maharishi Launch" },
  { type: "image", src: img3, alt: "Image 3", title: "Maharishi Launch" },
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClose = () => {
    setSelectedItem(null);
    const video = document.querySelector(".popup video");
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
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
              onClick={() => setSelectedItem(item)}
            >
              {item.type === "image" ? (
                <>
                  <img src={item.src} alt={item.alt} className="gallery-media" />
                  <div className="hover-title">{item.title}</div>
                </>
              ) : (
                <video src={item.src} className="gallery-media" muted />
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div className="popup" onClick={handleClose}>
          <span className="close-btn" onClick={handleClose}>&times;</span>
          {selectedItem.type === "image" ? (
            <img src={selectedItem.src} alt={selectedItem.alt} />
          ) : (
            <video src={selectedItem.src} autoPlay controls />
          )}
        </div>
      )}
    </div>
  );
};

export default Gallery;
