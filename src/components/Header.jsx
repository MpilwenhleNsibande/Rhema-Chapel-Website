import React, { useState, useEffect, useRef } from "react";
import "../styles/Header.css";

import pastor from "../assets/ps_s.jpeg";
import church1 from "../assets/church7.jpeg";
import church2 from "../assets/church8.jpeg";
import church3 from "../assets/church9.jpeg";
import church4 from "../assets/church10.jpeg";
import church5 from "../assets/church5.jpeg";

const images = [church1, church2, church3, church4, church5];

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Image carousel every 4s
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
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

        <div className="pastor-card">
          <img src={pastor} alt="Pastor Gospel Azuatalam" className="pastor-img" />
          <div>
            <h4>Pastor Gospel Azuatalam</h4>
            <p>Minister in Charge (MIC)</p>
          </div>
        </div>
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
            <video
              ref={videoRef}
              className="church-video"
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              controls={isPlaying}
              aria-label="Church video preview"
            />
            {!isPlaying && (
              <button
                className="video-play"
                onClick={handlePlay}
                aria-label="Play church video"
                title="Play video"
              >
                ▶
              </button>
            )}
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
