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
import SummerReadingRegistration from './components/SummerReadingRegistration';

// Import new pages
import HeritageHistoryPage from './components/HeritageHistoryPage';
import CommunityPage from './components/CommunityPage';
import CurrentProjectsPage from './components/CurrentProjectsPage';
import PolicyPositionsPage from './components/PolicyPositionsPage';
import CountryPage from './components/CountryPage';
import SupportPage from './components/SupportPage';
import AboutUsPage from './components/AboutUsPage';
import BoardOfDirectorsPage from './components/BoardOfDirectorsPage';
import EducationPage from './components/EducationPage';

import './App.css';
import CommunityEvents from './components/CommunityEvents';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/board-of-directors" element={<BoardOfDirectorsPage />} />
        <Route path="/our-story" element={<StoryPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/services" element={<ServicesPage />} />

        {/* Card subpages */}
        <Route path="/services/heritage-and-history" element={<HeritageHistoryPage />} />
        <Route path="/services/community" element={<CommunityPage />} />
        <Route path="/services/education" element={<EducationPage />} />
        <Route path="/services/cultural" element={<ComingSoon />} />
        <Route path="/services/wellness" element={<ComingSoon />} />
        <Route path="/services/resources" element={<ComingSoon />} />
        <Route path="/services/current-projects" element={<CurrentProjectsPage />} />
        <Route path="/services/policy-and-positions" element={<PolicyPositionsPage />} />

        <Route path="/donate" element={<DonatePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/africa/:countryName" element={<CountryPage />} />
        <Route path="/summer-reading-program-registration-2025" element={<SummerReadingRegistration />} />
        <Route path="/community-events" element={<CommunityEvents />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

