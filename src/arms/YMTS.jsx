import "../styles/EIWMArms.css";

import ymtsImage from "../assets/fc_2.jpg";


const YMTS = () => {
  return (
    <div className="arm-page">
      <div className="banner">
        <img src={ymtsImage} alt="Young Minister Teaching School" className="banner-image" />
        <div className="banner-text">
          <h1>Young Minister's Teaching School (YMTS)</h1>
          
        </div>
      </div>

      <div className="content">
        <h2>About YMTS</h2>
        <p><strong>The vision of YMTS is to help mould the man that makes the Ministry, with special empahsis on excellence in Life and Ministry. The vision of the school is to:</strong></p>
        <ul>
        <li>
        To make a free, lifelong training academy available with ease of access to those who are called and want to fullfil the call.
        </li>
        <li>
       To make relevant, balanced, sound and up-to date biblical teachings available concerning the work of the ministry in all formats.
        </li>
        <li>
        To provide Young Ministers with opportunity to fellowship and develop lifelong relationship with others of kindred spirit.
        </li>
        <li>
       To provide a conducive atmosphere atmosphere for identifying, nurturing and development of Charisma and Character through theorectical and practical orientation.
        </li>
        <li>
        To provide an opportunity for the young ministers to be taught, trained, mentored and to minister along the areas of their callings te onset.
        </li>
        <li>
        To offer the Young minister a worlwide medium for ministerial exposure.
        </li>
        <li>
        Finally, to furnish a forum for recruiting many into the labour force of the kingdom for the end.
        </li>
        </ul>
      </div>

        <div className="content">
        <h2>YMTS Departments</h2>
        <p><strong>YMTS has it own departments outside of Rhema Chapel Internationl Churches departments in which everyone who is part of it can serve. These departments are: :</strong></p>
        <ul>
        <li>
        Music Department
        </li>
        <li>
        Technical and Media Department
        </li>
        <li>
        Ministerial Care Department
        </li>
        <li>
       Intersessory Department
        </li>
        <li>
        Ushering Department
        </li>
        </ul>
      
        

        <h2>Programs</h2>
        <ul>
          <li>Ministerial Training</li>
          <li>Preaching, Teaching the Word of God & Public Speaking</li>
          <li>Church Leadership Development</li>
        </ul>

        <h2>Enroll Today</h2>
        <p>
          Join YMTS every Wednesday (17h30 - 18h30) at Rhema Chapel International Churches (Pretoria) Auditorium and start your journey into a fulfilling ministry calling.

          <strong>YMTS is open to anyone, from any denomination, who is interested in ministry. You do not need to be part of Rhema Chapel</strong>
        </p>

        <div className="cta-section">
          <button className="cta-button">Enquire about YMTS</button>
        </div>
      </div>
    </div>
  );
};

export default YMTS;
