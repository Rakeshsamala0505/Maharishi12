import React from "react";
import "../styles/newsletter.css";
import newsLetter1 from "../assets/images/news.avif";
import newsLetter2 from "../assets/images/gallery2.avif"; 
import newsLetter3 from "../assets/images/Symposium.avif";

const NewsLetter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-wrapper">
        <h2 className="newsletter-title">Newsletters</h2>

        
      

        <div className="newsletter-card">
          <div className="newsletter-image">
            <img src={newsLetter3} alt="Newsletter" />
          </div>

          <div className="newsletter-content">
            <h3>International Symposium on Shree Anna and Woman Farmer 2025 Organised</h3>
            <p>
              A major highlight was the Technical Session on “MAHARISHI 
              (A G20 Outcome) Harnessing the Value Chain Potential of Millets,” organised by
               the MAHARISHI Secretariat in collaboration with the symposium.
               Renowned global experts, including Dr. C. Tara Satyavathi, Director, 
               ICAR–IIMR, along with other senior officials, deliberated on strengthening
                millet value chains, emphasising a collaborative, whole-of-society approach...
            </p>
            <div className="newsletter-buttons">
              <a
                href="https://icar.org.in/en/international-symposium-shree-anna-and-woman-farmer-2025-organised"
                target="_blank"
                rel="noopener noreferrer"
                className="btn red"
              >
                Click Here
              </a>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default NewsLetter;
