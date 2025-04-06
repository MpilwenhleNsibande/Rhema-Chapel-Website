import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "../styles/Events.css";

const Events = () => {
  // Upcoming Events Data
  const events = [
    { 
      title: "Easter Faith Conference", 
      date: "2025-04-02T17:00:00", 
      endDate: "2025-04-06T21:00:00",
      description: "Join us for a powerful Easter experience. The Cross: Answer for the Thirst. Daily at 5PM.", 
      image: "https://z-p3-scontent.fjnb11-1.fna.fbcdn.net/v/t1.6435-9/166508656_3792814970794340_3326706342971832082_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=75d36f&_nc_eui2=AeF1vDyMFZlohiY0Ydw2wXGt29M4a9HabsPb0zhr0dpuw_wHQ_GUy-_mGjXXMv3bg25XaESGjbCwXWfxSD1hWOVP&_nc_ohc=uW7fjIKk4T4Q7kNvgFsLrjJ&_nc_oc=Adm7CzuMtZDETFQir3Q_bipMdjq6mHGxaDLErbiy_bNNOsJC69WD21jZKSjfHkovDfc&_nc_zt=23&_nc_ht=z-p3-scontent.fjnb11-1.fna&_nc_gid=SN3D95uVPuZoUIE2UB0J9w&oh=00_AYGnGf6IUo5pGmUo8AvrG2V5HRL1Trp-X3ULHJL7dxgqqw&oe=680DDB3A",
      location: "FO001 Scopus Heights, 505 Madiba Street, Opposite Nedbank Plaza, Arcadia Pretoria",
      highlight: true
    },
    { 
      title: "Sunday Worship Service", 
      date: "2025-04-06T10:00:00", 
      description: "Join us for a powerful worship experience.", 
      image: "https://z-p3-scontent.fjnb11-1.fna.fbcdn.net/v/t1.6435-9/62073959_496568291084671_2831124329922560000_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHdH9nFsCKYzjjyRd0ewKEKE6cjbnCwT3YTpyNucLBPdq0lFAYqfvkS0hBmp3rdB50mRowzz_0E6NQ-TGd68p7e&_nc_ohc=Sq8HeqxTmMwQ7kNvgG91FWY&_nc_oc=AdkMpijGNGxGD3_r6jnZQs9DaUIFGko6oJXSbT4M2LqQFAh7IU0fVtAHrr72eYg0LWg&_nc_zt=23&_nc_ht=z-p3-scontent.fjnb11-1.fna&_nc_gid=61gJaCE72Y_wyPQ7Q-Ye8Q&oh=00_AYEIPn5aoIGo9E5IALSIrFSpqxaFRDOasDJAi8VNBTtLJA&oe=680DDE24" 
    },
    { 
      title: "Youth Conference", 
      date: "2025-04-12T16:00:00", 
      description: "Inspiration and growth for young people.", 
      image: "https://z-p3-scontent.fjnb11-1.fna.fbcdn.net/v/t1.6435-9/61674957_494040448004122_3872287242139467776_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGv1arUVK0sxx_qRO4L5cKql-ExMvp929CX4TEy-n3b0GLvkoUJqTZzKCIHkRkLTd1jOQXB5ADle2eLYZGsg9ru&_nc_ohc=eUpM1Gc6OvoQ7kNvgFJdJPa&_nc_oc=Adkiia91CvVsQYq6f9-L3XhXA30QjtsIRLY2rNe8KnVMESxWPa3yIMdMsNhlPHPAP4Q&_nc_zt=23&_nc_ht=z-p3-scontent.fjnb11-1.fna&_nc_gid=ZRBZ0Vj7L9M6HMSAwraNGg&oh=00_AYH_8cgOLwdtE6RsAszFcomZwQMlngMDkKpcwezyxHOh4w&oe=680DE748" 
    }
  ];

  // Image Gallery Data
  const galleryImages = [
    "https://z-p3-scontent.fjnb11-1.fna.fbcdn.net/v/t1.6435-9/61674957_494040448004122_3872287242139467776_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGv1arUVK0sxx_qRO4L5cKql-ExMvp929CX4TEy-n3b0GLvkoUJqTZzKCIHkRkLTd1jOQXB5ADle2eLYZGsg9ru&_nc_ohc=eUpM1Gc6OvoQ7kNvgFJdJPa&_nc_oc=Adkiia91CvVsQYq6f9-L3XhXA30QjtsIRLY2rNe8KnVMESxWPa3yIMdMsNhlPHPAP4Q&_nc_zt=23&_nc_ht=z-p3-scontent.fjnb11-1.fna&_nc_gid=ZRBZ0Vj7L9M6HMSAwraNGg&oh=00_AYH_8cgOLwdtE6RsAszFcomZwQMlngMDkKpcwezyxHOh4w&oe=680DE748",
    "https://z-p3-scontent.fjnb11-1.fna.fbcdn.net/v/t1.6435-9/61674957_494040448004122_3872287242139467776_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGv1arUVK0sxx_qRO4L5cKql-ExMvp929CX4TEy-n3b0GLvkoUJqTZzKCIHkRkLTd1jOQXB5ADle2eLYZGsg9ru&_nc_ohc=eUpM1Gc6OvoQ7kNvgFJdJPa&_nc_oc=Adkiia91CvVsQYq6f9-L3XhXA30QjtsIRLY2rNe8KnVMESxWPa3yIMdMsNhlPHPAP4Q&_nc_zt=23&_nc_ht=z-p3-scontent.fjnb11-1.fna&_nc_gid=ZRBZ0Vj7L9M6HMSAwraNGg&oh=00_AYH_8cgOLwdtE6RsAszFcomZwQMlngMDkKpcwezyxHOh4w&oe=680DE748",
    "https://z-p3-scontent.fjnb11-1.fna.fbcdn.net/v/t1.6435-9/61674957_494040448004122_3872287242139467776_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGv1arUVK0sxx_qRO4L5cKql-ExMvp929CX4TEy-n3b0GLvkoUJqTZzKCIHkRkLTd1jOQXB5ADle2eLYZGsg9ru&_nc_ohc=eUpM1Gc6OvoQ7kNvgFJdJPa&_nc_oc=Adkiia91CvVsQYq6f9-L3XhXA30QjtsIRLY2rNe8KnVMESxWPa3yIMdMsNhlPHPAP4Q&_nc_zt=23&_nc_ht=z-p3-scontent.fjnb11-1.fna&_nc_gid=ZRBZ0Vj7L9M6HMSAwraNGg&oh=00_AYH_8cgOLwdtE6RsAszFcomZwQMlngMDkKpcwezyxHOh4w&oe=680DE748",
    "https://z-p3-scontent.fjnb11-1.fna.fbcdn.net/v/t1.6435-9/61674957_494040448004122_3872287242139467776_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGv1arUVK0sxx_qRO4L5cKql-ExMvp929CX4TEy-n3b0GLvkoUJqTZzKCIHkRkLTd1jOQXB5ADle2eLYZGsg9ru&_nc_ohc=eUpM1Gc6OvoQ7kNvgFJdJPa&_nc_oc=Adkiia91CvVsQYq6f9-L3XhXA30QjtsIRLY2rNe8KnVMESxWPa3yIMdMsNhlPHPAP4Q&_nc_zt=23&_nc_ht=z-p3-scontent.fjnb11-1.fna&_nc_gid=ZRBZ0Vj7L9M6HMSAwraNGg&oh=00_AYH_8cgOLwdtE6RsAszFcomZwQMlngMDkKpcwezyxHOh4w&oe=680DE748",
    "https://z-p3-scontent.fjnb11-1.fna.fbcdn.net/v/t1.6435-9/61674957_494040448004122_3872287242139467776_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGv1arUVK0sxx_qRO4L5cKql-ExMvp929CX4TEy-n3b0GLvkoUJqTZzKCIHkRkLTd1jOQXB5ADle2eLYZGsg9ru&_nc_ohc=eUpM1Gc6OvoQ7kNvgFJdJPa&_nc_oc=Adkiia91CvVsQYq6f9-L3XhXA30QjtsIRLY2rNe8KnVMESxWPa3yIMdMsNhlPHPAP4Q&_nc_zt=23&_nc_ht=z-p3-scontent.fjnb11-1.fna&_nc_gid=ZRBZ0Vj7L9M6HMSAwraNGg&oh=00_AYH_8cgOLwdtE6RsAszFcomZwQMlngMDkKpcwezyxHOh4w&oe=680DE748",
    "https://z-p3-scontent.fjnb11-1.fna.fbcdn.net/v/t1.6435-9/61674957_494040448004122_3872287242139467776_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGv1arUVK0sxx_qRO4L5cKql-ExMvp929CX4TEy-n3b0GLvkoUJqTZzKCIHkRkLTd1jOQXB5ADle2eLYZGsg9ru&_nc_ohc=eUpM1Gc6OvoQ7kNvgFJdJPa&_nc_oc=Adkiia91CvVsQYq6f9-L3XhXA30QjtsIRLY2rNe8KnVMESxWPa3yIMdMsNhlPHPAP4Q&_nc_zt=23&_nc_ht=z-p3-scontent.fjnb11-1.fna&_nc_gid=ZRBZ0Vj7L9M6HMSAwraNGg&oh=00_AYH_8cgOLwdtE6RsAszFcomZwQMlngMDkKpcwezyxHOh4w&oe=680DE748",
    "https://z-p3-scontent.fjnb11-1.fna.fbcdn.net/v/t1.6435-9/61674957_494040448004122_3872287242139467776_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGv1arUVK0sxx_qRO4L5cKql-ExMvp929CX4TEy-n3b0GLvkoUJqTZzKCIHkRkLTd1jOQXB5ADle2eLYZGsg9ru&_nc_ohc=eUpM1Gc6OvoQ7kNvgFJdJPa&_nc_oc=Adkiia91CvVsQYq6f9-L3XhXA30QjtsIRLY2rNe8KnVMESxWPa3yIMdMsNhlPHPAP4Q&_nc_zt=23&_nc_ht=z-p3-scontent.fjnb11-1.fna&_nc_gid=ZRBZ0Vj7L9M6HMSAwraNGg&oh=00_AYH_8cgOLwdtE6RsAszFcomZwQMlngMDkKpcwezyxHOh4w&oe=680DE748",
    "https://z-p3-scontent.fjnb11-1.fna.fbcdn.net/v/t1.6435-9/61674957_494040448004122_3872287242139467776_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGv1arUVK0sxx_qRO4L5cKql-ExMvp929CX4TEy-n3b0GLvkoUJqTZzKCIHkRkLTd1jOQXB5ADle2eLYZGsg9ru&_nc_ohc=eUpM1Gc6OvoQ7kNvgFJdJPa&_nc_oc=Adkiia91CvVsQYq6f9-L3XhXA30QjtsIRLY2rNe8KnVMESxWPa3yIMdMsNhlPHPAP4Q&_nc_zt=23&_nc_ht=z-p3-scontent.fjnb11-1.fna&_nc_gid=ZRBZ0Vj7L9M6HMSAwraNGg&oh=00_AYH_8cgOLwdtE6RsAszFcomZwQMlngMDkKpcwezyxHOh4w&oe=680DE748",
    "https://z-p3-scontent.fjnb11-1.fna.fbcdn.net/v/t1.6435-9/61674957_494040448004122_3872287242139467776_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGv1arUVK0sxx_qRO4L5cKql-ExMvp929CX4TEy-n3b0GLvkoUJqTZzKCIHkRkLTd1jOQXB5ADle2eLYZGsg9ru&_nc_ohc=eUpM1Gc6OvoQ7kNvgFJdJPa&_nc_oc=Adkiia91CvVsQYq6f9-L3XhXA30QjtsIRLY2rNe8KnVMESxWPa3yIMdMsNhlPHPAP4Q&_nc_zt=23&_nc_ht=z-p3-scontent.fjnb11-1.fna&_nc_gid=ZRBZ0Vj7L9M6HMSAwraNGg&oh=00_AYH_8cgOLwdtE6RsAszFcomZwQMlngMDkKpcwezyxHOh4w&oe=680DE748",
    "https://z-p3-scontent.fjnb11-1.fna.fbcdn.net/v/t1.6435-9/61674957_494040448004122_3872287242139467776_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGv1arUVK0sxx_qRO4L5cKql-ExMvp929CX4TEy-n3b0GLvkoUJqTZzKCIHkRkLTd1jOQXB5ADle2eLYZGsg9ru&_nc_ohc=eUpM1Gc6OvoQ7kNvgFJdJPa&_nc_oc=Adkiia91CvVsQYq6f9-L3XhXA30QjtsIRLY2rNe8KnVMESxWPa3yIMdMsNhlPHPAP4Q&_nc_zt=23&_nc_ht=z-p3-scontent.fjnb11-1.fna&_nc_gid=ZRBZ0Vj7L9M6HMSAwraNGg&oh=00_AYH_8cgOLwdtE6RsAszFcomZwQMlngMDkKpcwezyxHOh4w&oe=680DE748",
    "https://z-p3-scontent.fjnb11-1.fna.fbcdn.net/v/t1.6435-9/61674957_494040448004122_3872287242139467776_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGv1arUVK0sxx_qRO4L5cKql-ExMvp929CX4TEy-n3b0GLvkoUJqTZzKCIHkRkLTd1jOQXB5ADle2eLYZGsg9ru&_nc_ohc=eUpM1Gc6OvoQ7kNvgFJdJPa&_nc_oc=Adkiia91CvVsQYq6f9-L3XhXA30QjtsIRLY2rNe8KnVMESxWPa3yIMdMsNhlPHPAP4Q&_nc_zt=23&_nc_ht=z-p3-scontent.fjnb11-1.fna&_nc_gid=ZRBZ0Vj7L9M6HMSAwraNGg&oh=00_AYH_8cgOLwdtE6RsAszFcomZwQMlngMDkKpcwezyxHOh4w&oe=680DE748",
  ];

  // Countdown Timer Function
  const calculateTimeLeft = (eventDate) => {
    const difference = new Date(eventDate) - new Date();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  // State for Countdown Timer
  const [countdowns, setCountdowns] = useState(events.map((event) => calculateTimeLeft(event.date)));
  const galleryRef = useRef(null);

  // Update Countdown Every Second
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdowns(events.map((event) => calculateTimeLeft(event.date)));
    }, 1000);
    return () => clearInterval(timer);
  }, [events]);

  // Infinite scroll animation for gallery
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const galleryTrack = gallery.querySelector('.gallery-track');
    const galleryItems = gallery.querySelectorAll('.gallery-slide');
    
    if (!galleryTrack || !galleryItems.length) return;

    const itemWidth = galleryItems[0].offsetWidth + 
                     parseInt(window.getComputedStyle(galleryItems[0]).marginRight);
    const speed = 1;
    let position = 0;

    const animate = () => {
      position -= speed;
      
      if (position <= -itemWidth * galleryImages.length) {
        position = 0;
      }
      
      galleryTrack.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [galleryImages.length]);

  // Format date range for multi-day events
  const formatDateRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    if (start.toDateString() === end.toDateString()) {
      return `${start.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at ${start.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`;
    }
    
    return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${end.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;
  };

  return (
    <div className="events-container">
      {/* Hero Section with Easter Event */}
      {/*<div className="easter-hero">
        <div className="easter-hero-content">
          <h1>THE CROSS: ANSWER FOR THE THIRST</h1>
          <p className="easter-time">5PM DAILY</p>
          <div className="easter-dates">
            <p>GOOD FRIDAY 2ND APRIL TO EASTER MONDAY 6TH APRIL</p>
            <p>FO001 SCOPUS HEIGHTS, 505 MADIBA STREET, OPPOSITE NEDBANK PLAZA, ARCADIA PRETORIA</p>
          </div>
        </div>
      </div>*/}

      {/* Upcoming Events Section */}
      <div className="upcoming-events-section">
        <h1 className="section-title">Upcoming Events</h1>
        <div className="events-swiper-wrapper">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            modules={[Autoplay]}
            className="events-swiper"
          >
            {events.map((event, index) => (
              <SwiperSlide key={index}>
                <div className="event-card">
                  <div className="event-image-container">
                    <img src={event.image} alt={event.title} className="event-image" />
                    {event.highlight && <div className="event-highlight">Featured Event</div>}
                  </div>
                  <div className="event-content">
                    <h2>{event.title}</h2>
                    <p className="event-date">
                      {event.endDate 
                        ? formatDateRange(event.date, event.endDate)
                        : new Date(event.date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            month: 'long', 
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })
                      }
                    </p>
                    {event.location && <p className="event-location">{event.location}</p>}
                    <p className="event-description">{event.description}</p>
                    <div className="countdown">
                      <div className="countdown-item">
                        <span>{countdowns[index].days}</span>
                        <small>Days</small>
                      </div>
                      <div className="countdown-item">
                        <span>{countdowns[index].hours}</span>
                        <small>Hours</small>
                      </div>
                      <div className="countdown-item">
                        <span>{countdowns[index].minutes}</span>
                        <small>Minutes</small>
                      </div>
                      <div className="countdown-item">
                        <span>{countdowns[index].seconds}</span>
                        <small>Seconds</small>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="gallery-section" ref={galleryRef}>
        <h1 className="section-title">Our Gallery</h1>
        <div className="gallery-container">
          <div className="gallery-track">
            {[...galleryImages, ...galleryImages].map((img, index) => (
              <div key={`gallery-${index}`} className="gallery-slide">
                <img src={img} alt={`Gallery ${index % galleryImages.length + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      

    </div>
  );
};

export default Events;