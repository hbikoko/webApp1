import React from "react";
import { Link, Navigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import "./styles/ServicesPage.css";
import sankofa from "../assets/sankofa.png";
import africa from "../assets/africaMap.png";
import baobab from "../assets/baobabTree.png";
import adin from "../assets/adin.png";

function FlipCard({ frontContent, backContent }) {
  const isTouchDevice = window.matchMedia && window.matchMedia("(hover: none)").matches;
  const [flipped, setFlipped] = React.useState(false);

  const handleClick = () => {
    if (isTouchDevice) {
      setFlipped(prev => !prev);
    }
  };

  return (
    <div className="flip-card" onClick={handleClick}>
      <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
        <div className="flip-card-front">
          {frontContent}
        </div>
        <div className="flip-card-back">
          {backContent}
        </div>
      </div>
    </div>
  );
}

function ServicesPage() {
  const { t } = useTranslation();

  // Redirect to Community page
  return <Navigate to="/services/community" replace />;
}

export default ServicesPage;
