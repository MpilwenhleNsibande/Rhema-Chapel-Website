import React from "react";
import "../styles/EIWMArms.css"; // Shared CSS file for all Arms
<<<<<<< HEAD
import chapelImage from "../assets/background.jpg";; // Ensure this image exists
=======
import chapelImage from "../assets/church_sit.jpg";; // Ensure this image exists
>>>>>>> 4c1284a (Update project with latest changes)

const RhemaChapel = () => {
  return (
    <div className="arm-page">
      <div className="banner">
        <img src={chapelImage} alt="Rhema Chapel Churches" className="banner-image" />
        <div className="banner-text">
          <h1>Rhema Chapel Churches</h1>
        </div>
      </div>

      <div className="content">
        <h2>About Rhema Chapel Churches</h2>
        <p>
          Rhema Chapel Churches is a network of vibrant churches dedicated to spreading the Word of God, emphasising its intergrity, nurturing believers, and transforming lives.
        </p>
        <p>
          We believe in teaching the undiluted word of faith, raising leaders, and fostering a strong community of believers.
        </p>

        <h2>Our Mission</h2>
        <ul>
          <li>Preaching the gospel with emphases on the intergrity of the Word of God</li>
          <li>Raising a new generation of spiritual leaders</li>
          <li>Building a strong, faith-driven community</li>
        </ul>

        <h2>Join Us</h2>
        <p>
          Become part of a thriving faith-based community where you can grow spiritually and impact lives positively. <strong>Check our weekly services and gives us a visit. We will be expecting you.</strong>
        </p>
        <p>
          <strong>
            We are small enough to know you, big enough to give you direction for destiny and large enough to minister to your spirit, soul and body.
          </strong>
        </p>

        <div className="cta-section">
          <button className="cta-button">Join Rhema Chapel</button>
        </div>
      </div>
    </div>
  );
};

export default RhemaChapel;
