import React, { useState, useEffect } from "react";
import "../styles/About.css";
import founderImg from "../assets/reverend.jpg";
import { FaChevronRight, FaCross, FaSeedling, FaStar, FaHeart, FaBookOpen, FaShieldAlt, FaFire } from "react-icons/fa";

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
import ch1 from '../assets/uloorin.jpg';
import ch2 from '../assets/agege.jpg';
import ch3 from '../assets/ojudu.png';
import ch4 from '../assets/abuja.jpg';
import ch5 from '../assets/oluyole.jpg';
import ch6 from '../assets/ikorodu.jpg';
import ch7 from '../assets/Rhema logo.png';
import ch8 from '../assets/ojudu.png';
import ch9 from '../assets/Rhema logo.png';
import ch10 from '../assets/uloorin.jpg';
import ch11 from '../assets/Rhema logo.png';
import ch12 from '../assets/uloorin.jpg';
import ch13 from '../assets/maryland.png';

const installations = [
  { logo: ch1, name: "Ilorin (HQ & Apostolic Center)" },
  { logo: ch2, name: "Agege" },
  { logo: ch3, name: "Ojudu" },
  { logo: ch4, name: "Abuja" },
  { logo: ch5, name: "Oluyole" },
  { logo: ch6, name: "Ikorodu" },
  { logo: ch7, name: "Sunnyside" },
  { logo: ch8, name: "Lagos" },
  { logo: ch9, name: "Ibadan" },
  { logo: ch10, name: "Ilorin" },
  { logo: ch11, name: "Port Harcourt" },
  { logo: ch13, name: "Maryland" },
  { logo: ch12, name: "London" },
  { logo: ch8, name: "King's Lynn" },
];



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
  { name: "Church Facility", hod: "Brother John Adewale", ahod: "None", image: hod9 },
];

const About = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const fullText = `The story of Rhema Chapel International Churches, Republic of South Africa, is a typical reflection of the account of the Church in the Acts of the Apostles: “…and they, continuing daily with one accord in the temple, and breaking bread from house to house, did eat their meat with gladness and singleness of heart, praising God and having favor with all the people. And the Lord added to the church daily such as should be saved… and so mightily grew the word of God and prevailed” (Acts 2:46-47; 19:20). From two believers coming together on September 20th in a shared apartment in Sunnyside, Pretoria, for a Bible study, we have grown into a family church and a weekly gathering of saints who come from different nations of African descent with a central mandate to take the word of God to the nations of the world while emphasizing its integrity. We aim to establish more satellite churches in cities, townships, and campuses of institutions of higher learning throughout the SADC region. Our church's core values have shaped who we are and the difference God has called us to make in a multi-racial community and culture, as seen in South Africa. In our ministry approach, we desire to see every believer come to their full potential and calling in Christ within an atmosphere that emphasizes the peoplehood of God. He said we are His people, and He is our God. To achieve this, our primary focus is on the Word of God, worship, training, family, outreach, and ministry are brought to the forefront in enriching the men and women of God from the very inception of their journey of faith to maturity. Following the pattern of the New Testament Church, we aspire to see Jesus lifted high and ministry gifts developed to disciple the nations of the world in line with the Great Commission through the enablement of the Holy Spirit. Through our various classes and curricula, which are tailor-made to fit both the inexperienced seeker and the already established believer who is hungry for more, the individual Christian's depth in Christ is nourished so that they rise from initial thirst and dryness to overflowing and becoming a river that satisfies our neighborhood. Rhema Chapel International Churches (an arm of the Ever-Increasing Word Ministries), as the home of blessed people, is a place for the aged and the young, families and singles, the fun-loving and the conservative. Our team of energetic workers does everything possible to ensure that you feel at home. We are small enough to minister to you yet large enough to welcome you.`;

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
            <h2 className="founder-name">Rev. George Olawale Adegboye</h2>
            <p className="founder-title">Senior Minister in Charge</p>
            <p className="founder-bio">
              An apostle of the New Testament with a commission to “Take the Word of God to the nations of the World, emphasizing its integrity. He is the President of the Ever Increasing Word Ministries, aka. Rhema Chapel International Churches with many branches worldwide. He is also the President of the Word of Victory Bible Training Institute and the Young Minister Teaching School, which are the training arm of the ministry. He teaches the Word of God extensively with a simplistic practical prophetic insight. He is in great demand all over the world across denominations and independent churches for conventions, seminars and outreaches. He is committed to making the Word of God available all over the world through every available means. He hosts the weekly Word and You telecast programme on many Television Stations in Nigeria. He is an author of many books on diverse topics concerning the Christian life and living. Rev. George Olawale Adegboye holds a Master’s Degree in Sociology. He is married to Oluruntoyin Modupeola and they are blessed with three children: Faith, Faithful, Faithfulness. They reside in Ilorin, Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section light-background">
        <h2 className="navy-text">Our Journey</h2>
        <p className={expanded ? "expanded-text" : "collapsed-text"}>
          {expanded ? fullText : fullText.substring(0, 366) + "..."}
        </p>
        <button onClick={() => setExpanded(!expanded)} className="read-more-btn">
          {expanded ? "Read Less" : "Read More"} <FaChevronRight />
        </button>
      </section>


<section className="beliefs-section">
  <h2 className="section-title navy-text">Our Beliefs</h2>
  <div className="beliefs-list">
    <div className="belief-card animate-slide-up">
      <FaCross className="belief-icon" />
      <p><span className="belief-dropcap">S</span>alvation is the beginning of our journey with God.</p>
    </div>
    <div className="belief-card animate-slide-up delay-1">
      <FaSeedling className="belief-icon" />
      <p><span className="belief-dropcap">S</span>teadfastness is our Christian commitment.</p>
    </div>
    <div className="belief-card animate-slide-up delay-2">
      <FaStar className="belief-icon" />
      <p><span className="belief-dropcap">S</span>econd Coming of Christ is our living hope and nature of our expectation.</p>
    </div>
    <div className="belief-card animate-slide-up delay-3">
      <FaHeart className="belief-icon" />
      <p><span className="belief-dropcap">S</span>oul-winning is our supreme task.</p>
    </div>
    <div className="belief-card animate-slide-up delay-4">
      <FaBookOpen className="belief-icon" />
      <p><span className="belief-dropcap">S</span>tudying the Word is our spiritual culture.</p>
    </div>
    <div className="belief-card animate-slide-up delay-5">
      <FaShieldAlt className="belief-icon" />
      <p><span className="belief-dropcap">S</span>eparation is our attitude towards the world.</p>
    </div>
    <div className="belief-card animate-slide-up delay-6">
      <FaFire className="belief-icon" />
      <p><span className="belief-dropcap">S</span>pirit-filled is our mode of worship.</p>
    </div>
  </div>
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

      {/* Community Installations */}
<section className="installations-section">
  <h2 className="section-title">Our Church Community Installations</h2>
  <div className="installations-track-wrapper">
    <div className="installations-track">
      {installations.map((item, index) => (
        <div className="installation-item" key={index}>
          <img src={item.logo} alt={item.name} className="installation-logo" />
          <p className="installation-name">{item.name}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default About;
