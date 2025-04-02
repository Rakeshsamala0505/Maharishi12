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
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        event.target.id !== 'menu-btn'
      ) {
        setMenuOpen(false);
      }

      Object.values(dropdownRefs).forEach((ref) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setDropdowns((prevDropdowns) =>
            Object.keys(prevDropdowns).reduce((acc, key) => {
              acc[key] = false;
              return acc;
            }, {})
          );
        }
      });
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (dropdownKey) => {
    setDropdowns((prevDropdowns) => {
      const updatedDropdowns = Object.keys(prevDropdowns).reduce((acc, key) => {
        acc[key] = false;
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
      <div className="wrapper d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <Link to="/"><img
            src="/icons/maharshi_log.png"
            alt="Logo"
            className="logo"
            
          /></Link>
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
                Maharishi
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
                Maharishi &nbsp;
                <FontAwesomeIcon icon={faCaretDown} />
              </label>
              <ul className="drop-menu" ref={dropdownRefs.showDrop1}>
                <li>
                  <a href="#" className="subheader" onClick={closeMenuOnLinkClick}>
                    Purpose of Maharishi
                  </a>
                </li>
                <li>
                  <a href="#" className="subheader" onClick={closeMenuOnLinkClick}>
                    Genesis
                  </a>
                </li>
                <li>
                  <a href="#" className="subheader" onClick={closeMenuOnLinkClick}>
                    G20 and MAHARISHI
                  </a>
                </li>
                <li>
                  <a href="#" className="subheader" onClick={closeMenuOnLinkClick}>
                    Implementation of MAHARISHI
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="desktop-item">
                About
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
                About &nbsp;
                <FontAwesomeIcon icon={faCaretDown} />
              </label>
              <ul className="drop-menu" ref={dropdownRefs.showDrop2}>
                <li>
                  <a href="#" className="subheader" onClick={closeMenuOnLinkClick}>
                    Structure
                  </a>
                </li>
                <li>
                  <a href="#" className="subheader" onClick={closeMenuOnLinkClick}>
                    Expert Working Groups
                  </a>
                </li>
                <li>
                <Link to="/charter" className="subheader" onClick={closeMenuOnLinkClick}>Charter</Link>
                </li>
              </ul>
            </li>
            {/* ... (rest of the menu items) ... */}
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
                Millets &nbsp;
                <FontAwesomeIcon icon={faCaretDown} />
              </label>
              <ul className="drop-menu" ref={dropdownRefs.showDrop3}>
                <li>
                  <a href="#" className="subheader" onClick={closeMenuOnLinkClick}>
                    Millets
                  </a>
                </li>
                <li>
                  <a href="#" className="subheader" onClick={closeMenuOnLinkClick}>
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
                Millet Initiative &nbsp;
                <FontAwesomeIcon icon={faCaretDown} />
              </label>
              <ul className="drop-menu" ref={dropdownRefs.showDrop4}>
                <li>
                  <a href="#" className="subheader" onClick={closeMenuOnLinkClick}>
                    Sustainable Farming
                  </a>
                </li>
                <li>
                  <a href="#" className="subheader" onClick={closeMenuOnLinkClick}>
                    Nutrition Benefits
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
                Publications &nbsp;
                <FontAwesomeIcon icon={faCaretDown} />
              </label>
              <ul className="drop-menu" ref={dropdownRefs.showDrop5}>
                <li>
                  <a href="#" className="subheader" onClick={closeMenuOnLinkClick}>
                    IIMR Research reports
                  </a>
                </li>
                <li>
                  <a href="#" className="subheader" onClick={closeMenuOnLinkClick}>
                    Annual Reports
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
                Media &nbsp;
                <FontAwesomeIcon icon={faCaretDown} />
              </label>
              <ul className="drop-menu" ref={dropdownRefs.showDrop6}>
                <li>
                  <a href="#" className="subheader" onClick={closeMenuOnLinkClick}>
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
                External Links &nbsp;
                <FontAwesomeIcon icon={faCaretDown} />
              </label>
              <ul className="drop-menu" ref={dropdownRefs.showDrop7}>
                <li>
                  <a href="#" className="subheader" onClick={closeMenuOnLinkClick}>
                    IIMR
                  </a>
                </li>
                <li>
                  <a href="#" className="subheader" onClick={closeMenuOnLinkClick}>
                    NUTRIHUB
                  </a>
                </li>
                <li>
                  <a href="#" className="subheader" onClick={closeMenuOnLinkClick}>
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
