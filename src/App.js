import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n'; // initialize i18next
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ProgramsPage from './components/ProgramsPage';
import StoryPage from './components/StoryPage';
import EventsPage from './components/EventsPage';
import ServicesPage from './components/ServicesPage';
import DonatePage from './components/DonatePage';
import ContactPage from './components/ContactPage';
import ComingSoon from './components/comingSoon';

// Import new pages
import HeritageHistoryPage from './components/HeritageHistoryPage';
import CommunityPage from './components/CommunityPage';
import CurrentProjectsPage from './components/CurrentProjectsPage';
import PolicyPositionsPage from './components/PolicyPositionsPage';
import CountryPage from './components/CountryPage';

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

        {/* Card subpages */}
        <Route path="/services/heritage-and-history" element={<HeritageHistoryPage />} />
        <Route path="/services/community" element={<CommunityPage />} />
        <Route path="/services/current-projects" element={<CurrentProjectsPage />} />
        <Route path="/services/policy-and-positions" element={<PolicyPositionsPage />} />

        <Route path="/donate" element={<DonatePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/africa/:countryName" element={<CountryPage />} />
      </Routes>
    </Router>
  );
}

export default App;

