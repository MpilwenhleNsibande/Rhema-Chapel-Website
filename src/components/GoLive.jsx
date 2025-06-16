import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import '../styles/GoLive.css';
import bgImage from '../assets/livestream.jpg';
=======
import "../styles/GoLive.css";
import bgImage from "../assets/livestream.jpg";
import { FaFacebookF, FaPrayingHands, FaClock, FaBroadcastTower } from "react-icons/fa";
>>>>>>> 4c1284a (Update project with latest changes)

const GoLiveButton = () => {
  const [isLive, setIsLive] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);

<<<<<<< HEAD
  // Replace this with your logic to check if live stream is active
  useEffect(() => {
    // Simulate a live stream status check
    const checkLiveStatus = async () => {
      const now = new Date();
      const isSunday10am = now.getDay() === 0 && now.getHours() === 10;
      setIsLive(isSunday10am); // Simulating live only on Sundays at 10am
    };
    checkLiveStatus();
  }, []);

  const handleClick = () => {
    if (!isLive) {
      setShowSchedule(true);
    }
  };

  const handleClose = () => setShowSchedule(false);

  return (
    <div
    className="golive-page-container"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
    }}
      >
      <button
        className={`go-live-button ${isLive ? "live" : ""}`}
        onClick={handleClick}
      >
        {isLive ? "🔴 We Are Live!" : "Go Live"}
      </button>

      {isLive && (
        <div className="live-embed-container">
          <iframe
            title="Facebook Live Stream"
            src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/RhemaChapelInternationalChurchesPretoria/live"
            width="100%"
            height="450"
            style={{ border: "none", overflow: "hidden", borderRadius: "12px" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
          <a
            href="https://www.facebook.com/RhemaChapelInternationalChurchesPretoria/live"
            target="_blank"
            rel="noopener noreferrer"
            className="fb-watch-button"
          >
            Watch on Facebook
          </a>
        </div>
      )}

      {showSchedule && (
        <div className="schedule-popup">
          <h4>📅 Weekly Live Streaming Schedule</h4>
          <p>Join us during these times for our live streamed services:</p>
          <ul>
            <li>Sunday Celebration Service:</li>
            <p>Sunday 10h00 - 12h00</p>
            <li>Young Minister Teaching School: </li>
            <p>Wed 17h30 - 19h30</p>
            <li>All Night Prayer: </li>
            <p>Friday 22h00 - 03h00</p>
            <li>Victory Hour Prayer: </li>
            <p>Friday 17h30 - 19h30</p>
          </ul>
          <button onClick={handleClose}>Got it</button>
        </div>
      )}
=======
  useEffect(() => {
    const now = new Date();
    const isSunday10am = now.getDay() === 0 && now.getHours() === 10;
    setIsLive(isSunday10am);
  }, []);

  const handleClick = () => {
    setShowSchedule(true);
  };

  const handleGoToFacebook = () => {
    window.open("https://www.facebook.com/RhemaChapelInternationalChurchesPretoria/live", "_blank");
  };

  return (
    <div className="golive-page-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="live-overlay" />

      <div className="floating-text">
        <span>✨ Experience God’s Presence</span>
        <span>🙌 Be Part of a Global Community</span>
        <span>📡 Join Us Online, Wherever You Are</span>
      </div>

      <div className="content-box">
        <h1 className="live-title"><FaBroadcastTower /> Rhema Live Stream</h1>
        <p className="live-subtitle">"Experience the power of the spoken Word <strong>"Rhema"</strong>"</p>

        <button className={`go-live-button ${isLive ? "live" : ""}`} onClick={handleClick}>
          {isLive ? "🔴 We Are Live!" : "See Live Stream Times"}
        </button>

        {showSchedule && (
          <div className="schedule-popup">
            <h4>📅 Please note the schedule for our livestreamed services below:</h4>
            <ul>
              <li><FaPrayingHands /> <strong>Sunday Celebration Service</strong><br />Sunday 10h00 - 12h00</li>
              <li><FaClock /> <strong>Young Minister's Teaching School</strong><br />Wednesday 17h30 - 19h30</li>
              <li><FaClock /> <strong>All Night Prayer</strong><br />Friday 22h00 - 03h00</li>
              <li><FaClock /> <strong>Victory Hour Prayer</strong><br />Friday 17h30 - 19h30</li>
            </ul>

            <button className="facebook-button" onClick={handleGoToFacebook}>
              <FaFacebookF className="fb-icon" /> Watch Live on Facebook
            </button>
          </div>
        )}
      </div>
>>>>>>> 4c1284a (Update project with latest changes)
    </div>
  );
};

export default GoLiveButton;
