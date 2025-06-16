<<<<<<< HEAD
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
  { title: "January Fast", description: "A time of spiritual renewal and growth as we fast and pray to seek God’s guidance and strength for the year ahead." },
  { title: "Children's Church Teachers' Retreat / Workshop", description: "A training and refreshment event for children’s church teachers to enhance their teaching skills and spiritual development." },
  { title: "Ministers Wives' Retreat", description: "A retreat dedicated to the wives of ministers, focusing on spiritual rejuvenation, personal growth, and relaxation." },
  { title: "Easter Faith Convention", description: "A special convention held during Easter to celebrate the resurrection of Christ with powerful services and impactful messages." },
  { title: "Mid-Year Fasting", description: "A time of fasting and prayer in the middle of the year to reconnect with God, seek divine direction, and experience spiritual breakthroughs." },
  { title: "Children's Continental Outreach", description: "A children’s event aimed at reaching out to young hearts across continents with fun activities, educational workshops, and spiritual teachings." },
  { title: "Church Worker's Congress", description: "A conference for church workers to deepen their understanding of their roles, develop new skills, and be spiritually refreshed." },
  { title: "Intercessor's Congress", description: "A conference focused on intercessory prayer and spiritual empowerment for intercessors to grow in their calling and leadership." },
  { title: "Pulpit Exchange", description: "A special event where ministers exchange pulpits to foster unity, broaden perspectives, and deliver diverse messages to congregations." },
  { title: "Prayer Summit", description: "An intense time of prayer and worship where believers come together to seek God's will and experience spiritual renewal." }
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
=======
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
import ch1 from '../assets/church5.jpeg';
import ch2 from '../assets/csing.jpg';
import ch3 from '../assets/woman.jpg';
import ch4 from '../assets/IMG_3824.jpg';
import ch5 from '../assets/IMG_4969.jpg';
import ch6 from '../assets/IMG_4864.jpg';
import ch7 from '../assets/pastor_pr.jpg';
import ch8 from '../assets/IMG_2016.jpg';
import ch9 from '../assets/woman_f.jpg';
import ch10 from '../assets/pw_p.jpg';



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

const gallery = [
  { title: "January Fast", image: ch1 },
  { title: "Children's Church Teachers' Workshop", image: ch2 },
  { title: "Ministers Wives' Retreat", image: ch3 },
  { title: "Easter Faith Convention", image: ch4 },
  { title: "Mid-Year Fasting", image: ch5 },
  { title: "Children's Continental Outreach", image: ch6 },
  { title: "Church Worker's Congress", image: ch7},
  { title: "Intercessor's Congress", image: ch8},
  { title: "Pulpit Exchange", image: ch9 },
  { title: "Prayer Summit", image: ch10 }
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
>>>>>>> 4c1284a (Update project with latest changes)
            </div>
          ))}
        </div>

        {/* Gallery Section */}
        <div className="gallery-section">
          <h2 className="section-title">Gallery</h2>
          <div className="gallery-container">
            <div className="gallery-track">
<<<<<<< HEAD
              {/* Use local images */}
              {images.map((img, index) => (
                <div className="gallery-slide" key={index}>
                  <img src={img} alt={`Gallery image ${index + 1}`} />
=======
              {gallery.map((event, index) => (
                <div className="gallery-slide" key={index}>
                  <img src={event.image} alt={`Gallery ${index + 1}`} />
>>>>>>> 4c1284a (Update project with latest changes)
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
