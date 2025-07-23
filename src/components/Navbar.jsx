import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/Rhema logo-2.png';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu and dropdown on menu item click
  const handleMenuItemClick = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo-section">
          <Link to="/" className="logo-link" onClick={handleMenuItemClick}>
            <img src={logo} alt="Rhema Logo" className="logo" />
            <span className="logo-title"></span>
          </Link>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={handleMenuItemClick}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleMenuItemClick}>
              ABOUT
            </Link>
          </li>

          <li
            className="dropdown-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="dropdown"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span>EIWM ARMS ▾</span>
            </div>

            <ul className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
              <li>
                <Link to="/eiwm/rhema-chapel" onClick={handleMenuItemClick}>
                  RHEMA CHAPEL CHURCHES
                </Link>
              </li>
              <li>
                <Link to="/eiwm/ymts" onClick={handleMenuItemClick}>
                  YOUNG MINISTER'S TEACHING SCHOOL (YMTS)
                </Link>
              </li>
              <li>
                <Link to="/eiwm/wovbti" onClick={handleMenuItemClick}>
                  WOVBTI
                </Link>
              </li>
              <li>
                <Link to="/eiwm/campus-fellowship" onClick={handleMenuItemClick}>
                  CAMPUS FELLOWSHIP
                </Link>
              </li>
              <li>
                <Link to="/eiwm/preschools" onClick={handleMenuItemClick}>
                  PRE-SCHOOLS
                </Link>
              </li>
              <li>
                <Link to="/eiwm/dormitory" onClick={handleMenuItemClick}>
                  DORMITORY CLASSES
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/events" onClick={handleMenuItemClick}>
              EVENTS
            </Link>
          </li>
          <li>
            <Link to="/sermons" onClick={handleMenuItemClick}>
              SERMONS
            </Link>
          </li>
          <li>
            <Link to="/goLive" onClick={handleMenuItemClick}>
              GO LIVE
            </Link>
          </li>

          <li>
            <Link to="/join" className="cta-btn" onClick={handleMenuItemClick}>
              Join Us
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-inspire">
        <div className="scrolling-text-wrapper">
          <div className="scrolling-text">
            Welcome to{" "}
            <span className="highlight">
              Rhema Chapel International Churches (Pretoria)
            </span>{" "}
            — The Home of the Blessed People | Join Us Every Sunday 10:30am | Follow
            and Join Us Live Online!
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

