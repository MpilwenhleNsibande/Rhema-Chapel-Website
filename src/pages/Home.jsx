import React, { useState } from "react";
import { FaChurch, FaPrayingHands, FaGlobe, FaHandsHelping, FaChalkboardTeacher } from "react-icons/fa";
import Header from "../components/Header";
import "../styles/Home.css";
import pastorImg from "../assets/Ps.jpeg";
import bibleImg from "../assets/bible.jpg";
import wordImg from "../assets/SMIC_2.jpg";

const Home = () => {
  const [showPastorText, setShowPastorText] = useState(false);
  const [showWordText, setShowWordText] = useState(false);

  return (
    <div className="home-page">
      <Header />
    
      <section className="pastor-section">
        <div className="pastor-image-container">
          <img src={pastorImg} alt="Pastor" className="pastor-image-glow" />
        </div>
        <div className="pastor-text">
          <h2>From Pastor's Corner</h2>
          <p>
            "Ever wondered what God has in store for you? He’s calling you into a life of purpose, power, and praise..."
          </p>
          {showPastorText && (
            <p>
              "At Rhema Chapel, we believe in second chances and new beginnings. Whether you're a seeker or a saint, we have a place for you to belong and grow..."
            </p>
          )}
          <button className="read-more-btn" onClick={() => setShowPastorText(!showPastorText)}>
            {showPastorText ? "Show Less" : "Read More"}
          </button>
        </div>
      </section>

      <section className="vision-section">
        <FaGlobe className="vision-icon" />
        <h2>Our Vision</h2>
        <p>"Taking the Word of God to the nations, emphasizing its integrity."</p>
      </section>

      <section className="services-section">
        <h2>Our Weekly Services</h2>
        <div className="services-grid">
          {[
            { icon: FaChurch, title: "Sunday Celebration", time: "Sundays · 10h00–12h00" },
            { icon: FaChalkboardTeacher, title: "YMTS (Young Minister School)", time: "Wednesdays · 17h30–19h30" },
            { icon: FaPrayingHands, title: "All‑Night Prayer", time: "Fridays · 22h00–03h00" },
            { icon: FaHandsHelping, title: "Victory Hour Prayer", time: "Fridays · 17h30–19h30" },
          ].map(({ icon: Icon, title, time }, i) => (
            <div className="service-card" key={i}>
              <Icon className="service-icon" />
              <h3>{title}</h3>
              <p>{time}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="word-of-the-year">
        <img src={wordImg} alt="Word of the Year" className="word-image" />
        <div className="word-text">
          <h2>
            2025: <span className="highlight">OUR YEAR OF MADE FOR MORE</span>
            <br />
            <span className="scripture">John 10:10 · Eph 3:20</span>
          </h2>
          <p className={`word-para ${showWordText ? "expanded" : "collapsed"}`}>
            This is the year God wants us to rise beyond limitations and fulfill divine purpose...
            {showWordText && (
              <> He calls us to live as His masterpiece, declaring a year of NO bound​s—no limits.</>
            )}
          </p>
          <button className="read-more-btn" onClick={() => setShowWordText(!showWordText)}>
            {showWordText ? "Show Less" : "Read More"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
