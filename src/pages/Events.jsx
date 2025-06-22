import React from 'react';
import '../styles/Events.css';

// Importing the images
import celebrationImg from '../assets/fast.jpg';
import festivalImg from '../assets/lebs.jpg';
import communityImg from '../assets/mamr.jpg';
import easterImg from '../assets/church4.jpeg';
import springImg from '../assets/mid_fast.jpg';
import gatheringImg from '../assets/chi_out.jpg';
import joyImg from '../assets/worker.jpg';
import worshipImg from '../assets/intercessor.jpeg';
import eventImg from '../assets/pulpit_2.jpg';
import churchImg from '../assets/Prayer Summit.png';

// Events + image match
const events = [
  { title: "January Fast", image: celebrationImg },
  { title: "Children's Church Teachers' Workshop", image: festivalImg },
  { title: "Ministers Wives' Retreat", image: communityImg },
  { title: "Easter Faith Convention", image: easterImg },
  { title: "Mid-Year Fasting", image: springImg },
  { title: "Children's Continental Outreach", image: gatheringImg },
  { title: "Church Worker's Congress", image: joyImg },
  { title: "Intercessor's Congress", image: worshipImg },
  { title: "Pulpit Exchange", image: eventImg },
  { title: "Prayer Summit", image: churchImg }
];

const Events = () => {
  return (
    <div className="events-page">
      <div className="events-container">
        <h2 className="section-title">Rhema Chapel Yearly Events</h2>

        {/* Events grid */}
        <div className="events-grid">
          {events.map((event, index) => (
            <div className="event-card" key={index}>
              <img src={event.image} alt={event.title} className="event-image" />
              <div className="overlay">
                <h3 className="event-title">{event.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Section */}
        <div className="gallery-section">
          <h2 className="section-title">Gallery</h2>
          <div className="gallery-container">
            <div className="gallery-track">
              {events.map((event, index) => (
                <div className="gallery-slide" key={index}>
                  <img src={event.image} alt={`Gallery ${index + 1}`} />
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
