import React from "react";
import "../styles/newsletter.css";
import newsLetter1 from "../assets/images/news.avif";

const NewsLetter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-wrapper">
        <h2 className="newsletter-title">Newsletters</h2>

        <div className="newsletter-card">
          <div className="newsletter-image">
            <img src={newsLetter1} alt="Newsletter" />
          </div>

          <div className="newsletter-content">
            <h3>Maharishi Launch Meeting in ICAR foundation day</h3>
            <p>
              ICAR also initiated the Second National Gene Bank, 
              the MAHARISHI (Millets and other Ancient Grains International 
              Research Initiative), and the All India Network Project on Biotech 
              Crops and Emerging Pests, while advancing innovations to empower next-generation agriculture...
            </p>
            <div className="newsletter-buttons">
              <a
                href="/Pdf/Press Release_Press_Maharishi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn red"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
