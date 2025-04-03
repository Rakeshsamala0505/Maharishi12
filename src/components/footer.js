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
            <a href="#">About Maharishi</a>
            <a href="Genesis.html">Genesis</a>
            <a href="#">IIMR Leading the Maharishi Initiative</a>
            <a href="g20.html">G20 Collaboration</a>
          </div>
          <div className="footer-section">
            <h4>Millets</h4>
            <a href="millets.html">Millets</a>
            <a href="ancientgrains.html">Ancient Grains</a>
          </div>
          <div className="footer-section">
            <h4>Millet Initiative</h4>
            <a href="sustainable_farming.html">Sustainable Farming</a>
            <a href="nutrition_benefits.html">Nutrition Benefits</a>
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