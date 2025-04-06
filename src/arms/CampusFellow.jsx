import React from "react";
import "../styles/EIWMArms.css";
import bannerImage from "../assets/background.jpg"; // Add the actual image file

const CampusFellowship = () => {
  return (
    <div className="arm-page">
      <div className="banner">
        <img src={bannerImage} alt="RCCF" className="banner-image" />
        <h1 className="banner-text">Rhema Chapel Campus Fellowship</h1>
      </div>

      <div className="content">
        <h2>About RCCF</h2>
        <p>
          The <strong>Rhema Chapel Campus Fellowship (RCCF)</strong> is a campus based part of EIWM that serves as a platform for students to grow spiritually,
          academically, and socially. We create an environment for vibrant worship, dynamic teachings, and
          strong on campus Christian communities.
        </p>

        <h2>Activities</h2>
        <ul>
          <li>Weekly Bible Study and Prayer Meetings</li>
          <li>Mentorship and Academic Support Programs</li>
          <li>Evangelism and Community Outreach</li>
        </ul>

        <div className="cta-section">
          <button className="cta-button">Join RCCF</button>
        </div>

        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Email: rccf@rhema.org | Phone: +27 84 679 5141</p>
        </div>
      </div>
    </div>
  );
};

export default CampusFellowship;
