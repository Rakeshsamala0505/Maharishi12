import React from "react";
import "./Footer.css"; // Import the external CSS file
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <div className="page-container">
      <div className="main-content">
        {/* Your main content goes here */}
      </div>
      <footer>
        <div className="footer-container">
          <div className="footer-section">
            <h4>About</h4>
            <a href="\aboutmaharishi">About Maharishi</a>
            <a href="\genesis">Genesis</a>
            <a href="\organisationalchart">Organisation Chart</a>
            <a href="\charter">Charter</a>
          </div>
          <div className="footer-section">
            <h4>Our Work</h4>
            <a href="\associated_programs">Associated Programs</a>
            <a href="\opportunities">Opportunities</a>
            <a href="\earlycareerresearcher">Early career Researchers</a>
          </div>
          <div className="footer-section">
            <h4>Crops</h4>
            <a href="\millets">Millets</a>
            <a href="\ancient_grains">Ancient Grains</a>
            <a href="\events">Climate</a>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <a href="#">Support</a>
            <a href="#">Feedback</a>
          </div>
          <div className="footer-section">
            <h4>Address</h4>
            <p>C/o ICAR-Indian Institute of Millets Research</p>
            <p>Rajendranagar, Hyderabad, 500030</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" className="fab fa-linkedin"></a>
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-youtube"></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;