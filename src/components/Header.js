import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Header = () => {
  return (
    <nav className="d-flex justify-content-center align-items-center">
      {/* Logo Section */}
      <div className="container-fluid">
      <div className="logo">
        <Link to="/icons">
          <img src="/icons/maharshi_log.png" alt="Logo" className="logo-img" />
        </Link>
      </div>
      <div className="wrapper">
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul className="nav-links">
          <label htmlFor="close-btn" className="btn close-btn">
            <i className="fas fa-times"></i>
          </label>
          <li>
            <a href="/">
              <i className="fas fa-home"></i>
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()} className="desktop-item">MAHARISHI</a>
            <input type="checkbox" id="showDrop1" />
            <label htmlFor="showDrop1" className="mobile-item">
              Maharishi &nbsp;<i className="fa fa-caret-down" aria-hidden="true"></i>
            </label>
            <ul className="drop-menu">
            <li><Link to="/purpose">Purpose of Maharishi</Link></li>
            <li><Link to ="/genesis">Genesis</Link></li>
              <li><Link to="/G20">G20 and Maharishi</Link></li>
              <li><Link to="/Implementation">Implementation of Maharishi</Link></li>
            </ul>
          </li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()} className="desktop-item">ABOUT</a>
            <input type="checkbox" id="showDrop2" />
            <label htmlFor="showDrop2" className="mobile-item">
              About &nbsp;<i className="fa fa-caret-down" aria-hidden="true"></i>
            </label>
            <ul className="drop-menu">
              <li><Link to ="/Structure">Structure</Link></li>
              <li><Link to="/ExpertWorkingGroups">Expert Working Groups</Link></li>
              <li><Link to="/Charter">Charter</Link></li>
            </ul>
          </li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()} className="desktop-item">MILLETS</a>
            <input type="checkbox" id="showDrop3" />
            <label htmlFor="showDrop3" className="mobile-item">
              Millets &nbsp;<i className="fa fa-caret-down" aria-hidden="true"></i>
            </label>
            <ul className="drop-menu">
              <li><Link to="/Millets">Millets</Link></li>
              <li><Link to="/AncientGrains">Ancient Grains</Link></li>
            </ul>
          </li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()} className="desktop-item">MILLET INITIATIVE</a>
            <input type="checkbox" id="showDrop4" />
            <label htmlFor="showDrop4" className="mobile-item">
              Millets Initiative &nbsp;<i className="fa fa-caret-down" aria-hidden="true"></i>
            </label>
            <ul className="drop-menu">
              <li><Link to="/SustainableFarming">Sustainable Farming</Link></li>
              <li><Link to="#">Nutrition Benefits</Link></li>
              <li><Link to="/NutritionBenefits">Projects</Link></li>
              <li><Link to="/Projects">Partners</Link></li>
              <li><Link to="/Partners">Themes</Link></li>
            </ul>
          </li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()} className="desktop-item">PUBLICATIONS</a>
            <input type="checkbox" id="showDrop5" />
            <label htmlFor="showDrop5" className="mobile-item">
              Publications &nbsp;<i className="fa fa-caret-down" aria-hidden="true"></i>
            </label>
            <ul className="drop-menu">
              <li><Link to="/IIMRResearch">IIMR research reports</Link></li>
              <li><Link to="/AnnualReports">Annual reports</Link></li>
            </ul>
          </li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()} className="desktop-item">MEDIA</a>
            <input type="checkbox" id="showDrop6" />
            <label htmlFor="showDrop6" className="mobile-item">
              Media &nbsp;<i className="fa fa-caret-down" aria-hidden="true"></i>
            </label>
            <ul className="drop-menu">
              <li><Link to="/Newsletter">Newsletter</Link></li>
              <li><Link to="/Pressrelease">Press Releases</Link></li>
              <li><Link to="/Gallery">Gallery</Link></li>
            </ul>
          </li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()} className="desktop-item">EXTERNAL LINKS</a>
            <input type="checkbox" id="showDrop7" />
            <label htmlFor="showDrop7" className="mobile-item">
              External Links &nbsp;<i className="fa fa-caret-down" aria-hidden="true"></i>
            </label>
            <ul className="drop-menu">
              <li><Link to="#">IIMR</Link></li>
              <li><Link to="#">NUTRIHUB</Link></li>
              <li><Link to="#">ICAR</Link></li>
              <li><Link to="#">FUNDING ORG</Link></li>
            </ul>
          </li>
        </ul>
        <label htmlFor="menu-btn" className="btn menu-btn">
          <i className="fas fa-bars"></i>
        </label>
      </div>
      </div>
    </nav>
  );
};

export default Header;
