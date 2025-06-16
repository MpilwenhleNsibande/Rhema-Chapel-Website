<<<<<<< HEAD
import React, { useState } from 'react';
import '../styles/About.css';
import founderImg from '../assets/founder.jpg'; // Ensure the image exists
import backgroundImg from '../assets/church6.jpeg'; // Ensure the image exists
import { FaBookOpen, FaGlobe, FaMusic, FaUsers, FaGraduationCap, FaShieldAlt } from 'react-icons/fa';
=======
import React, { useState, useEffect } from "react";
import "../styles/About.css";
import founderImg from "../assets/reverend_2.jpg";
import { FaBookOpen, FaGlobe, FaMusic, FaUsers, FaGraduationCap, FaShieldAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// Head of Department Images
>>>>>>> 4c1284a (Update project with latest changes)
import hod1 from '../assets/mam.png'; 
import hod2 from '../assets/lebo.png';
import hod3 from '../assets/nkuna.png';
import hod4 from '../assets/mike.png';
import hod5 from '../assets/ann.png';
import hod6 from '../assets/p.png';
import hod7 from '../assets/victor.png';
import hod8 from '../assets/mandla.png';
<<<<<<< HEAD
import hod10 from '../assets/tolu.png';
import hod9 from '../assets/hod9.png';


const departments = [
  {
    name: "Children Department",
    hod: "Mrs Mabel Gospel Azuatalam",
    ahod: "Mrs Hope Akinboye",
    image: hod1,
    description: "The Children’s Department is dedicated to nurturing and guiding the spiritual growth of children within the church. It is responsible for conducting services for children during all chapel programs, ensuring they receive age-appropriate biblical teachings and worship experiences. The department also organizes special training and outreach initiatives tailored for children in the local church and represents the church in approved external children’s programs. Additionally, the department selects and nominates children’s ministry workers for relevant training and oversees all aspects of the church’s children’s ministry. It provides pastoral care for children, including organizing celebrations such as birthdays. To extend its impact, the department establishes Children’s Bible Clubs as outreach programs and coordinates the planning and execution of the annual Children’s Week program. Furthermore, the department actively supports the coordinator of the annual Children’s Continental Camp and carries out any additional responsibilities as assigned by the Church Administrator (CA) and the Senior Minister in Charge (SMIC)."
  },
  {
    name: "Teenagers Fellowship",
    hod: "Mrs Lebogang Mpela",
    ahod: "None",
    image: hod2,
    description: "The Teenagers Fellowship Department is committed to guiding and nurturing the spiritual, emotional, and social growth of teenagers within the church. We provide a safe and supportive environment where teens can explore their faith, develop godly character, and build lasting friendships. Through regular fellowship meetings, Bible studies, activities, and youth events, we engage teenagers in meaningful discussions and teachings that are relevant to their lives. Our department also offers opportunities for leadership development, helping teens discover and develop their gifts and talents for service within the church and beyond. We aim to create a community that empowers young people to live out their faith boldly and confidently, while providing the support they need as they navigate the challenges of adolescence. The Teenagers Fellowship Department is dedicated to equipping the next generation to grow in Christ and fulfill their God-given purpose."
  },
  {
    name: "Intercessory Department",
    hod: "Mrs Lenah Nkuna",
    ahod: "None",
    image: hod3,
    description:"The Intercessory Department serves as the prayer foundation of the Chapel, dedicated to interceding on behalf of the church, its members, programs, and the ministry as a whole. This department leads all prayer sessions during regular and special church events, both within and outside the Chapel. It is responsible for organizing and managing the Friday all-night prayer meetings in accordance with the guidelines set by the Board of Ministers (BOM). Additionally, the team supports the Deliverance Team during all-night deliverance services and the Friday Deliverance Clinic.The department also ensures a strong prayer base for all church outreach programs and plays a central role in coordinating the Ministries’ Annual Rhema Chapel Intercessors Congress. It oversees prayer sessions during church-declared fasting programs and organizes the church prayer congress on public holidays. Furthermore, it provides special prayer sessions for individuals and families, whether at their homes or designated locations.To strengthen the church’s prayer foundation, the department oversees the publication of the Club 60 Minutes newsletter. Additionally, it carries out any other responsibilities as assigned by the Church Administrator (CA) and the Senior Minister in Charge (SMIC)."
  },

  {
    name: "Ministers Aid ",
    hod: "Brother Muhima Michael",
    ahod: "None",
    image: hod4,
    description: "The Minister’s Aid Department is responsible for ensuring proper protocol and hospitality for the Pastor and guest ministers. This includes overseeing all aspects of protocol, coordinating individuals who wish to meet with the Pastor, and providing courteous and efficient assistance. The department also identifies and honors ministers and special guests, ensuring they are well cared for during their visit. Additionally, members of the department are committed to maintaining a respectful, polite, and supportive presence, offering dedicated assistance to the Pastor and other ministers at all times."
  },

  {
    name: "Treasury Department ",
    hod: "Sister Ann Bless",
    ahod: "None",
    image: hod5,
    description: "The Ushering Department plays a crucial role in ensuring order, hospitality, and smooth coordination during all church services and programs. Ushers are responsible for guiding congregants to their seats and taking accurate headcounts at every service. They distribute service bulletins, handbills, and other materials as needed, and assist in handing out items during services as directed from the pulpit. Prior to each service, ushers ensure that the auditorium is clean and the seating is properly arranged. They also support the Welfare Department in serving meals, drinks, and other items during special ceremonies or programs. The department is entrusted with the collection of tithes, offerings, pledges, and other contributions during services, which are promptly handed over to the Treasury Department for counting. Additionally, ushers are responsible for collecting and safeguarding lost and forgotten items, ensuring they are returned to their rightful owners through the Chapel Office. Ushers also assist ministers during ministrations by maintaining order and ensuring the safety of individuals being ministered to, thereby upholding a respectful and secure worship environment."
  },

  {
    name: "Couples Fellowship & Maintainance Department",
    hod: "Brother Peter Bless",
    ahod: "None",
    image: hod6,
    description: "The Couples Fellowship Department is dedicated to nurturing and strengthening marital relationships within the church community. We provide support, encouragement, and resources to married couples, helping them to grow together in faith and build strong, biblical marriages. Through regular fellowship meetings, activities, and special events, we create a platform for couples to connect, share experiences, and receive guidance on family life, all aimed at fostering healthy and thriving relationships. Our focus is on creating a supportive environment where couples can grow spiritually and emotionally, strengthening their bond both with each other and with God. The Maintenance Department is responsible for the upkeep and care of the church’s physical facilities, ensuring that they are safe, clean, and well-maintained for all services and events. We oversee the management of utilities such as electricity and water, as well as performing necessary repairs and improvements to the building. Our team works diligently to address maintenance issues promptly, ensuring that the church environment remains welcoming and conducive to worship. By maintaining the church’s infrastructure, we create a space where the congregation can gather in comfort and focus on spiritual growth."
  },

  {
    name: "Rhema Mass Choir",
    hod: "Brother Victor Agbonjaru",
    ahod: "None",
    image: hod7,
    description: "The Rhema Mass Choir serves as a vital ministry of the Chapel, ministering to the congregation through powerful and spirit-filled songs during all chapel services and programs. The choir leads praise and worship sessions during regular and special services, and coordinates musical concerts and praise services both within and outside the church auditorium.The department is also committed to nurturing musical talent within the church by providing opportunities for members to develop as singers and instrumentalists. As an outreach arm of the church, the choir participates in external invitations, provided they do not conflict with other church commitments. In addition, the Rhema Mass Choir plays a supportive role in training the choirs of satellite churches and the Children’s Church. They help enhance the worship experience of the congregation by teaching new songs regularly and leading initiatives that uplift the spiritual lives of members through music. Through musical outreaches and concerts, the choir contributes significantly to the evangelistic efforts of the church.The department also carries out any other responsibilities as delegated by the Chapel Administrator (CA) and the Senior Minister in Charge (SMIC)."
  },

  {
    name: "Technical and Media",
    hod: "Brother Mandla Sithole",
    ahod: "Sister Lebogang Matabula",
    image: hod8,
    description: "The Technical and Media Department plays a vital role in ensuring that all technical and media aspects of the church’s services and programs run smoothly. Our team is responsible for managing audio-visual systems, including sound, lighting, and video equipment, to create a high-quality worship experience for the congregation. We ensure that all presentations, such as songs, sermons, and announcements, are delivered seamlessly through screens and speakers during services and events. In addition to technical support, the department oversees the recording and live streaming of services, making sure that those unable to attend in person can still participate in the worship experience remotely. We also handle the production of media content, including the creation of promotional materials, video clips, and other multimedia resources used in church services and outreach activities. Our team ensures that all equipment is properly maintained and prepared before every service and event, troubleshooting and resolving any technical issues that may arise. We are committed to supporting the church’s mission through the effective use of technology, ensuring that the media experience is professional, impactful, and accessible to all. Additionally, the department assists with any media-related needs for special programs, conferences, and outreach events, contributing to the overall success of the church’s communication efforts."
  },

  {
    name: "Ushering Department",
    hod: " Sister Tolu Akinyele",
    ahod: "None",
    image: hod10,
    description: "The Ushering Department is dedicated to ensuring a smooth and welcoming experience for all attendees during church services and programs. Our team ushers congregants to their seats and takes the numerical headcount of attendees at every service. We distribute service bulletins, handbills, and special handouts as needed, and assist with the distribution of items during the service as directed from the pulpit. We are committed to maintaining a clean and organized auditorium, ensuring that seats are properly arranged before every service. In addition, we work closely with the Welfare Department to assist with the distribution and serving of meals, drinks, and other items during ceremonies, services, or special programs. The department is also responsible for the collection of tithes, offerings, pledges, and other contributions during services, ensuring that all collections are handed over immediately to the Treasury Department for counting. After every service, we gather any lost or forgotten items and safely store them in the Chapel Office for later return to their rightful owners. During ministrations, we provide support to the ministers by helping to ensure the safety of those being ministered to, preventing any injury to themselves or others. Our role is integral in maintaining an orderly and respectful atmosphere throughout the church's activities."
  },

  {
    name: "Church Facility",
    hod: "Brother Akinwumi John",
    ahod: "None",
    image: hod9,
    description: "The Church Facility Department is responsible for overseeing the maintenance and proper functioning of all church facilities. This includes ensuring that essential systems such as electricity, water, and overall infrastructure are well-maintained and operating efficiently. The department is dedicated to creating a safe, functional, and welcoming environment for worship and church activities by promptly addressing any facility-related concerns and ensuring the church building remains in excellent condition."
  },

  
];

const About = () => {
  const fullText = `The story of Rhema Chapel International Churches, Republic of South Africa, is a typical
reflection of the account of the Church in the Acts of the Apostles: “…and they, continuing daily
with one accord in the temple, and breaking bread from house to house, did eat their meat with
gladness and singleness of heart, praising God and having favor with all the people. And the
Lord added to the church daily such as should be saved… and so mightily grew the word of God
and prevailed” (Acts 2:46-47; 19:20). From two believers coming together on September 20th in
a shared apartment in Sunnyside, Pretoria, for a Bible study, we have grown into a family church
and a weekly gathering of saints who come from different nations of African descent with a
central mandate to take the word of God to the nations of the world while emphasizing its
integrity. We aim to establish more satellite churches in cities, townships, and campuses of institutions of
higher learning throughout the SADC region. Our church's core values have shaped who we are
and the difference God has called us to make in a multi-racial community and culture, as seen in
South Africa. In our ministry approach, we desire to see every believer come to their full
potential and calling in Christ within an atmosphere that emphasizes the peoplehood of God. He
said we are His people, and He is our God. To achieve this, our primary focus is on the Word of
God, worship, training, family, outreach, and ministry are brought to the forefront in enriching the
men and women of God from the very inception of their journey of faith to maturity. Following the
pattern of the New Testament Church, we aspire to see Jesus lifted high and ministry gifts
developed to disciple the nations of the world in line with the Great Commission through the
enablement of the Holy Spirit. Through our various classes and curricula, which are tailor-made to fit both the inexperienced
seeker and the already established believer who is hungry for more, the individual Christian's
depth in Christ is nourished so that they rise from initial thirst and dryness to overflowing and
becoming a river that satisfies our neighborhood. Rhema Chapel International Churches (an
arm of the Ever-Increasing Word Ministries), as the home of blessed people, is a place for the
aged and the young, families and singles, the fun-loving and the conservative. Our team of
energetic workers does everything possible to ensure that you feel at home. We are small
enough to minister to you yet large enough to welcome you.`;

  const [expanded, setExpanded] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  return (
    <div className="about">
      {/* Section 1: Background Image with Opacity */}
      <section className="about-hero" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="overlay">
          <h1 className="fade-in">About Rhema Chapel International Churches</h1>
          <h2 className="slide-in">An Arm of the Ever Increasing Word Ministries</h2>
          <h3 className="zoom-in">A Home of the Blessed People, a People of the Word, changing their World</h3>
        </div>
      </section>
      
      {/* Section 2: Founder Section */}
      <section className="founder-section">
        <div className="founder-box slide-up">
          <img src={founderImg} alt="Founder" className="founder-image pulse" />
          <div className="founder-text">
            <h2>Rev. George Olawale Odegboye</h2>
            <p>
            <b>Senior Minister in Charge</b><br></br><br></br>
            An apostle of the New Testament with a commission to “Take the Word of the nations of the World, emphasizing its integrity. He is the President of the Ever Increasing Word Ministries, aka. Rhema Chapel International Churches with many branches worldwide. He is also the President of the Word of Victory Bible Training Institute and the Young Minister Teaching School, which are the training arm of the ministry.
            He teaches the Word of God extensively with a simplistic practical prophetic insight. He is in great demand all over the world across denominations and independent churches for conventions, seminars and outreaches. 
            He is committed to making the Word of God available all over the world through every available means. He hosts the weekly Word and You telecast programme on many Television Stations in Nigeria. He is an author of many books on diverse topics concerning the Christian life and living. 
            Rev. George Olawale Adegboye holds a Master’s Degree in Sociology. He is married to Oluruntoyin Modupeola and they are blessed with three children: Faith, Faithful, Faithfulness. They reside in Ilorin, Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: History Section */}
      <section className="history-section fade-in">
        <h2>Rhema Chapel International Churches (Pretoria)</h2>
        <p className={`history-text ${expanded ? 'expanded' : ''}`}>
          {expanded ? fullText : fullText.split(". ").slice(0, 5).join(". ") + "..."}
        </p>

        <button onClick={() => setExpanded(!expanded)} className="read-more-btn">
          {expanded ? "Read Less..." : "Learn More..."}
        </button>
      </section>


      
      {/* Section 4: We Are */}
      <section className="we-are-section">
        <h2 className="fade-in">We Are:</h2>
        <div className="we-are-list">
          <div className="we-are-box bounce-in">
            <FaBookOpen className="we-are-icon" />
            <p>A people of the word changing the world​</p>
          </div>
          <div className="we-are-box bounce-in">
            <FaGlobe className="we-are-icon" />
            <p>An outreach center to the whole world</p>
          </div>
          <div className="we-are-box bounce-in">
            <FaMusic className="we-are-icon" />
            <p>A word and worship center in spirit and truth</p>
          </div>
          <div className="we-are-box bounce-in">
            <FaUsers className="we-are-icon" />
            <p>A family church for all members of the household​</p>
          </div>
          <div className="we-are-box bounce-in">
            <FaGraduationCap className="we-are-icon" />
            <p>A training center for destiny attainment</p>
          </div>
          <div className="we-are-box bounce-in">
            <FaShieldAlt className="we-are-icon" />
            <p>A sign and symbol of integrity in ministry</p>
          </div>
        </div>
      </section>
      
      {/* Section 5: Departments */}
    <section className="departments-section">
      <h2 className="fade-in">Church Departments</h2>
      <div className="departments-list">
        {departments.map((dept, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div key={index} className="department-box slide-up">
              <img src={dept.image} alt={dept.hod} className="department-image" />
              <div className="department-text">
                <h3>{dept.name}</h3>
                <p><strong>HOD / Manager:</strong> {dept.hod}</p>
                <p><strong>Assistant HOD:</strong> {dept.ahod}</p>
                <p className="department-description">
                  {isExpanded ? dept.description : `${dept.description.substring(0, 120)}...`}
                </p>

                <button 
                  onClick={() => setExpandedIndex(isExpanded ? null : index)} 
                  className="read-more-btn"
                >
                  {isExpanded ? "Read Less..." : "Learn More.."}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
=======
import hod9 from '../assets/hod9.png';
import hod10 from '../assets/tolu.png';
import image1 from '../assets/dance.jpg';
import image2 from '../assets/pw_p2.jpg';
import image3 from '../assets/j_pw.jpg';
import image4 from '../assets/sit.jpg';
import image5 from '../assets/p_pw_gift.jpg';
import image6 from '../assets/IMG_3824.jpg';
import image7 from '../assets/p_pw.jpg';
import image8 from '../assets/pw_p.jpg';
import image9 from '../assets/woman.jpg';
import image10 from '../assets/woman_f.jpg';

import uloorinLogo from '../assets/uloorin.jpg';
import ojoduLogo from '../assets/ojudu.png';
import abujaLogo from '../assets/abuja.jpg';
import marylandLogo from '../assets/maryland.png';
import agegeLogo from '../assets/agege.jpg';
import sunnysideLogo from '../assets/Rhema logo-2.png';



const carouselImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

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
  const fullText = `The story of Rhema Chapel International Churches, Republic of South Africa, is a typical reflection of the account of the 
  Church in the Acts of the Apostles: “…and they, continuing daily with one accord in the temple, and breaking bread from house to house, did 
  eat their meat with gladness and singleness of heart, praising God and having favor with all the people. And the Lord added to the church daily
   such as should be saved… and so mightily grew the word of God and prevailed” (Acts 2:46-47; 19:20). From two believers coming together on 
   September 20th in a shared apartment in Sunnyside, Pretoria, for a Bible study, we have grown into a family church and a weekly gathering 
   of saints who come from different nations of African descent with a central mandate to take the word of God to the nations of the world while
    emphasizing its integrity. We aim to establish more satellite churches in cities, townships, and campuses of institutions of higher learning
     throughout the SADC region. Our church's core values have shaped who we are and the difference God has called us to make in a multi-racial 
     community and culture, as seen in South Africa. In our ministry approach, we desire to see every believer come to their full potential 
     and calling in Christ within an atmosphere that emphasizes the peoplehood of God. He said we are His people, and He is our God. 
     To achieve this, our primary focus is on the Word of God, worship, training, family, outreach, and ministry are brought to the 
     forefront in enriching the men and women of God from the very inception of their journey of faith to maturity. Following the 
     pattern of the New Testament Church, we aspire to see Jesus lifted high and ministry gifts developed to disciple the nations 
     of the world in line with the Great Commission through the enablement of the Holy Spirit. Through our various classes and 
     curricula, which are tailor-made to fit both the inexperienced seeker and the already established believer who is hungry 
     for more, the individual Christian's depth in Christ is nourished so that they rise from initial thirst and dryness to overflowing and 
     becoming a river that satisfies our neighborhood. Rhema Chapel International Churches (an arm of the Ever-Increasing Word Ministries), 
     as the home of blessed people, is a place for the aged and the young, families and singles, the fun-loving and the conservative. 
     Our team of energetic workers does everything possible to ensure that you feel at home. We are small enough to minister to you yet 
     large enough to welcome you.`;

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((i) => (i + 1) % carouselImages.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const installations = [
  { name: "Ulorin (HQ & Apostolic Center)", logo: uloorinLogo },
  { name: "Ojudu", logo: ojoduLogo },
  { name: "Abuja", logo: abujaLogo },
  { name: "Maryland", logo: marylandLogo },
  { name: "Agege", logo: agegeLogo },
  { name: "Sunnyside", logo: sunnysideLogo },
];



  return (
    <div className="about">

      {/* Hero */}
      <section className="about-hero">
        <h1>About Rhema Chapel International Churches</h1>
        <h2>An Arm of the Ever Increasing Word Ministries</h2>
        <h3>A Home of the Blessed People, a People of the Word, changing their World</h3>
      </section>

      {/* Carousel */}
      <section className="carousel-banner">
        <div className="banner-frame">
          <img
            src={carouselImages[carouselIndex]}
            alt="Church Banner"
            className="banner-image"
          />
        </div>
      </section>

      {/* Senior Minister */}
      <section className="senior-minister">
        <img src={founderImg} alt="Founder" className="minister-image" />
        <div className="minister-text">
          <h2>Rev. George Olawale Odegboye</h2>
          <p className="minister-role">Senior Minister in Charge</p>
          <p>An apostle of the New Testament with a commission to “Take the Word of the nations of the World, emphasizing its integrity.
             He is the President of the Ever Increasing Word Ministries, aka. Rhema Chapel International Churches with many branches worldwide.
              He is also the President of the Word of Victory Bible Training Institute and the Young Minister Teaching School, which are the training arm of the ministry. 
              He teaches the Word of God extensively with a simplistic practical prophetic insight. He is in great demand all over the world across denominations and independent 
              churches for conventions, seminars and outreaches. He is committed to making the Word of God available all over the world through every available means. He hosts the
               weekly Word and You telecast programme on many Television Stations in Nigeria. He is an author of many books on diverse topics concerning the Christian life and living. Rev. 
               George Olawale Adegboye holds a Master’s Degree in Sociology. He is married to Oluruntoyin Modupeola and they are blessed with three children: Faith, Faithful, Faithfulness. 
               They reside in Ilorin, Nigeria.</p>
        </div>
      </section>

      {/* History */}
      <section className="history-section">
        <h2>Our Story</h2>
        <p className={expanded ? "expanded" : "collapsed"}>
          {expanded ? fullText : fullText.slice(0, 2000) + "..."}
        </p>
        <button className="read-more-btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Read Less" : "Read More"}
        </button>
      </section>

      {/* Departments */}
      <section className="departments-section">
        <h2>Church Departments</h2>
        <div className="departments-grid">
          {departments.map((d, i) => (
            <div key={i} className="dept-card">
              <img src={d.image} alt={d.name} />
              <h4>{d.name}</h4>
              <p><b>HOD:</b> {d.hod}</p>
              <p><b>Asst:</b> {d.ahod !== "None" ? d.ahod : "—"}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="installations-carousel">
  <h2 className="carousel-title">Our Global Installations</h2>
  <Swiper
    modules={[Autoplay, Pagination, Navigation]}
    spaceBetween={30}
    slidesPerView={1}
    autoplay={{ delay: 3500, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    navigation={true}
    breakpoints={{
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    className="installations-swiper"
  >
    {installations.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="installation-slide">
          <img src={item.logo} alt={item.name} />
          <h3>{item.name}</h3>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>



>>>>>>> 4c1284a (Update project with latest changes)
    </div>
  );
};

export default About;
