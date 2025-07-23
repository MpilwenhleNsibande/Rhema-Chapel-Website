import React, { useState, useEffect, useRef } from "react";
import "../styles/Header.css";

import pastor from "../assets/ps_s.jpeg";
import church11 from "../assets/sit.jpg";
import church22 from "../assets/Wom.jpg";
import church33 from "../assets/Worship.jpg";
import church44 from "../assets/Wom_Wor2.jpg";
import church55 from "../assets/Child.jpg";
import church66 from "../assets/MamR2.jpg";
import church77 from "../assets/Sit2.jpg";
import church88 from "../assets/WomWor.jpg";
import church99 from "../assets/Choir_J.jpg";
import church101 from "../assets/Att.jpg";
import pastorWife from "../assets/hod1 (2).jpg";

const images = [church11, church22, church33, church44, church55, church66, church77, church88, church99, church101];

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Image carousel every 4s
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Scroll listener for parallax background effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  return (
    <header className="landing-header" style={{ backgroundPositionY: `${scrollY * 0.3}px` }}>
      {/* Particle Overlay */}
      <div className="particle-overlay" aria-hidden="true">
        {[...Array(40)].map((_, i) => (
          <span key={i} className="particle" />
        ))}
      </div>

      {/* Glitchy Welcome Tag */}
      <div className="glitch-wrapper">
        <div className="welcome-box">
          You're Welcome to
        </div>
      </div>

      <div className="hero-section">
        <h1 className="church-title">
          Rhema Chapel <span className="highlight">International</span>
          <br />
          Churches <span className="pretoria">(Pretoria)</span>
        </h1>
        <p className="church-subtitle">
          The Home of the <strong>Blessed People</strong> — a People of the Word{" "}
          <em>changing their World</em>.
        </p>

        <div className="cta-buttons">
          <button className="glow-button primary" aria-label="Join Us on Sunday">
            Join Us on Sunday
          </button>
          <button className="glow-button secondary" aria-label="Plan a Visit">
            Plan a Visit
          </button>
        </div>

        <section className="pastors-container">
  <h2 className="section-title">Meet Our Pastors</h2>

  <div className="pastor-card">
    <img src={pastor} alt="Pastor Gospel Azuatalam" className="pastor-img" />
    <div>
      <h4>Pastor Gospel Azuatalam</h4>
      <p>Minister in Charge (MIC)</p>
    </div>
  </div>

  <div className="pastor-card">
    <img src={pastorWife} alt="Mrs. Mabel Azuatalam" className="pastor-img" />
    <div>
      <h4>Mrs. Mabel Azuatalam</h4>
      <p>Pastor</p>
    </div>
  </div>
</section>


      </div>

      <section className="media-display">
        <div className="carousel" aria-label="Church photo carousel">
          <img
            src={images[currentImageIndex]}
            alt={`Church Slide ${currentImageIndex + 1}`}
            className="carousel-image"
          />
        </div>

        <div className="video-section">
  <div className="video-frame">
    <iframe
      className="church-video"
      src="https://youtu.be/cx0f4RDFF7g"
      title="Church video preview"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>

      </section>

      <div className="scroll-indicator" role="presentation" aria-hidden="true">
        <span className="scroll-label">Scroll Down</span>
        <div className="scroll-arrow">⌄</div>
      </div>
    </header>
  );
};

export default Header;
