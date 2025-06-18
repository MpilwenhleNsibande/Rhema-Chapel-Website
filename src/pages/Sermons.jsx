import React, { useState, useEffect } from "react";
import "../styles/Sermons.css";

const API_KEY = "AIzaSyCHSFNN0T8FaV2CygLCEizoR0MxyELKrQw";
const CHANNEL_ID = "UCrbppQg8Drn3tmypvRdkq9Q";
const MAX_RESULTS = 9;

const Sermons = () => {
  const [sermons, setSermons] = useState([]);

  useEffect(() => {
    const fetchSermons = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
        );
        const data = await response.json();
        setSermons(data.items);
      } catch (error) {
        console.error("Error fetching sermons:", error);
      }
    };

    fetchSermons();
  }, []);

  return (
    <div className="sermons-page">
      <header className="sermons-header">
        <h1 className="sermons-title">Latest Sermons</h1>
        <p className="sermons-subtitle">Watch our latest messages from Rhema Chapel (Pretoria)</p>
      </header>
      <div className="sermons-container">
        {sermons.map((sermon) => (
          <div key={sermon.id.videoId} className="sermon-card">
            <div className="sermon-video-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${sermon.id.videoId}`}
                title={sermon.snippet.title}
                allowFullScreen
                className="sermon-video"
              />
            </div>
            <div className="sermon-info">
              <h3 className="sermon-title">{sermon.snippet.title}</h3>
              <p className="sermon-date">
                {new Date(sermon.snippet.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sermons;
