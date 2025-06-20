import React, { useState, useEffect } from "react";
import "../styles/Sermons.css";

const API_KEY = "AIzaSyCHSFNN0T8FaV2CygLCEizoR0MxyELKrQw";
const CHANNEL_ID = "UCrbppQg8Drn3tmypvRdkq9Q";
const MAX_RESULTS = 6;

const Sermons = () => {
  const [sermons, setSermons] = useState([]);
  const [filter, setFilter] = useState("all"); // video | audio | all
  const [pageToken, setPageToken] = useState("");
  const [nextPageToken, setNextPageToken] = useState(null);
  const [prevPageToken, setPrevPageToken] = useState(null);

  const fetchSermons = async (token = "") => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}&pageToken=${token}`
      );
      const data = await res.json();
      setSermons(data.items.filter(item => item.id.kind === "youtube#video"));
      setNextPageToken(data.nextPageToken || null);
      setPrevPageToken(token ? pageToken : null);
      setPageToken(token);
    } catch (error) {
      console.error("Error fetching sermons:", error);
    }
  };

  useEffect(() => {
    fetchSermons();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredSermons = sermons.filter((sermon) => {
    if (filter === "audio") return sermon.snippet.title.toLowerCase().includes("audio");
    if (filter === "video") return !sermon.snippet.title.toLowerCase().includes("audio");
    return true;
  });

  return (
    <div className="sermons-page">
      <header className="sermons-header">
        <h1 className="sermons-title">Latest Sermons</h1>
        <p className="sermons-subtitle">Watch or listen to our latest messages from Rhema Chapel (Pretoria)</p>
        <div className="filter-section">
          <label htmlFor="filter">Filter by Type: </label>
          <select id="filter" value={filter} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="video">Video Only</option>
            <option value="audio">Audio Only</option>
          </select>
        </div>
      </header>

      <div className="sermons-container">
        {filteredSermons.length === 0 ? (
          <p style={{ fontStyle: "italic" }}>No sermons found for the selected filter.</p>
        ) : (
          filteredSermons.map((sermon) => (
            <div key={sermon.id.videoId} className="sermon-card">
              {sermon.snippet.title.toLowerCase().includes("audio") ? (
                <div className="sermon-audio-layout">
                  <div className="audio-thumbnail">
                    🎧
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
                    <a
                      href={`https://www.youtube.com/watch?v=${sermon.id.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="watch-btn"
                    >
                      Listen Now
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  <div className="sermon-video-wrapper">
                    <iframe
                      src={`https://www.youtube.com/embed/${sermon.id.videoId}`}
                      title={sermon.snippet.title}
                      className="sermon-video"
                      allowFullScreen
                      frameBorder="0"
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
                    <a
                      href={`https://www.youtube.com/watch?v=${sermon.id.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="watch-btn"
                    >
                      Watch Now
                    </a>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>

      <div className="pagination-controls">
        {prevPageToken && (
          <button onClick={() => fetchSermons(prevPageToken)} className="watch-btn">
            ← Previous
          </button>
        )}
        {nextPageToken && (
          <button onClick={() => fetchSermons(nextPageToken)} className="watch-btn">
            Next →
          </button>
        )}
      </div>
    </div>
  );
};

export default Sermons;
