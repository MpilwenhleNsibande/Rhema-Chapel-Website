import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
import "../styles/Footer.css";
import logo from "../assets/favicon.png"; // Ensure correct logo path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left: Logo & Navigation Links */}
        <div className="footer-left">
          <img
            src={logo}
            alt="Rhema Chapel Logo"
            className="footer-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
          <nav className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/events">Events</Link>
            <Link to="/sermons">Sermons</Link>
            <Link to="/contact">Go Live</Link>
          </nav>
        </div>

        {/* Center: Social Media & Contact Details */}
        <div className="footer-center">
          
          {/* Social Media Icons */}
          <div className="footer-socials">
            <a href="https://www.facebook.com/profile.php?id=100064327824076#" target="_blank" rel="noopener noreferrer"><FaFacebook className="social-icon" /></a>
            <a href="https://www.instagram.com/rhemachapelinternational_arcad/" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-icon" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="social-icon" /></a>
            <a href="https://m.youtube.com/@rhemachapelintlPTA" target="_blank" rel="noopener noreferrer"><FaYoutube className="social-icon" /></a>
            <a href="https://www.tiktok.com/@rhemachapelinternational" target="_blank" rel="noopener noreferrer"><FaTiktok className="social-icon" /></a>
          </div>

          {/* Contact Information */}
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>📞 +27 84 679 5141</p>
            <p>📧 everincreasinwordsa@gmail.com</p>
          </div>

          {/* Copyright */}
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Rhema Chapel International Churches (Pretoria). All rights reserved.</p>
          </div>

        </div>

        {/* Right: Google Map */}
        <div className="footer-right">
          <iframe
            title="Rhema Chapel Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.1938045155153!2d28.2021517!3d-25.7440855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95621d6d55feb3%3A0xa03d4b6b8b8abf13!2sRhema%20Chapel%20International%20Churches%20Pretoria!5e0!3m2!1sen!2sza!4v1712635299003!5m2!1sen!2sza"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

        </div>


      </div>
    </footer>
  );
};

export default Footer;
