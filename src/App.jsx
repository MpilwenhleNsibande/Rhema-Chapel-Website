import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Sermons from './pages/Sermons';
import Events from './pages/Events';

import Arms from './pages/Arms';
import RhemaChapel from './arms/RhemaChapel';
import YMTS from './arms/YMTS';
import WOVBTI from './arms/WOVBTI';
import PreSchool from './arms/PreSchools';
import CampusFellowship from './arms/CampusFellow';
import Dormitory from './arms/Dormetry';
import GoLiveButton from './components/GoLive';


import Footer from './components/Footer';
import './App.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/events" element={<Events />} />
        <Route path="/goLive" element={<GoLiveButton />} />
        
        
        <Route path="/arms" element={<Arms />} />
        <Route path="/eiwm/rhema-chapel" element={<RhemaChapel />} />
        <Route path="/eiwm/ymts" element={<YMTS />} />
        <Route path="/eiwm/wovbti" element={<WOVBTI/>} />
        <Route path="/eiwm/campus-fellowship" element={<CampusFellowship/>} />
        <Route path="/eiwm/dormitory" element={<Dormitory/>} />
        <Route path="/eiwm/preschools" element={<PreSchool/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;