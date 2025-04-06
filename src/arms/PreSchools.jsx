import React from "react";
import "../styles/EIWMArms.css";
import bannerImage from "../assets/background.jpg"; // Add the actual image file

const PreSchool = () => {
  return (
    <div className="arm-page">
      <div className="banner">
        <img src={bannerImage} alt="Pre-Schools" className="banner-image" />
        <h1 className="banner-text">Rhema Chapel Pre-Schools & Nursery Schools</h1>
      </div>

      <div className="content">
        <h2>About Our Schools</h2>
        <p>
          The <strong>Rhema Chapel Pre-Schools & Nursery Schools</strong> provide a nurturing and faith-based learning environment
          for children. We focus on holistic education—intellectually, socially, and spiritually.
        </p>

        <h2>Programs Offered</h2>
        <ul>
          <li>Early Childhood Education (Ages 2-5)</li>
          <li>Christian-based Learning Curriculum</li>
          <li>After-School Care and Enrichment Programs</li>
        </ul>

        <div className="cta-section">
          <button className="cta-button">Enroll Today</button>
        </div>

        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Email: everincreasinwordsa@gmail.com | Phone: +27 84 679 5141</p>
        </div>
      </div>
    </div>
  );
};

export default PreSchool;
