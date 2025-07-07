import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        event.target.id !== 'menu-btn'
      ) {
        setMenuOpen(false);
        closeAllDropdowns();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleDropdown = (dropdownKey, isNested = false) => {
    setDropdowns((prev) => {
      if (isNested) {
        return { ...prev, [dropdownKey]: !prev[dropdownKey] };
      }

      // Close all dropdowns except the one being toggled
      const updated = Object.keys(prev).reduce((acc, key) => {
        acc[key] = key === dropdownKey ? !prev[key] : false;
        return acc;
      }, {});
      return updated;
    });
  };

  const closeAllDropdowns = () => {
    setDropdowns((prev) =>
      Object.keys(prev).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {})
    );
  };

  const closeMenuOnLinkClick = () => {
    setMenuOpen(false);
    closeAllDropdowns();
  };

  return (
    <nav>
      <div className="wrapper d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center">
          <Link to="/">
            <img src="/icons/mylogo1.png" alt="Logo" className="logo" />
          </Link>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`} ref={sidebarRef}>
            <label htmlFor="close-btn" className="btn close-btn">
              <FontAwesomeIcon icon={faTimes} />
            </label>

            <li>
              <Link to="/" onClick={closeMenuOnLinkClick}>
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </li>

            {/* About */}
            <li
              onMouseEnter={() => toggleDropdown('showDrop1')}
              onMouseLeave={closeAllDropdowns}
            >
              <a href="#" className="desktop-item">About</a>
              <label htmlFor="drop1" className="mobile-item" onClick={() => toggleDropdown('showDrop1')}>
                About <FontAwesomeIcon icon={faCaretDown} />
              </label>
              <ul className={`drop-menu ${dropdowns.showDrop1 ? 'visible' : ''}`}>
                <li><Link to="/Purpose" onClick={closeMenuOnLinkClick}>About Maharishi</Link></li>
                <li><Link to="/genesis" onClick={closeMenuOnLinkClick}>Genesis</Link></li>
                <li><Link to="/organisationalchart" onClick={closeMenuOnLinkClick}>Organisational Chart</Link></li>
                <li><Link to="/Implementation" onClick={closeMenuOnLinkClick}>Charter</Link></li>
              </ul>
            </li>

            {/* Our Work */}
            <li
              onMouseEnter={() => toggleDropdown('showDrop2')}
              onMouseLeave={closeAllDropdowns}
            >
              <a href="#" className="desktop-item">Our Work</a>
              <label htmlFor="drop2" className="mobile-item" onClick={() => toggleDropdown('showDrop2')}>
                Our Work <FontAwesomeIcon icon={faCaretDown} />
              </label>
              <ul className={`drop-menu ${dropdowns.showDrop2 ? 'visible' : ''}`}>
                <li><Link to="/Structure" onClick={closeMenuOnLinkClick}>Steering Committee</Link></li>

                <li className="nested-menu">
                  <span className="desktop-subheader">Associated Programs <FontAwesomeIcon icon={faCaretDown} /></span>
                  <label className="mobile-subheader" onClick={() => toggleDropdown('showSubDrop1', true)}>
                    Associated Programs <FontAwesomeIcon icon={faCaretDown} />
                  </label>
                  <ul className={`nested-drop-menu ${dropdowns.showSubDrop1 ? 'visible' : ''}`}>
                    <li><Link to="/coordination_commitee" onClick={closeMenuOnLinkClick}>Coordination Committee</Link></li>
                    <li><Link to="/research_commitee" onClick={closeMenuOnLinkClick}>Research Committee</Link></li>
                    <li><Link to="/scientific_commitee" onClick={closeMenuOnLinkClick}>Scientific Board</Link></li>
                    <li><Link to="/expert_working_group" onClick={closeMenuOnLinkClick}>Expert Working Groups</Link></li>
                    <li><Link to="/secretariat_commitee" onClick={closeMenuOnLinkClick}>Secretariat</Link></li>
                  </ul>
                </li>

                <li><Link to="/charter" onClick={closeMenuOnLinkClick}>Opportunities</Link></li>
                <li><Link to="/charter" onClick={closeMenuOnLinkClick}>Early Career Researchers</Link></li>
              </ul>
            </li>

            {/* Millets */}
            <li
              onMouseEnter={() => toggleDropdown('showDrop3')}
              onMouseLeave={closeAllDropdowns}
            >
              <a href="#" className="desktop-item">Millets</a>
              <label htmlFor="drop3" className="mobile-item" onClick={() => toggleDropdown('showDrop3')}>
                Millets <FontAwesomeIcon icon={faCaretDown} />
              </label>
              <ul className={`drop-menu ${dropdowns.showDrop3 ? 'visible' : ''}`}>
                <li><Link to="/millets" onClick={closeMenuOnLinkClick}>Millets</Link></li>
                <li><Link to="/ancient_grains" onClick={closeMenuOnLinkClick}>Ancient Grains</Link></li>
              </ul>
            </li>

            {/* Millet Initiative */}
            <li
              onMouseEnter={() => toggleDropdown('showDrop4')}
              onMouseLeave={closeAllDropdowns}
            >
              <a href="#" className="desktop-item">Millet Initiative</a>
              <label htmlFor="drop4" className="mobile-item" onClick={() => toggleDropdown('showDrop4')}>
                Millet Initiative <FontAwesomeIcon icon={faCaretDown} />
              </label>
              <ul className={`drop-menu ${dropdowns.showDrop4 ? 'visible' : ''}`}>
                <li><Link to="/sustainable_farming" onClick={closeMenuOnLinkClick}>Sustainable Farming</Link></li>
                <li><Link to="/nutrition_benefits" onClick={closeMenuOnLinkClick}>IMAGC</Link></li>
                <li><Link to="/nutrition_benefits" onClick={closeMenuOnLinkClick}>Events</Link></li>
              </ul>
            </li>

            {/* Publications */}
            <li
              onMouseEnter={() => toggleDropdown('showDrop5')}
              onMouseLeave={closeAllDropdowns}
            >
              <a href="#" className="desktop-item">Publications</a>
              <label htmlFor="drop5" className="mobile-item" onClick={() => toggleDropdown('showDrop5')}>
                Publications <FontAwesomeIcon icon={faCaretDown} />
              </label>
              <ul className={`drop-menu ${dropdowns.showDrop5 ? 'visible' : ''}`}>
                <li><Link to="/IIMRResearch" onClick={closeMenuOnLinkClick}>Research Reports</Link></li>
                <li><a href="#" onClick={closeMenuOnLinkClick}>Annual Reports</a></li>
                <li><a href="#" onClick={closeMenuOnLinkClick}>MAHARISHI Library</a></li>
              </ul>
            </li>

            {/* Media */}
            <li
              onMouseEnter={() => toggleDropdown('showDrop6')}
              onMouseLeave={closeAllDropdowns}
            >
              <a href="#" className="desktop-item">Media</a>
              <label htmlFor="drop6" className="mobile-item" onClick={() => toggleDropdown('showDrop6')}>
                Media <FontAwesomeIcon icon={faCaretDown} />
              </label>
              <ul className={`drop-menu ${dropdowns.showDrop6 ? 'visible' : ''}`}>
                <li><Link to="/newsletter" onClick={closeMenuOnLinkClick}>Newsletter</Link></li>
                <li><a href="#" onClick={closeMenuOnLinkClick}>Press Releases</a></li>
                <li><a href="#" onClick={closeMenuOnLinkClick}>Gallery</a></li>
                <li><a href="#" onClick={closeMenuOnLinkClick}>Blog</a></li>
              </ul>
            </li>

            {/* External Links */}
            <li
              onMouseEnter={() => toggleDropdown('showDrop7')}
              onMouseLeave={closeAllDropdowns}
            >
              <a href="#" className="desktop-item">External Links</a>
              <label htmlFor="drop7" className="mobile-item" onClick={() => toggleDropdown('showDrop7')}>
                External Links <FontAwesomeIcon icon={faCaretDown} />
              </label>
              <ul className={`drop-menu ${dropdowns.showDrop7 ? 'visible' : ''}`}>
                <li><a href="https://www.millets.res.in/" onClick={closeMenuOnLinkClick}>IIMR</a></li>
                <li><a href="https://www.nutrihubiimr.com/" onClick={closeMenuOnLinkClick}>NUTRIHUB</a></li>
                <li><a href="https://icar.org.in/" onClick={closeMenuOnLinkClick}>ICAR</a></li>
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
