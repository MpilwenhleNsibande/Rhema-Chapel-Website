import React from "react";
import "../styles/EIWMArms.css";
import bannerImage from "../assets/background.jpg"; // Add the actual image file

const Dormitory = () => {
  return (
    <div className="arm-page">
      <div className="banner">
        <img src={bannerImage} alt="Dormitory Classes" className="banner-image" />
        <h1 className="banner-text">Dormitory Classes</h1>
      </div>

      <div className="content">
        <h2>About Dormitory Classes</h2>
        <p>
          The <strong>Dormitory Classes</strong> hand in hand with <strong>Rhema Chapel Library Services</strong> provide an opportunity for residents in the Rhema Chapel dormitories to engage
          in structured spiritual growth programs, ministerial tutoring, and personal development.
        </p>

        <h2>Programs Available</h2>
        <ul>
          <li>A wide range of pre-recorded messages on different aspects of the christain faith</li>
          <li>World class bible study bibles and materials</li>
          <li>Books on spiritual growth,leadership, personal development and ministry</li>
          <li>Nightly Devotions and Bible Studies</li>
          <li>Ministerial Tutoring and Mentorship</li>
          <li>Leadership and Character Building</li>
        </ul>

        <div className="cta-section">
          <button className="cta-button">Get Involved</button>
        </div>

        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Email: dorms@rhema.org | Phone: +27 84 679 5141</p>
        </div>
      </div>
    </div>
  );
};

export default Dormitory;
