import React from "react";
import "../styles/EIWMArms.css";
import bannerImage from "../assets/IMG_2016.jpg"; // Ensure this file exists

const WOVBTI = () => {
  return (
    <div className="arm-page">
      {/* Banner Section */}
      <div className="banner">
        <img src={bannerImage} alt="WOVBTI Banner" className="banner-image" />
        <h1 className="banner-text">Word of Victory Bible Training Institute</h1>
      </div>

      {/* Main Content */}
      <div className="content">
        <h2>About WOVBTI</h2>
        <p>
          The <strong>Word of Victory Bible Training Institute (WOVBTI)</strong> is committed to equipping believers with a deep
          understanding of biblical principles and practical ministry skills. Our mission is to raise an army of trained
          ministers equipped to rightly divide the Word of Truth and ready to spread the Gospel.
        </p>

        <h2>Programs Offered</h2>
        <ul>
          <li>Detailed, subject-specific Bible study</li>
          <li>Ministerial training and leadership development</li>
          <li>Practical application within Rhema Chapel International Churches</li>
        </ul>

        {/* Call to Action */}
        <div className="cta-section">
          <p>
            WOVBTI is currently offered exclusively to Rhema Chapel International Churches members.{" "}
            <strong>Contact us to find out how you can be part of the institute.</strong>
          </p>
          <button className="cta-button">Enquire Now</button>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Email: everincreasinwordsa@gmail.com</p>
          <p>Phone: +27 84 679 5141</p>
        </div>
      </div>
    </div>
  );
};

export default WOVBTI;
