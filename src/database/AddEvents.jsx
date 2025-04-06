import React, { useState } from "react";
import { db } from "../database/firebaseConfig";  // ✅ Corrected Import
import { collection, addDoc } from "firebase/firestore";  // ✅ Import Firestore separately


const AddEvent = ({ onEventAdded }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleAddEvent = async (e) => {
    e.preventDefault();
    if (!title || !date) {
      alert("Please enter both event title and date.");
      return;
    }

    try {
      await addDoc(collection(db, "events"), { title, date });
      alert("Event added successfully!");
      onEventAdded(); // Refresh events
      setTitle("");
      setDate("");
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  return (
    <form className="event-form" onSubmit={handleAddEvent}>
      <input type="text" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default AddEvent;
