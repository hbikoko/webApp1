import React, { useState, useRef, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import { useNavigate } from "react-router-dom";

// World GeoJSON URL
const worldGeoUrl =
  "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

// List of African country ISO codes remains unchanged

function AfricaMap() {
  const navigate = useNavigate();
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [tappedCountry, setTappedCountry] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const mapContainerRef = useRef(null);
  
  // Handle mouse move for tooltip positioning
  const handleMouseMove = (event) => {
    if (mapContainerRef.current) {
      const rect = mapContainerRef.current.getBoundingClientRect();
      const containerWidth = rect.width;
      
      // Calculate tooltip width (200px) + some padding
      const tooltipWidth = 220;
      
      // Calculate x position, ensuring tooltip stays within container bounds
      let xPos = event.clientX - rect.left - 100; // Center tooltip on cursor horizontally
      
      // Adjust if tooltip would go beyond right edge
      if (xPos + tooltipWidth > containerWidth) {
        xPos = containerWidth - tooltipWidth;
      }
      
      // Ensure tooltip doesn't go beyond left edge
      if (xPos < 0) {
        xPos = 0;
      }
      
      // Calculate y position
      const yPos = event.clientY - rect.top - 100; // Position above cursor
      
      setTooltipPosition({
        x: xPos,
        y: yPos
      });
    }
  };

  // For mobile: Handle tap events
  const handleCountryTap = (countryName, event) => {
    // Prevent default behavior
    event.preventDefault();
    
    // Set the tapped country name
    setTappedCountry(countryName);
    
    // Set tooltip position based on tap coordinates
    if (mapContainerRef.current) {
      const rect = mapContainerRef.current.getBoundingClientRect();
      
      setTooltipPosition({
        x: event.touches ? 
           (event.touches[0].clientX - rect.left - 100) : 
           (event.clientX - rect.left - 100),
        y: event.touches ? 
           (event.touches[0].clientY - rect.top - 100) : 
           (event.clientY - rect.top - 100)
      });
    }
    
    // Navigate after a brief delay to show the tooltip first
    setTimeout(() => {
      navigate(`/africa/${encodeURIComponent(countryName)}`);
      setTappedCountry(null);
    }, 600); // Delay for 600ms to allow reading the country name
  };

  // Detect if we're on a touch device
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  return (
    <div 
      ref={mapContainerRef} 
      style={{ 
        width: "100%", 
        maxWidth: "900px", 
        margin: "0 auto",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 440,
          center: [18, 5]
        }}
        style={{
          width: "100%",
          height: "800px",
          margin: "0 auto"
        }}
        onMouseMove={handleMouseMove}
      >
        <Geographies geography={worldGeoUrl}>
          {({ geographies }) => (
            <>
              {geographies
                .filter(geo => africanCountries.includes(geo.id))
                .map(geo => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={isTouchDevice ? 
                      undefined : 
                      () => navigate(`/africa/${encodeURIComponent(geo.properties.name)}`)
                    }
                    onTouchStart={(e) => isTouchDevice && 
                      handleCountryTap(geo.properties.name, e)
                    }
                    onMouseEnter={() => {
                      setHoveredCountry(geo.properties.name);
                    }}
                    onMouseLeave={() => {
                      setHoveredCountry(null);
                    }}
                    style={{
                      default: {
                        fill: "#fff",
                        stroke: "#607D8B",
                        strokeWidth: 0.75
                      },
                      hover: {
                        fill: "#6a994e",
                        stroke: "#607D8B",
                        strokeWidth: 1
                      },
                      pressed: {
                        fill: "#6a994e",
                        stroke: "#607D8B",
                        strokeWidth: 1
                      }
                    }}
                  />
                ))}
            </>
          )}
        </Geographies>
      </ComposableMap>
      
      {/* Tooltip for both hover and tap */}
      {(hoveredCountry || tappedCountry) && (
        <div
          style={{
            position: "absolute",
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`,
            background: "rgba(0, 0, 0, 0.7)",
            color: "#fff",
            padding: "10px 15px",
            borderRadius: "5px",
            width: "200px",
            textAlign: "center",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            pointerEvents: "none",
            zIndex: 1000
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "5px" }}>
            {hoveredCountry || tappedCountry}
          </div>
          <div style={{ fontSize: "14px", color: "#ffd700" }}>
            Learn History and Heritage
          </div>
        </div>
      )}
      
      {/* Mobile instructions overlay */}
      {isTouchDevice && (
        <div 
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            padding: "10px 15px",
            borderRadius: "5px",
            textAlign: "center",
            zIndex: 900,
            width: "80%",
            maxWidth: "300px"
          }}
        >
          Tap on a country to learn about its heritage
        </div>
      )}
    </div>
  );
}

export default AfricaMap;