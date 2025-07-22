import React from "react";
import "../styles/newsletter.css";
import newsLetter1 from "../assets/images/news.avif";
import newsLetter2 from "../assets/images/gallery2.avif"; // Assuming you have another image for the second newsletter 

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
        </div><div className="newsletter-card">
          <div className="newsletter-image">
            <img src={newsLetter2} alt="Newsletter" />
          </div>

          <div className="newsletter-content">
            <h3>Maharishi Genesis</h3>
            <p>
              MAHARISHI (Millets And OtHer Ancient GRains International ReSearch
Initiative), an initiative declared in India during G20 summit, aimed at global 
spread of millets and ancient grains to ensure food, nutrition and livelihood 
security at the global level. It was initially envisioned by Hon'ble Prime Minister 
Shri Narendra Modi....
            </p>
            <div className="newsletter-buttons">
              <a
                href="/Pdf/MAHARISHI_Document_Revised.pdf"
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
