import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProgramsPage from './components/ProgramsPage';
import StoryPage from './components/StoryPage';
import EventsPage from './components/EventsPage';
import ServicesPage from './components/ServicesPage';
import DonatePage from './components/DonatePage';
import ContactPage from './components/ContactPage';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/our-story" element={<StoryPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
