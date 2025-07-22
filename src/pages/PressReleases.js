import React from "react";
import "../styles/pressrelease.css";
import newsLetter1 from "../assets/images/news.avif";

const PressRelease = () => {
  return (
    <div className="pressrelease-section">
      <div className="pressrelease-wrapper">
        <h2 className="pressrelease-title">Press Releases</h2>

        <div className="pressrelease-card">
          <div className="pressrelease-image">
            <img src={newsLetter1} alt="Press Release" />
          </div>

          <div className="pressrelease-content">
            <h3>Maharishi Launch Meeting in ICAR foundation day</h3>
            <p>
              ICAR also initiated the Second National Gene Bank,
              the MAHARISHI (Millets and other Ancient Grains International
              Research Initiative), and the All India Network Project on Biotech
              Crops and Emerging Pests, while advancing innovations to empower next-generation agriculture...
            </p>
            <div className="pressrelease-buttons">
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

export default PressRelease;
