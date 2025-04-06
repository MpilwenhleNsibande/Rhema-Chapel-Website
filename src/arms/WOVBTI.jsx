import React from "react";
import "../styles/EIWMArms.css";
import bannerImage from "../assets/background.jpg"; // Add the actual image file

const WOVBTI = () => {
  return (
    <div className="arm-page">
      <div className="banner">
        <img src={bannerImage} alt="WOVBTI" className="banner-image" />
        <h1 className="banner-text">Word of Victory Bible Training Institute</h1>
      </div>

      <div className="content">
        <h2>About WOVBTI</h2>
        <p>
          The <strong>Word of Victory Bible Training Institute (WOVBTI)</strong> is committed to equipping believers with a deep
          understanding of biblical principles and practical ministry skills. Our mission is to raise an army of trained
          ministers equipped in correctly dividing the Word and ready to spread the Word.
        </p>

        <h2>Programs Offered</h2>
        <ul>
          <li>A detailed, subject specific bible study</li>
          <li>Ministerial Training and Leadership Development</li>
          <li>Practical Application in Rhema Chapel International Churches</li>
        </ul>

        <div className="cta-section">

          <p>The WOVBTI is strictly offered to Rhema Chapel International Churches members, <strong>Contact us and enquire on hoe you can be part of us.</strong></p>
          <button className="cta-button">Enquire Now</button>
        </div>

        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Email: everincreasinwordsa@gmail.com | Phone: +27 84 679 5141</p>
        </div>
      </div>
    </div>
  );
};

export default WOVBTI;
