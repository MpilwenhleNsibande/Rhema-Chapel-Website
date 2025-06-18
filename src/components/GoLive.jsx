import React, { useState, useEffect } from "react";
import "../styles/GoLive.css";
import bgImage from "../assets/livestream.jpg";
import { FaFacebookF, FaPrayingHands, FaClock, FaBroadcastTower, FaTimes } from "react-icons/fa";

const GoLiveButton = () => {
  const [isLive, setIsLive] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);

  useEffect(() => {
    const now = new Date();
    const isSunday10am = now.getDay() === 0 && now.getHours() === 10;
    setIsLive(isSunday10am);
  }, []);

  const handleToggleSchedule = () => {
    setShowSchedule((prev) => !prev);
  };

  const handleGoToFacebook = () => {
    window.open(
      "https://www.facebook.com/RhemaChapelInternationalChurchesPretoria/live",
      "_blank"
    );
  };

  return (
    <div
      className="golive-page-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="live-overlay" />

      <div className="floating-text">
        <span>✨ Experience God’s Presence</span>
        <span>🙌 Be Part of a Global Community</span>
        <span>📡 Join Us Online, Wherever You Are</span>
      </div>

      <div className="content-box">
        <h1 className="live-title">
          <FaBroadcastTower /> Rhema Live Stream
        </h1>
        <p className="live-subtitle">
          "Where the Spirit of the Lord is, there is liberty" — 2 Cor 3:17
        </p>

        <button
          className={`go-live-button ${isLive ? "live" : ""}`}
          onClick={handleToggleSchedule}
        >
          {isLive ? "🔴 We Are Live! (Click for Details)" : "📅 See Live Stream Times"}
        </button>

        {showSchedule && (
          <div className="schedule-popup animate-in">
            <div className="schedule-header">
              <h4>
                <FaClock /> Livestream Schedule
              </h4>
              <FaTimes className="close-icon" onClick={handleToggleSchedule} />
            </div>

            <ul className="schedule-list">
              <li>
                <FaPrayingHands /> <strong>Sunday Celebration Service</strong>
                <br /> Sunday 10h00 - 12h00
              </li>
              <li>
                <FaClock /> <strong>Young Ministers Teaching School</strong>
                <br /> Wednesday 17h30 - 19h30
              </li>
              <li>
                <FaClock /> <strong>All Night Prayer</strong>
                <br /> Friday 22h00 - 03h00
              </li>
              <li>
                <FaClock /> <strong>Victory Hour Prayer</strong>
                <br /> Friday 17h30 - 19h30
              </li>
            </ul>

            <button className="facebook-button" onClick={handleGoToFacebook}>
              <FaFacebookF className="fb-icon" /> Watch Live on Facebook
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GoLiveButton;
