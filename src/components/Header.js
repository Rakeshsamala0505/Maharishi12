
import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    showDrop1: false,
    showDrop2: false,
    showDrop3: false,
    showDrop4: false,
    showDrop5: false,
    showDrop6: false,
    showDrop7: false,
    showSubDrop1: false,
  });

  

  const sidebarRef = useRef(null);
  const dropdownRefs = {
    showDrop1: useRef(null),
    showDrop2: useRef(null),
    showDrop3: useRef(null),
    showDrop4: useRef(null),
    showDrop5: useRef(null),
    showDrop6: useRef(null),
    showDrop7: useRef(null),
    showSubDrop1: useRef(null),
  };
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        event.target.id !== 'menu-btn'
      ) {
        setMenuOpen(false);
        setDropdowns((prevDropdowns) =>
          Object.keys(prevDropdowns).reduce((acc, key) => {
            acc[key] = false;
            return acc;
          }, {})
        );
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (dropdownKey, isNested = false) => {
    setDropdowns((prevDropdowns) => {
      // For nested dropdown, only toggle the specified key without resetting others
      if (isNested) {
        return { ...prevDropdowns, [dropdownKey]: !prevDropdowns[dropdownKey] };
      }
      // For top-level dropdowns, reset all except the nested dropdown
      const updatedDropdowns = Object.keys(prevDropdowns).reduce((acc, key) => {
        if (key === 'showSubDrop1') {
          acc[key] = prevDropdowns[key]; // Preserve nested dropdown state
        } else {
          acc[key] = false;
        }
        return acc;
      }, {});
      return { ...updatedDropdowns, [dropdownKey]: !prevDropdowns[dropdownKey] };
    });
  };

  const closeMenuOnLinkClick = () => {
    setMenuOpen(false);
    setDropdowns((prevDropdowns) =>
      Object.keys(prevDropdowns).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {})
    );
  };

  return (
    <nav>
      <div className="wrapper d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center">
          <Link to="/"><img
            src="/icons/mylogo1.png"
            alt="Logo"
            className="logo"/></Link>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`} ref={sidebarRef}>
            <label htmlFor="close-btn" className="btn close-btn">
              <FontAwesomeIcon icon={faTimes} />
            </label>
            <li>
              <a href="/" onClick={closeMenuOnLinkClick}>
                <FontAwesomeIcon icon={faHome} />
              </a>
            </li>
            <li>
              <a href="#" className="desktop-item">
                About
              </a>
              <input
                type="checkbox"
                id="showDrop1"
                className="dropdown-toggle"
                checked={dropdowns.showDrop1}
                onChange={() => toggleDropdown('showDrop1')}
                style={{ display: 'none' }}
              />
              <label htmlFor="showDrop1" className="mobile-item">
                About  
                <FontAwesomeIcon icon={faCaretDown} />
              </label>
              <ul className="drop-menu" ref={dropdownRefs.showDrop1}>
                <li>
                  <Link to="Purpose" className="subheader" onClick={closeMenuOnLinkClick}>
                    About Maharishi
                  </Link>
                </li>
                <li>
                  <Link to="genesis" className="subheader" onClick={closeMenuOnLinkClick}>
                    Genesis
                  </Link>
                </li>
                <li>
                  <Link to="organisationalchart" className="subheader" onClick={closeMenuOnLinkClick}>
                    Organisational Chart
                  </Link>
                </li>
                <li>
                  <Link to="Implementation" className="subheader" onClick={closeMenuOnLinkClick}>
                    Charter
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="desktop-item">
                Our Work
              </a>
              <input
                type="checkbox"
                id="showDrop2"
                className="dropdown-toggle"
                checked={dropdowns.showDrop2}
                onChange={() => toggleDropdown('showDrop2')}
                style={{ display: 'none' }}
              />
              <label htmlFor="showDrop2" className="mobile-item">
                Our Work  
                <FontAwesomeIcon icon={faCaretDown} />
              </label>
              <ul className="drop-menu" ref={dropdownRefs.showDrop2}>
                <li>
                  <Link to="Structure" className="subheader" onClick={closeMenuOnLinkClick}>
                    Steering Committee
                  </Link>
                </li>
                <li className="nested-menu">
                  <span className="subheader desktop-subheader">
                    Associated  Programs <FontAwesomeIcon icon={faCaretDown} />
                  </span>
                  <input
                    type="checkbox"
                    id="showSubDrop1"
                    className="dropdown-toggle"
                    checked={dropdowns.showSubDrop1}
                    onChange={() => toggleDropdown('showSubDrop1', true)}
                    style={{ display: 'none' }}
                  />
                  <label htmlFor="showSubDrop1" className="mobile-item mobile-subheader" style={{ fontSize: '14px' }}>
                  Associated Programs  
                    <FontAwesomeIcon icon={faCaretDown} />
                  </label>
                  <ul
                    className={`nested-drop-menu ${dropdowns.showSubDrop1 ? 'visible' : ''}`}
                    ref={dropdownRefs.showSubDrop1}>
                    <li><Link to="/coordination_commitee" onClick={closeMenuOnLinkClick}>Coordination Committee</Link></li>
                    <li><Link to="/research_commitee" onClick={closeMenuOnLinkClick}>Research Committee</Link></li>
                    <li><Link to="/scientific_commitee" onClick={closeMenuOnLinkClick}>Scientific Board</Link></li>
                    <li><Link to="/expert_working_group" onClick={closeMenuOnLinkClick}>Expert Working Groups</Link></li>
                    <li><Link to="/secretariat_commitee" onClick={closeMenuOnLinkClick}>Secretariat</Link></li>
                  </ul>
                </li>
                <li>
                  <Link to="/charter" className="subheader" onClick={closeMenuOnLinkClick}>Opportunities</Link>
                </li>
                <li>
                  <Link to="/charter" className="subheader" onClick={closeMenuOnLinkClick}>Early Career Researchers</Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="desktop-item">
                Millets
              </a>
              <input
                type="checkbox"
                id="showDrop3"
                className="dropdown-toggle"
                checked={dropdowns.showDrop3}
                onChange={() => toggleDropdown('showDrop3')}
                style={{ display: 'none' }}
              />
              <label htmlFor="showDrop3" className="mobile-item">
                Millets  
                <FontAwesomeIcon icon={faCaretDown} />
              </label>
              <ul className="drop-menu" ref={dropdownRefs.showDrop3}>
                <li>
                  <Link to="/millets" className="subheader" onClick={closeMenuOnLinkClick}>
                    Millets
                  </Link>
                </li>
                <li>
                  <a href="/ancient_grains" className="subheader" onClick={closeMenuOnLinkClick}>
                    Ancient Grains
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="desktop-item">
                Millet Initiative
              </a>
              <input
                type="checkbox"
                id="showDrop4"
                className="dropdown-toggle"
                checked={dropdowns.showDrop4}
                onChange={() => toggleDropdown('showDrop4')}
                style={{ display: 'none' }}
              />
              <label htmlFor="showDrop4" className="mobile-item">
                Millet Initiative  
                <FontAwesomeIcon icon={faCaretDown} />
              </label>
              <ul className="drop-menu" ref={dropdownRefs.showDrop4}>
                <li>
                  <Link to="/sustainable_farming" className="subheader" onClick={closeMenuOnLinkClick}>
                    Sustainable Farming
                  </Link>
                </li>
                <li>
                  <a href="/nutrition_benefits" className="subheader" onClick={closeMenuOnLinkClick}>
                    IMAGC
                  </a>
                </li>
                <li>
                  <a href="/nutrition_benefits" className="subheader" onClick={closeMenuOnLinkClick}>
                    Events
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="desktop-item">
                Publications
              </a>
              <input
                type="checkbox"
                id="showDrop5"
                className="dropdown-toggle"
                checked={dropdowns.showDrop5}
                onChange={() => toggleDropdown('showDrop5')}
                style={{ display: 'none' }}
              />
              <label htmlFor="showDrop5" className="mobile-item">
                Publications  
                <FontAwesomeIcon icon={faCaretDown} />
              </label>
              <ul className="drop-menu" ref={dropdownRefs.showDrop5}>
                <li>
                  <a href="/IIMRResearch" className="subheader" onClick={closeMenuOnLinkClick}>
                    Research reports
                  </a>
                </li>
                <li>
                  <a href="#" className="subheader" onClick={closeMenuOnLinkClick}>
                    Annual Reports
                  </a>
                </li>
                <li>
                  <a href="#" className="subheader" onClick={closeMenuOnLinkClick}>
                    MAHARISHI Library
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="desktop-item">
                Media
              </a>
              <input
                type="checkbox"
                id="showDrop6"
                className="dropdown-toggle"
                checked={dropdowns.showDrop6}
                onChange={() => toggleDropdown('showDrop6')}
                style={{ display: 'none' }}
              />
              <label htmlFor="showDrop6" className="mobile-item">
                Media  
                <FontAwesomeIcon icon={faCaretDown} />
              </label>
              <ul className="drop-menu" ref={dropdownRefs.showDrop6}>
                <li>
                  <a href="newsletter" className="subheader" onClick={closeMenuOnLinkClick}>
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="#" className="subheader" onClick={closeMenuOnLinkClick}>
                    Press Releases
                  </a>
                </li>
                <li>
                  <a href="#" className="subheader" onClick={closeMenuOnLinkClick}>
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="subheader" onClick={closeMenuOnLinkClick}>
                    Blog
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="desktop-item">
                External Links
              </a>
              <input
                type="checkbox"
                id="showDrop7"
                className="dropdown-toggle"
                checked={dropdowns.showDrop7}
                onChange={() => toggleDropdown('showDrop7')}
                style={{ display: 'none' }}
              />
              <label htmlFor="showDrop7" className="mobile-item">
                External Links  
                <FontAwesomeIcon icon={faCaretDown} />
              </label>
              <ul className="drop-menu" ref={dropdownRefs.showDrop7}>
                <li>
                  <a href="https://www.millets.res.in/" className="subheader" onClick={closeMenuOnLinkClick}>
                    IIMR
                  </a>
                </li>
                <li>
                  <a href="https://www.nutrihubiimr.com//" className="subheader" onClick={closeMenuOnLinkClick}>
                    NUTRIHUB
                  </a>
                </li>
                <li>
                  <a href="https://icar.org.in/" className="subheader" onClick={closeMenuOnLinkClick}>
                    ICAR
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <label htmlFor="menu-btn" className={`btn menu-btn ${menuOpen ? 'hidden' : ''}`}>
          <FontAwesomeIcon icon={faBars} />
        </label>
        <input type="checkbox" id="menu-btn" checked={menuOpen} onChange={toggleMenu} style={{ display: 'none' }} />
        <input type="checkbox" id="close-btn" checked={!menuOpen} onChange={toggleMenu} style={{ display: 'none' }} />
      </div>
    </nav>
  );
};

export default Header; 