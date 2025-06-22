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

// List of African country ISO codes
const africanCountries = [
  "DZA","AGO","BEN","BWA","BFA","BDI","CMR","CPV","CAF","TCD","COM",
  "COG","COD","CIV","DJI","EGY","GNQ","ERI","SWZ","ETH","GAB","GMB","GHA",
  "GIN","GNB","KEN","LSO","LBR","LBY","MDG","MWI","MLI","MRT","MUS",
  "MOZ","NAM","NER","NGA","RWA","STP","SEN","SYC","SLE","SOM","ZAF",
  "SSD","SDN","TZA","TGO","TUN","UGA","ZMB","ZWE"
];

function AfricaMap() {
  const navigate = useNavigate();
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const mapContainerRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // Handle mouse move for tooltip positioning
  const handleMouseMove = (event) => {
    if (mapContainerRef.current) {
      const rect = mapContainerRef.current.getBoundingClientRect();
      const containerWidth = rect.width;
      const tooltipWidth = 220;
      let xPos = event.clientX - rect.left - 100;
      if (xPos + tooltipWidth > containerWidth) {
        xPos = containerWidth - tooltipWidth;
      }
      if (xPos < 0) {
        xPos = 0;
      }
      const yPos = event.clientY - rect.top - 100;
      setTooltipPosition({
        x: xPos,
        y: yPos
      });
    }
  };

  // Handle country interaction
  const handleCountryInteraction = (countryName, event) => {
    if (!isTouchDevice) {
      navigate(`/africa/${encodeURIComponent(countryName)}`);
      return;
    }
    event.preventDefault();
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
    if (selectedCountry === countryName) {
      navigate(`/africa/${encodeURIComponent(countryName)}`);
      setSelectedCountry(null);
    } else {
      setSelectedCountry(countryName);
    }
  };

  useEffect(() => {
    if (isTouchDevice && selectedCountry) {
      const handleOutsideClick = () => {
        setSelectedCountry(null);
      };
      document.addEventListener('touchstart', handleOutsideClick);
      return () => {
        document.removeEventListener('touchstart', handleOutsideClick);
      };
    }
  }, [isTouchDevice, selectedCountry]);

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
            onClick={(e) => handleCountryInteraction(geo.properties.name, e)}
            onTouchStart={(e) => handleCountryInteraction(geo.properties.name, e)}
            onMouseEnter={() => {
              if (!isTouchDevice) {
                setHoveredCountry(geo.properties.name);
              }
            }}
            onMouseLeave={() => {
              if (!isTouchDevice) {
                setHoveredCountry(null);
              }
            }}
            style={{
              default: {
                fill: selectedCountry === geo.properties.name ? "#6a994e" : "#fff",
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

      {/* South Sudan overlay - INSIDE the <> tags */}
      <Geography
        key="south-sudan-overlay"
        geography={{
          type: "Feature",
          properties: { name: "South Sudan" },
          geometry: {
            type: "Polygon",
            coordinates: [[
              [23.89, 12.25],
              [24.5, 12.0],
              [25.2, 11.8],
              [26.0, 11.2],
              [27.5, 10.5],
              [28.5, 9.8],
              [29.5, 9.5],
              [30.5, 9.3],
              [31.5, 9.0],
              [32.5, 8.5],
              [33.5, 8.0],
              [34.0, 7.5],
              [34.5, 7.0],
              [35.0, 6.5],
              [35.3, 6.0],
              [35.0, 5.5],
              [34.5, 5.0],
              [34.0, 4.5],
              [33.0, 4.0],
              [32.0, 3.8],
              [31.0, 3.6],
              [30.0, 3.5],
              [29.0, 3.6],
              [28.0, 4.0],
              [27.0, 4.5],
              [26.0, 5.0],
              [25.0, 6.0],
              [24.5, 7.0],
              [24.0, 8.0],
              [23.9, 9.0],
              [23.9, 10.0],
              [23.9, 11.0],
              [23.89, 12.25]
            ]]
          }
        }}
        onClick={(e) => handleCountryInteraction("South Sudan", e)}
        onTouchStart={(e) => handleCountryInteraction("South Sudan", e)}
        onMouseEnter={() => {
          if (!isTouchDevice) {
            setHoveredCountry("South Sudan");
          }
        }}
        onMouseLeave={() => {
          if (!isTouchDevice) {
            setHoveredCountry(null);
          }
        }}
        style={{
          default: {
            fill: selectedCountry === "South Sudan" ? "#6a994e" : "#fff",
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
    </>
  )}
</Geographies>
      </ComposableMap>
      {/* Tooltip for hover on desktop or selection on mobile */}
      {((!isTouchDevice && hoveredCountry) || (isTouchDevice && selectedCountry)) && (
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
            {isTouchDevice ? selectedCountry : hoveredCountry}
          </div>
          <div style={{ fontSize: "14px", color: "#ffd700" }}>
            {isTouchDevice ? "Tap again to view details" : "Learn History and Heritage"}
          </div>
        </div>
      )}
      {/* Mobile instructions overlay */}
      {isTouchDevice && !selectedCountry && (
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
          Tap on a country to see its name, then tap again to learn more
        </div>
      )}
    </div>
  );
}

export default AfricaMap;