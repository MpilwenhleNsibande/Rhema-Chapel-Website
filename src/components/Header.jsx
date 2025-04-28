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
  );
};

export default Header;
