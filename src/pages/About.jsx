import React, { useState, useEffect } from "react";
import "../styles/About.css";
import founderImg from "../assets/founder.jpg";
import { FaChevronRight } from "react-icons/fa";

// Head of Department Images
import hod1 from '../assets/mam.png'; 
import hod2 from '../assets/lebo.png';
import hod3 from '../assets/nkuna.png';
import hod4 from '../assets/mike.png';
import hod5 from '../assets/ann.png';
import hod6 from '../assets/p.png';
import hod7 from '../assets/victor.png';
import hod8 from '../assets/mandla.png';
import hod9 from '../assets/hod9.png';
import hod10 from '../assets/tolu.png';

const carouselImages = [hod1, hod2, hod3, hod4, hod5, hod6, hod7, hod8, hod9, hod10];

const departments = [
  { name: "Children Department", hod: "Mrs Mabel Gospel Azuatalam", ahod: "Mrs Hope Akinboye", image: hod1 },
  { name: "Teenagers Fellowship", hod: "Mrs Lebogang Mpela", ahod: "None", image: hod2 },
  { name: "Intercessory Department", hod: "Mrs Lenah Nkuna", ahod: "None", image: hod3 },
  { name: "Ministers Aid", hod: "Brother Muhima Michael", ahod: "None", image: hod4 },
  { name: "Treasury Department", hod: "Sister Ann Bless", ahod: "None", image: hod5 },
  { name: "Couples Fellowship & Maintenance", hod: "Brother Peter Bless", ahod: "None", image: hod6 },
  { name: "Rhema Mass Choir", hod: "Brother Victor Agbonjaru", ahod: "None", image: hod7 },
  { name: "Technical and Media", hod: "Brother Mandla Sithole", ahod: "Sister Lebogang Matabula", image: hod8 },
  { name: "Ushering Department", hod: "Sister Tolu Akinyele", ahod: "None", image: hod10 },
  { name: "Church Facility", hod: "Brother Akinwumi John", ahod: "None", image: hod9 },
];

const About = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const fullText = `The story of Rhema Chapel International Churches, Republic of South Africa, is a typical reflection of the account of the Church in the Acts of the Apostles: “…and they, continuing daily with one accord in the temple, and breaking bread from house to house, did eat their meat with gladness and singleness of heart, praising God and having favor with all the people..."`;

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="about-wrapper">
      {/* Hero */}
      <section className="about-hero navy-background">
        <div className="welcome-highlight">You're Welcome to</div>
        <h1 className="section-title white-text">Rhema Chapel International Churches</h1>
        <h2 className="section-subtitle red-text">An Arm of the Ever Increasing Word Ministries</h2>
        <p className="tagline white-text">
          A Home of the <strong>Blessed People</strong>, a People of the Word, changing their World.
        </p>
      </section>

      {/* Founder Section */}
      <section className="founder-highlight">
        <div className="founder-container">
          <div className="founder-image-block">
            <img src={founderImg} alt="Rev. George Odegboye" className="founder-photo" />
          </div>
          <div className="founder-text-block">
            <h2 className="founder-name">Rev. George Olawale Odegboye</h2>
            <p className="founder-title">Senior Minister in Charge</p>
            <p className="founder-bio">
              An apostle of the New Testament with a commission to take the Word to the nations, emphasizing its integrity, simplicity and practicality, so that lives may be blessed, changed and empowered...
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section light-background">
        <h2 className="navy-text">Our Journey</h2>
        <p className={expanded ? "expanded-text" : "collapsed-text"}>
          {expanded ? fullText : fullText.substring(0, 250) + "..."}
        </p>
        <button onClick={() => setExpanded(!expanded)} className="read-more-btn">
          {expanded ? "Read Less" : "Read More"} <FaChevronRight />
        </button>
      </section>

      {/* Departments */}
      <section className="departments-section">
        <h2 className="section-title navy-text">Church Departments</h2>
        <div className="departments-grid">
          {departments.map((dept, index) => (
            <div key={index} className="dept-card">
              <img src={dept.image} alt={dept.name} className="dept-img" />
              <h4>{dept.name}</h4>
              <p><strong>HOD:</strong> {dept.hod}</p>
              <p><strong>Asst:</strong> {dept.ahod}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
