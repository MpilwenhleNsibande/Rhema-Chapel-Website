import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/Rhema logo-2.png';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200); // small delay to allow moving cursor to menu
  };


  return (
    <nav className="navbar">
      

      <div className="navbar-container">
        {/* Logo */}
        <div className="logo-section">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Rhema Logo" className="logo" />
            <span className="logo-title"></span>
          </Link>
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
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
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
      <div className="navbar-inspire">
      <div className="scrolling-text-wrapper">
        <div className="scrolling-text">
          Welcome to <span className="highlight">Rhema Chapel International Churches (Pretoria)</span> — The Home of the Blessed People | Join Us Every Sunday 10:30am | Follow and Join Us Live Online!
        </div>
      </div>
</div>

    </nav>
  );
};

export default Navbar;
