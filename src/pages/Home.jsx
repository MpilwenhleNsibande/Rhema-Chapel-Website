import React, { useState } from "react";
import { FaChurch, FaPrayingHands, FaGlobe, FaHandsHelping, FaChalkboardTeacher } from "react-icons/fa";
import Header from "../components/Header";
import "../styles/Home.css";
import pastorImg from "../assets/Ps.jpeg";
import bibleImg from "../assets/bible.jpg";
import wordImg from "../assets/SMIC_2.jpg";
import sunnysideLogo from '../assets/oluyole.jpg';

const Home = () => {
  const [showPastorText, setShowPastorText] = useState(false);
  const [showWordText, setShowWordText] = useState(false);

  return (
    <div className="home-page">
      <Header />
    
      <section className="pastor-section">
        <div className="pastor-image-container">
          <img src={pastorImg} alt="Pastor" className="pastor-image-glow" />
        </div>
        <div className="pastor-text">
          <h2>From Pastor's Corner</h2>
          <p>
            "Ever wondered about what possibilities lie ahead for a man or woman of faith? All you need to do is step forward, and you will discover that God wants to use you irrespective of your mess. He is a God of second chance, irrespective of how far away we have stayed from His plans for our lives, He has a plan to begin afresh with you and unveil all that He originally intended to do with your life. Such possibilities abound in Rhema Chapel International Churches wherever its extension is found. This is the practical story of my life, given an encounter with the Living Christ several years ago. This and more await you as you engage in our many life-transforming programs as a church rightly situated in the very heart of Pretoria.
          </p>
          {showPastorText && (
            <p>
              Our Arcadia and Sunnyside installations are here for you. We are glad you are interested in our church and you are making time to visit our website. Please feel free to engage with us. As a church, we believe that Jesus loves us and wants us to live out all He has yet to accomplish through us. The Voice still calls out till today: “Whom shall I send and who shall go for us?” (Isaiah 6:8) Are you the sort of person who is seeking out the meaning and purpose for why you are on earth, and desires the answer to the reasons why you are made the way you are? Then come on with us and you'll find living at its fullest. As long as there are territories where somebody is yet to be discipled, the call still stands to go make disciples of all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: teaching them to observe all things whatsoever he had commanded us (Matthew 19:28)"
            </p>
          )}
          <div className="pastor-signature">
  — Pastor Gospel Azuatalam, Minister in Charge (MIC)
</div>
<button className="read-more-btn" onClick={() => setShowPastorText(!showPastorText)}>
  {showPastorText ? "Show Less" : "Read More"}
</button>


        </div>
      </section>

      <section className="vision-section">
        <FaGlobe className="vision-icon" />
        <h2>Our Vision</h2>
        <p>"Taking the Word of God to the nations, emphasizing its integrity."</p>
      </section>

      <section className="services-section">
        <h2>Our Weekly Services</h2>
        <div className="services-grid">
          {[
            { icon: FaChurch, title: "Sunday Celebration", time: "Sundays · 10h00–12h00" },
            { icon: FaChalkboardTeacher, title: "YMTS (Young Minister School)", time: "Wednesdays · 17h30–19h30" },
            { icon: FaPrayingHands, title: "All‑Night Prayer", time: "Fridays · 22h00–03h00" },
            { icon: FaHandsHelping, title: "Victory Hour Prayer", time: "Fridays · 17h30–19h30" },
          ].map(({ icon: Icon, title, time }, i) => (
            <div className="service-card" key={i}>
              <Icon className="service-icon" />
              <h3>{title}</h3>
              <p>{time}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="word-of-the-year">
        <img src={wordImg} alt="Word of the Year" className="word-image" />
        <div className="word-text">
          <h2>
            2025: <span className="highlight">OUR YEAR OF MADE FOR MORE</span>
            <br />
            <span className="scripture">John 10:10 · Eph 3:20</span>
          </h2>
          <p className={`word-para ${showWordText ? "expanded" : "collapsed"}`}>
            In seeking the face of God for our watchword for the year 2025, what God wants us to do with the rest of our lives was central to my mind. While we all have accomplished much in our lives to date, it’s important to stop, look, and listen to God regarding what He wants us to do with the remainder of our days on Earth. Whether you realize it or not, because God loves us, He has a vision for our future, distinct from our individual desires or what others intend for us. For those of us alive today, it is because we have not yet fulfilled what we were made for; God has a greater plan for your life than you have for yourself. As believers in Christ, we are described as His workmanship in Ephesians 2:10. The word translated "workmanship" here is "poiema," which is also rendered "masterpiece." That is who He created us to be for the life He desires us to live. Whether the lives we are currently leading reflect our identity as masterpieces is another matter. According to this scripture, the reason we were made the way we were is so that we can do the good works He planned for us long ago. By placing His image in us, God has made us a masterpiece and assumes an extra measure of ownership and responsibility for our lives. Our greatest assignment is to align ourselves with God's vision for our lives rather than merely continuing the status quo. If our motivations for living do not resonate with God’s vision for our future, then He is not obligated to provide us with all the life that He would have given. We must commit ourselves more than ever to understanding why He created us.
            {showWordText && (
              <> In my nearly half-century of living as a born-again Christian, one of the most tragic and unfortunate observations I have is that many believers and their churches have settled for less than God's best for what He created them for. To settle for something less than God's best simply means becoming comfortable with a life that does not reflect God's highest intentions for us. God's vision for our lives is to conform to the image of a masterpiece, which is our purpose so we can fulfill His will. This is why God's word for us this year resonates deeply. God has designated 2025 as a year for us to challenge, inspire, provoke, stir up, stretch ourselves, build ourselves, reinvent ourselves, and strive more than we ever have before, because we are MADE FOR MORE than we have been living for. This phrase emphasizes that as individuals and as a church, we possess the ability, capacity, and capability to achieve more than we might initially believe. The core idea is that we, as believers, are meant to be more than ordinary; we have the potential for significant impact, difference-making, and purpose in life. Being made for more means living up to one's potential as an image-bearer of God. This phrase encourages all believers to push past perceived boundaries and limitations and strive for greater things in their lives. In 2025, knowing we are MADE FOR MORE, we must live a life without limits. However, let me clarify: everyone has limits as part of daily life. Everyone faces limiting circumstances and mental frameworks. When Jesus enters our lives, He desires to remove the limits hindering us. However, we become so accustomed to the status quo that we struggle to venture beyond our limits, often imprisoning ourselves in our minds. There are both good limits, which protect us from foolishness and harm, and bad limits that prevent us from experiencing God's fullness in our lives. When I speak of "no more limits" in 2025, I mean not to disobey laws or necessary boundaries that maintain order or to act foolishly. Rather, I mean eliminating limits that keep God at a distance. It is a call to seize what Christ Jesus seized us for. These are the bad limits we have accepted as the norm that conflict with God's will for us, and they must be removed. In short, bad limits obstruct us from receiving God's fullness and entering a lifestyle of abundance He has for us. These limits confine us in a prison without walls, preventing us from realizing His purposes and plans for our lives. As God transforms us to reflect Him more fully, we can expect two things: (1) we will increasingly live as we were created to—the Masterpiece life—and (2) we will experience deeper pain when we do not, living for something less than God's best. As children of God, our greatest duty and obligation—one we owe to God, ourselves, the world, our generation, and others—is to strive to be everything God made us to be. MADE FOR MORE is a call to action, a reminder, and a charge to make a radical choice to demand more of ourselves than we have previously lived for. Ephesians provides insight into what it means to live the abundant life Jesus speaks of in John 10. All of us can embrace God's "more" for us, personally and collectively as the church, His body. The Apostle Paul prayed for the Ephesians (Ephesians 1:18-23) to be stirred and to apprehend the more they were made for in Christ. We are made for more and must begin to live and move as people who are MADE FOR MORE. This year, declare both as an individual and as a local church that you are made for more. Beyond this affirmation and acknowledgment, begin to strive intentionally both individually and collectively as a church to live like those who are made for more. We were made for more than mere existence; we were made as God's masterpieces to thrive, dream big, explore, and impact the world in greater ways. God has a plan to give each of us a future filled with hope, one that surpasses anything we can imagine or desire. We are made for more; hence, we should not settle for a life less than we were designed for. Each of us was made for greatness, for significance, and for a life that matters. Our lives are canvases, painted with the colors of our choices. Ensure that you craft a masterpiece and do not merely exist. You were created to live a full, meaningful, and purposeful life. Do not settle for anything less. For true tragedy is not death, but a life unlived despite divine provision and ability for it. You were made for more, so go forth and live the life you were meant to lead. Do not settle for achieving merely "the good life," as it does not satisfy. You can have abundance and still lack purpose. Instead, aim for "the better life," serving God in a way that reflects your heart. Identify what you love to do—what God has placed in your heart—and pursue it for His glory. As a child of God, remember these seven pivotal truths: First, there is a life God desires you to live as His child, one that glorifies Him and draws others to Jesus, a life that inspires rather than irritates. Do not settle for less than what you can live, guided by the Word of God. Second, there is a destination God wants you to reach; you should live boundlessly and avoid imprisonment in your own thoughts. Many have expanded frontiers in various fields, proving that the world is your stage to influence; do not settle for anything less than a life of exploration. Acts 1:8 urges us to reach the uttermost parts of the earth. Third, there is a person God wants you to become. Jesus models this, indicating that if He wanted you to be like someone else, He would have made you in that person’s image. Instead, He made you in His image, aspiring to grow into that likeness. How diligently are you working with God to become like Him? Press inward, downward, onward, upward, and outward. Fourth, there is a unique purpose God intends for you to fulfill, defined by your shape: spiritual gifts, heart’s desire, abilities, personality, and experiences. Each of these components molds you uniquely for service. Remember, your spiritual and natural abilities are equally significant for God's work. Fifth, consider the impact you have made for yourself, for Him, and for others. Reflect on your example to others; how have you improved the lives of those around you? Sixth, recognize that God desires abundance for you—how much of His goodness in this life and godliness is manifesting in your experience? He wants you to be a generous soul who enjoys the goodness of the land while sharing it with others. Lastly, there are expectations God has for you. Are you mindful of them and striving to meet them, or are you merely focused on your expectations of Him? He created you for His glory and pleasure (Isaiah 43:21; Revelation 4:11). Know you are MADE FOR MORE than the life you currently lead; you can achieve far greater. You are MADE FOR MORE than your current circumstances, spiritually, mentally, emotionally, physically, financially, vocationally, and relationally. Although you have made progress toward the promised land, where you stand now is not your ultimate destination. This is because you are made for more. You can acquire and achieve more in life than you currently possess. Yes, God has blessed you abundantly, but He desires to do more through you so that, in you, all families of the earth can be blessed. Hence, you are MADE FOR MORE regarding your contributions to God, His Kingdom, your community, yourself, and others. While you may have accomplished a lot, much remains to be done. You are MADE FOR MORE concerning meeting God's expectations of you. Although you have met some in the past, greater expectations await, for you are designed to surpass boundaries. Any believer who collaborates with God to live the life He intends, to be the person He desires, to fulfill the purpose He has set, to embrace by faith all that God has declared are yours, to accomplish everything God requires for His Kingdom, and to pursue His expectations will surely be a masterpiece of divine creation. You were created not merely to succeed but to lead a life of significance. Your life, especially its future, has more meaning than you might anticipate. To discover this meaning, listen to your creator. What is He saying? You are MADE FOR MORE. You were destined to make a difference, for that is the true measure and mission of our lives. At our birth, we cried while those around us rejoiced. When it is time for us to depart, it should be that we leave knowing we fought the good fight, finished our course, and kept the faith, leaving behind a legacy as difference-makers. Remember, there is more to life than what meets the eye; do not settle for the status quo. A deeper reality, a spiritual dimension, invites us to explore and experience more. Today, whether you acknowledge it or not, untapped potential lies within you. God has endowed you with gifts, talents, and abilities, eagerly waiting to be discovered and expressed. You are MADE FOR MORE, and uncovering these gifts will connect you to the next phase of your life as part of His vision. Always remember that the narrative of your life is still unfolding, and the most fulfilling chapters are yet to come. Do not abandon your dreams and aspirations; regardless of your circumstances, you are cherished and valued by God. This truth, when fully understood, empowers you to live a purposeful and significant life that is far greater than you have known. This year, do not settle for less than God's best; yearn for more, strive for greater, and progress from glory to glory. Guide yourself this year by the following principles: do not accept anything or anyone less than you deserve as a child of God; do not compromise your original desires, as this is self-sabotage; avoid stagnation by not settling for what you accepted in the past; do not conform to the expectations of others; steer clear of anything that jeopardizes your relationship with God; seek your heart’s true satisfaction, and avoid temporary solutions for lasting issues; do not procrastinate, for it is a thief of opportunity; refrain from placing yourself in compromising situations; and, finally, anticipate a year where you will fully experience what it means to be MADE FOR MORE…WELCOME ON BOARD.</>
            )}
          </p>
          <button className="read-more-btn" onClick={() => setShowWordText(!showWordText)}>
            {showWordText ? "Show Less" : "Read More"}
          </button>
        </div>
      </section>

 {/* Sunnyside Branch Section */}
<section className="sunnyside-branch">
  <div className="sunnyside-container">
    <div className="sunnyside-info">
      <h2 className="sunnyside-title">
        <span className="highlight">Rhema Chapel</span> – Sunnyside Installation
      </h2>
      <p className="sunnyside-description">
        Sunnyside and surroundings, join our Sunnyside community for spirit-filled worship and fellowship in the heart of Pretoria.
      </p>

      <div className="sunnyside-contact-box">
  
        <div className="sunnyside-contact-info">
          <p className="contact-label">For more information, contact:</p>
          <ul className="sunnyside-contact-list">
            <li>
              <i className="fas fa-user"></i>
              Mrs Lenah Nkuna
            </li>
            <li>
              <i className="fas fa-phone"></i>
              Mobile: <a href="tel:+27821234567">+27 83 460 3882</a>
            </li>
            <li>
              <i className="fas fa-phone-volume"></i>
              Landline: <a href="tel:+27123456789">+27 12 345 6789</a>
            </li>
          </ul>
        </div>
        <div className="sunnyside-logo-container">
          <img
            src={sunnysideLogo}
            alt="Rhema Sunnyside Branch Logo"
            className="sunnyside-logo"
          />
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;
