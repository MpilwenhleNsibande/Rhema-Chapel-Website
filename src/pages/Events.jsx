import React, { useState } from 'react';
import '../styles/Events.css'; // Make sure to import the CSS

// Importing the images from the assets folder
import celebrationImg from '../assets/church.jpg';
import festivalImg from '../assets/church1.jpeg';
import communityImg from '../assets/church2.jpeg';
import easterImg from '../assets/church4.jpeg';
import springImg from '../assets/church5.jpeg';
import gatheringImg from '../assets/church6.jpeg';
import joyImg from '../assets/church7.jpeg';
import worshipImg from '../assets/church8.jpeg';
import eventImg from '../assets/church9.jpeg';
import churchImg from '../assets/church10.jpeg';

// Mock events data (10 events)
const events = [
  { title: "Easter Celebration", description: "Join us for a joyful Easter gathering filled with fun activities, inspiring messages, and a warm community atmosphere." },
  { title: "Spring Festival", description: "Celebrate the season of renewal with music, food, and games for the whole family to enjoy!" },
  { title: "Community Outreach", description: "A day dedicated to giving back. Volunteer with us to make a positive impact in the community." },
  { title: "Annual Church Anniversary", description: "Celebrate the founding of the church with special services and guest ministers." },
  { title: "Revival Night", description: "A night of intense worship, prophecy, and spiritual renewal." },
  { title: "Youth Conference", description: "Empowering young people through workshops, seminars, and fun activities." },
  { title: "Women’s Retreat", description: "A peaceful retreat for women to focus on spiritual growth and relaxation." },
  { title: "Men’s Conference", description: "A weekend conference dedicated to spiritual growth and leadership for men." },
  { title: "Christmas Concert", description: "Celebrate the season with music, drama, and a festive atmosphere." },
  { title: "New Year’s Eve Celebration", description: "Ring in the New Year with a vibrant celebration and prophetic service." }
];

const images = [
  celebrationImg,
  festivalImg,
  communityImg,
  easterImg,
  springImg,
  gatheringImg,
  joyImg,
  worshipImg,
  eventImg,
  churchImg
];

const Events = () => {
  const [expanded, setExpanded] = useState(Array(events.length).fill(false)); // State for controlling "Read More" toggle

  const handleToggle = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <div className="events-page">
      <div className="events-container">
        {/* Events Section */}
        <h2 className="section-title">Rhema Chapel Yearly Events</h2>

        <div className="events-grid">
          {events.map((event, index) => (
            <div className="event-card" key={index}>
              <h3 className="event-title">{event.title}</h3>
              <p className="event-description">
                {expanded[index] 
                  ? event.description 
                  : event.description.length > 100 
                  ? `${event.description.slice(0, 100)}...` 
                  : event.description}
              </p>
              <button className="read-more" onClick={() => handleToggle(index)}>
                {expanded[index] ? 'Read Less' : 'Read More'}
              </button>
            </div>
          ))}
        </div>

        {/* Gallery Section */}
        <div className="gallery-section">
          <h2 className="section-title">Gallery</h2>
          <div className="gallery-container">
            <div className="gallery-track">
              {/* Use local images */}
              {images.map((img, index) => (
                <div className="gallery-slide" key={index}>
                  <img src={img} alt={`Gallery image ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
