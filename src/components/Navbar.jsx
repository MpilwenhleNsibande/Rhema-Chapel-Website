import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/Rhema logo-2.png'; // Ensure this image exists in /src/assets/

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
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
    </nav>
  );
};

export default Navbar;
