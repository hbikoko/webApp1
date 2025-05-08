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
                    onClick={() =>
                      navigate(
                        `/africa/${encodeURIComponent(
                          geo.properties.name
                        )}`
                      )
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
      
      {/* Tooltip - Now with gold text for "Learn History and Heritage" */}
      {hoveredCountry && (
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
          <div style={{ fontWeight: "bold", marginBottom: "5px" }}>{hoveredCountry}</div>
          <div style={{ fontSize: "14px", color: "#ffd700" }}>Learn History and Heritage</div>
        </div>
      )}
    </div>
  );
}

export default AfricaMap;