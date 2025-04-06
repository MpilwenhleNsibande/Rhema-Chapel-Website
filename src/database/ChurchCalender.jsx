import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { db, collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "../database/firebaseConfig";

const ChurchCalender = () => {
  const [events, setEvents] = useState([]);

  // Fetch Events from Firestore
  const fetchEvents = async () => {
    const eventsCollection = collection(db, "events");
    const eventsSnapshot = await getDocs(eventsCollection);
    const eventsList = eventsSnapshot.docs.map((doc) => ({
      id: doc.id,
      title: doc.data().title,
      date: doc.data().date, // Ensure Firestore date is stored as "YYYY-MM-DD"
    }));
    setEvents(eventsList);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Add Event
  const handleDateClick = async (info) => {
    const eventTitle = prompt("Enter event title:");
    if (eventTitle) {
      const newEvent = {
        title: eventTitle,
        date: info.dateStr, // Selected date
      };

      const docRef = await addDoc(collection(db, "events"), newEvent);
      
      // Update state immediately
      setEvents([...events, { id: docRef.id, ...newEvent }]);
    }
  };

  // Edit Event
  const handleEventClick = async (info) => {
    const eventId = info.event.id;
    const newTitle = prompt("Edit event title:", info.event.title);
    
    if (newTitle) {
      const eventRef = doc(db, "events", eventId);
      await updateDoc(eventRef, { title: newTitle });

      // Update state immediately
      setEvents(events.map(event => 
        event.id === eventId ? { ...event, title: newTitle } : event
      ));
    }
  };

  // Delete Event
  const handleEventDelete = async (info) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      const eventId = info.event.id;
      await deleteDoc(doc(db, "events", eventId));

      // Remove from state immediately
      setEvents(events.filter(event => event.id !== eventId));
    }
  };

  return (
    <div>
      <h2>Church Events Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick} // Add new event
        eventClick={(info) => {
          if (window.confirm("Edit or delete event?\nOK = Edit, Cancel = Delete")) {
            handleEventClick(info);
          } else {
            handleEventDelete(info);
          }
        }} // Click to edit or delete
      />
    </div>
  );
};

export default ChurchCalender;
