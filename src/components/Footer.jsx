import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
import "../styles/Footer.css";
import logo from "../assets/favicon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-glow-bg" />

      <div className="footer-container">
        {/* Left: Logo and Nav */}
        <div className="footer-left">
          <div className="logo-pulse">
            <img
              src={logo}
              alt="Rhema Chapel Logo"
              className="footer-logo"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </div>
          <nav className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/events">Events</Link>
            <Link to="/sermons">Sermons</Link>
            <Link to="/goLive">Go Live</Link>
          </nav>
        </div>

        {/* Center: Social & Contact */}
        <div className="footer-center">
          <div className="footer-socials">
            {[{
              href: "https://www.facebook.com/profile.php?id=100064327824076#",
              icon: <FaFacebookF />
            }, {
              href: "https://www.instagram.com/rhemachapelinternational_arcad/",
              icon: <FaInstagram />
            }, {
              href: "https://twitter.com",
              icon: <FaTwitter />
            }, {
              href: "https://m.youtube.com/@rhemachapelintlPTA",
              icon: <FaYoutube />
            }, {
              href: "https://www.tiktok.com/@rhemachapelinternational",
              icon: <FaTiktok />
            }].map(({ href, icon }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="social link">
                {icon}
              </a>
            ))}
          </div>

          <div className="footer-contact-card">
            <h3>Contact Us</h3>
            <p>📞 +27 84 679 5141</p>
            <p>📧 everincreasinwordsa@gmail.com</p>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Rhema Chapel International Churches (Pretoria). All rights reserved.</p>
          </div>
        </div>

        {/* Right: Futuristic Map */}
        <div className="footer-right">
          <div className="map-hologram-frame">
            <iframe
              title="Rhema Chapel Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.1938045155153!2d28.2021517!3d-25.7440855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95621d6d55feb3%3A0xa03d4b6b8b8abf13!2sRhema%20Chapel%20International%20Churches%20Pretoria!5e0!3m2!1sen!2sza!4v1712635299003!5m2!1sen!2sza"
              loading="lazy"
              allowFullScreen
              frameBorder="0"
            />
          </div>
        </div>
      </div>

      {/* Floating abstract shapes */}
      <div className="floating-shapes">
        <span className="shape circle"></span>
        <span className="shape triangle"></span>
        <span className="shape square"></span>
      </div>
    </footer>
  );
};

export default Footer;
