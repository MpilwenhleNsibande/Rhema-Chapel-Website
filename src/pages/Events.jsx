import React, { useState } from "react";
import Modal from "react-modal";
import "../styles/Events.css";

// Importing images
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

import gal11 from '../assets/Bannner.jpg';
import gal22 from '../assets/Poster.jpg';
import gal33 from "../assets/Br.jpg";
import gal44 from '../assets/Lib.jpg';
import gal55 from '../assets/sit.jpg';
import gal66 from '../assets/Wom_St.jpg';
import gal77 from '../assets/youth.jpeg';
import gal88 from '../assets/youth1.jpeg';
import gal99 from '../assets/view.jpg';

import Vid1 from "../assets/Vid_1.mp4";
import Vid2 from "../assets/Vid_2.mp4";
import Vid3 from "../assets/Vid_3.mp4";
import Vid4 from "../assets/Vid_4.mp4";
import Vid5 from "../assets/Vid_5.mp4";
import Vid7 from "../assets/Vid_7.mp4";

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

const galleryImages = [gal11, gal22, gal33, gal44, gal55, gal66, gal77, gal88, gal99];
const videos = [Vid1, Vid2, Vid3, Vid4, Vid5, Vid7];

const Events = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const openModal = (videoSrc) => {
    setActiveVideo(videoSrc);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveVideo(null);
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="events-page">
      <div className="events-container">
        <h2 className="section-title">Rhema Chapel Yearly Events</h2>

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

        {/* Gallery */}
        <div className="gallery-section">
          <h2 className="section-title">Gallery</h2>
          <div className="gallery-container">
            <div className="gallery-track">
              {galleryImages.map((image, index) => (
                <div className="gallery-slide" key={index}>
                  <img src={image} alt={`Gallery ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Section */}
<div className="videos-page">
  <div className="videos-container">
    <h2 className="section-title">Video Highlights from Our Services</h2>
    <div className="videos-grid">
      {videos.map((video, index) => (
        <div
          className="video-card"
          key={index}
          onClick={() => openModal(video)}
          style={{ cursor: "pointer" }}
        >
          <video
            src={video}
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
            className="gallery-video"
          />
        </div>
      ))}
    </div>
  </div>
</div>


        {/* Modal */}
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Video Modal"
          className="video-modal"
          overlayClassName="video-overlay"
          ariaHideApp={false}
        >
          <button onClick={closeModal} className="close-btn">×</button>
          <video
            src={activeVideo}
            controls
            autoPlay
            playsInline
            className="modal-video"
          />
        </Modal>
      </div>
    </div>
  );
};

export default Events;
