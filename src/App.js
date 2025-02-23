import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ProgramsPage from './components/ProgramsPage';
import StoryPage from './components/StoryPage';
import EventsPage from './components/EventsPage';
import ServicesPage from './components/ServicesPage';
// import HeritageHistoryPage from './components/HeritageHistoryPage';
// import CommunityPage from './components/CommunityPage';
// import CurrentProjectsPage from './components/CurrentProjectsPage';
// import PolicyPositionsPage from './components/PolicyPositionsPage';
import DonatePage from './components/DonatePage';
import ContactPage from './components/ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/our-story" element={<StoryPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/heritage-and-history" element={< ServicesPage />} />
        <Route path="/services/community" element={<ServicesPage />} />
        <Route path="/services/current-projects" element={<ServicesPage />} />
        <Route path="/services/policy-and-positions" element={<ServicesPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
