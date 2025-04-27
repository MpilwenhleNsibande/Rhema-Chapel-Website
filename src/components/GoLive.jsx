import React, { useState, useEffect } from "react";
import '../styles/GoLive.css';
import bgImage from '../assets/livestream.jpg';

const GoLiveButton = () => {
  const [isLive, setIsLive] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);

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
    </div>
  );
};

export default GoLiveButton;
