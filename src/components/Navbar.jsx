import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
<<<<<<< HEAD
import logo from '../assets/Rhema logo-2.png'; // Ensure this image exists in /src/assets/
=======
import logo from '../assets/Rhema logo-2.png';
>>>>>>> 4c1284a (Update project with latest changes)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
<<<<<<< HEAD
      {/* Logo and Brand Name */}
      <div className="logo-container">
        <img src={logo} alt="Rhema Chapel Logo" className="logo-img" />
        <span className="logo-text">Rhema Chapel International Churches (Pretoria)</span>
      </div>

      {/* Hamburger Menu Button (Mobile) */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>

      {/* Mobile Dropdown Button */}
      <button className={`mobile-dropdown-btn ${menuOpen ? 'show' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>

        {/* EIWM Arms Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className="dropdown-title">EIWM Arms ▾</span>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/eiwm/rhema-chapel">Rhema Chapel Churches</Link></li>
              <li><Link to="/eiwm/ymts">Young Minister Teaching School (YMTS)</Link></li>
              <li><Link to="/eiwm/wovbti">Word of Victory Bible Training Institute (WOVBTI)</Link></li>
              <li><Link to="/eiwm/campus-fellowship">Rhema Chapel Campus Fellowship</Link></li>
              <li><Link to="/eiwm/preschools">Rhema Chapel Pre-Schools & Nursery Schools</Link></li>
              <li><Link to="/eiwm/dormitory">Dormitory Classes</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/sermons">Sermons</Link></li>
        <li><Link to="/goLive">Go Live</Link></li>
      </ul>
=======
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo-section">
          <img src={logo} alt="Rhema Logo" className="logo" />
          <span className="logo-title">Rhema Chapel International Churches (Pretoria)</span>
        </div>

        {/* Hamburger */}
        <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>

          <li
  className="dropdown-wrapper"
  onMouseEnter={() => setDropdownOpen(true)}
  onMouseLeave={() => setDropdownOpen(false)}
>
  <div
    className="dropdown"
    onClick={() => setDropdownOpen(!dropdownOpen)}
  >
    <span>EIWM Arms ▾</span>
  </div>

  <ul className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
    <li><Link to="/eiwm/rhema-chapel">Rhema Chapel Churches</Link></li>
    <li><Link to="/eiwm/ymts">Young Minister Teaching School (YMTS)</Link></li>
    <li><Link to="/eiwm/wovbti">WOVBTI</Link></li>
    <li><Link to="/eiwm/campus-fellowship">Campus Fellowship</Link></li>
    <li><Link to="/eiwm/preschools">Pre-Schools</Link></li>
    <li><Link to="/eiwm/dormitory">Dormitory Classes</Link></li>
  </ul>
</li>



          <li><Link to="/events">Events</Link></li>
          <li><Link to="/sermons">Sermons</Link></li>
          <li><Link to="/goLive">Go Live</Link></li>

          <li>
            <Link to="/join" className="cta-btn">Join Us</Link>
          </li>
        </ul>
      </div>
>>>>>>> 4c1284a (Update project with latest changes)
    </nav>
  );
};

export default Navbar;
