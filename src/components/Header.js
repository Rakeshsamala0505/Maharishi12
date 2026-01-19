
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
         <Link to="/" className="header-brand">
  <img
    src="/icons/indian_logo.png"
    alt="Logo 1"
    className="header-logo logo-left"
  />

  <img
    src="/icons/ICAR_LOGO.png"
    alt="Logo 2"
    className="header-logo logo-middle"
  />

  <img
    src="/icons/maharishi_logo.png"
    alt="Website Title"
    className="header-title"
  />
</Link>

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
                About Us
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
                About Us  
                <FontAwesomeIcon icon={faCaretDown} />
              </label>
              <ul className="drop-menu" ref={dropdownRefs.showDrop1}>
                <li>
                  <Link to="aboutmaharishi" className="subheader" onClick={closeMenuOnLinkClick}>
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
                    Organisation Chart
                  </Link>
                </li>
                <li>
                  <Link to="charter" className="subheader" onClick={closeMenuOnLinkClick}>
                    Charter
                  </Link>
                </li>
                {/* <li>
                  <Link to="Structure" className="subheader" onClick={closeMenuOnLinkClick}>
                    Governance
                  </Link>
                </li> */}
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
                  <Link to="/associated_programs" className="subheader" onClick={closeMenuOnLinkClick}>Associated programs</Link>
                </li>
                <li>
                  <Link to="/opportunities" className="subheader" onClick={closeMenuOnLinkClick}>Opportunities</Link>
                </li>
                <li>
                  <Link to="/earlycareerresearcher" className="subheader" onClick={closeMenuOnLinkClick}>Early Career Researchers</Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="desktop-item">
                Crops
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
                Crops  
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
                Our Impact
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
                Our Impact  
                <FontAwesomeIcon icon={faCaretDown} />
              </label>
              <ul className="drop-menu" ref={dropdownRefs.showDrop5}>
                
                
                <li>
                  <a href="/maharishilibrary" className="subheader" onClick={closeMenuOnLinkClick}>
                    MAHARISHI Library
                  </a>
                </li>
                <li>
                  <a href="\casestudies" className="subheader" onClick={closeMenuOnLinkClick}>
                    Case Studies
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/magic" className="desktop-item">
                MAGIC
              </a>
              <a
                 href="/magic"   // replace with your page/route
                 target="_blank"
                 rel="noopener noreferrer"
                 className="desktop-item mobile-item"
                 onClick={closeMenuOnLinkClick} // optional: closes menu if in mobile
               >
                 MAGIC
               </a>
            </li>
            <li>
              <a href="#" className="desktop-item">
                Outreach
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
                Outreach
                <FontAwesomeIcon icon={faCaretDown} />
              </label>
              <ul className="drop-menu" ref={dropdownRefs.showDrop4}>
                <li>
                  <a href="/events" className="subheader" onClick={closeMenuOnLinkClick}>
                    Events
                  </a>
                </li>
                <li>
                  <a href="/pressrelease" className="subheader" onClick={closeMenuOnLinkClick}>
                    Press Release
                  </a>
                </li>
                
                <li>
                  <Link to="/newsletter" className="subheader" onClick={closeMenuOnLinkClick}>
                    Newsletter
                  </Link>
                </li><li>
                  <Link to="/annual_reports" className="subheader" onClick={closeMenuOnLinkClick}>
                    Annual Reports
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="subheader" onClick={closeMenuOnLinkClick}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="subheader" onClick={closeMenuOnLinkClick}>
                    Blog
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="/databases" className="desktop-item">
                MAIS
              </a>
              <a
                 href="/databases"   // replace with your page/route
                 target="_blank"
                 rel="noopener noreferrer"
                 className="desktop-item mobile-item"
                 onClick={closeMenuOnLinkClick} // optional: closes menu if in mobile
               >
                 MAIS
               </a>
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
                  <a href="https://www.millets.res.in/"  target="_blank" rel="noopener noreferrer" className="subheader" onClick={closeMenuOnLinkClick}>
                    IIMR
                  </a>
                </li>
                <li>
                  <a href="https://www.nutrihubiimr.com//" target="_blank" rel="noopener noreferrer" className="subheader" onClick={closeMenuOnLinkClick}>
                    NUTRIHUB
                  </a>
                </li>
                <li>
                  <a href="https://icar.org.in/" target="_blank" rel="noopener noreferrer" className="subheader" onClick={closeMenuOnLinkClick}>
                    ICAR
                  </a>
                </li>
                <li>
                  <a href="https://www.icrisat.org/" target="_blank" rel="noopener noreferrer" className="subheader" onClick={closeMenuOnLinkClick}>
                    ICRISAT
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