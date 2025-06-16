<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import church1 from "../assets/church2.jpeg";
import church9 from "../assets/church9.jpeg";
import church2 from "../assets/church1.jpeg";
import church8 from "../assets/church8.jpeg";
import church3 from "../assets/church3 (2).jpeg";
import church7 from "../assets/church7.jpeg";
import church4 from "../assets/church4.jpeg";
import church10 from "../assets/church10.jpeg";
import church5 from "../assets/church5.jpeg";
import church6 from "../assets/church6.jpeg";

const images = [
  church1,
  church9,
  church2,
  church8,
  church3,
  church7,
  church4,
  church10,
  church5,
  church6,
];

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="overlay"></div>
      <div className="header-content">
        <h1>Welcome to</h1>
        <h2>Rhema Chapel <br/>International Churches <br /> (Pretoria)</h2>
        <p>The Home of the blessed people, a people of the Word changing their World</p>
      </div>
    </header>
=======
import React, { useState, useEffect, useRef } from "react";
import "../styles/Header.css";

import pastor from "../assets/Ps.jpeg";
import church1 from '../assets/dance.jpg';
import church2 from '../assets/pw_p2.jpg';
import church3 from '../assets/j_pw.jpg';
import church4 from '../assets/sit.jpg';
import church5 from '../assets/p_pw_gift.jpg';
import church6 from '../assets/IMG_3824.jpg';
import church7 from '../assets/p_pw.jpg';
import church8 from '../assets/pw_p.jpg';
import church9 from '../assets/woman.jpg';
import church10 from '../assets/woman_f.jpg';

const images = [church1, church2, church3, church4, church5];

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  return (
    <div className="header-wrapper">
      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-text">
          <div className="intro-banner">You're Welcome Here</div>
          <h1>
            Rhema Chapel <span className="highlight-word">International</span><br />
            Churches <span className="city">(Pretoria)</span>
          </h1>
          <p className="welcome-subtitle">
            A home of the <strong>Blessed People</strong> —
            a people of the Word, <em>changing their world</em>.
          </p>
          <div className="cta-buttons">
            <button className="cta-primary">Join Us Sunday</button>
            <button className="cta-secondary">Plan a Visit</button>
          </div>
        </div>


        <div className="pastor-image2">
  <div className="pastor-photo-wrapper">
    <img src={pastor} alt="Our Pastor" />
    <div className="photo-ring"></div>
  </div>
  <div className="pastor-details1">
    <div className="pastor-name1">Pastor Gospel Azuatalum</div>
    <div className="pastor-title1">Minister in Charge (MIC)</div>
  </div>
</div>

      </section>

      {/* Carousel and Video Section */}
      <section className="carousel-video-section">
        <div className="image-carousel">
          <img
            src={images[currentImageIndex]}
            alt={`Church ${currentImageIndex + 1}`}
            className="carousel-img"
          />
        </div>

        <div className="video-container">
          <div className="video-wrapper">
            <video
              ref={videoRef}
              className="church-video"
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              controls={isPlaying}
            />
            {!isPlaying && (
              <button className="custom-play-button" onClick={handlePlay}>
                ▶
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
>>>>>>> 4c1284a (Update project with latest changes)
  );
};

export default Header;
