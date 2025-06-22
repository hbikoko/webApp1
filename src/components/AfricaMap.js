import React, { useState, useRef, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import { useNavigate } from "react-router-dom";

// Using Natural Earth data which includes all African countries
const worldGeoUrl = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

// Comprehensive list of African countries with multiple identifiers
const africanCountries = {
  // North Africa
  "DZA": ["Algeria", "DZ", "012"],
  "EGY": ["Egypt", "EG", "818"],
  "LBY": ["Libya", "LY", "434"],
  "MAR": ["Morocco", "MA", "504"],
  "SDN": ["Sudan", "SD", "729"],
  "TUN": ["Tunisia", "TN", "788"],
  "ESH": ["Western Sahara", "EH", "732"],
  
  // West Africa
  "BEN": ["Benin", "BJ", "204"],
  "BFA": ["Burkina Faso", "BF", "854"],
  "CPV": ["Cape Verde", "CV", "132", "Cabo Verde"],
  "CIV": ["Côte d'Ivoire", "CI", "384", "Ivory Coast"],
  "GMB": ["Gambia", "GM", "270", "The Gambia"],
  "GHA": ["Ghana", "GH", "288"],
  "GIN": ["Guinea", "GN", "324"],
  "GNB": ["Guinea-Bissau", "GW", "624"],
  "LBR": ["Liberia", "LR", "430"],
  "MLI": ["Mali", "ML", "466"],
  "MRT": ["Mauritania", "MR", "478"],
  "NER": ["Niger", "NE", "562"],
  "NGA": ["Nigeria", "NG", "566"],
  "SEN": ["Senegal", "SN", "686"],
  "SLE": ["Sierra Leone", "SL", "694"],
  "TGO": ["Togo", "TG", "768"],
  
  // Central Africa
  "AGO": ["Angola", "AO", "024"],
  "CMR": ["Cameroon", "CM", "120"],
  "CAF": ["Central African Republic", "CF", "140"],
  "TCD": ["Chad", "TD", "148"],
  "COG": ["Congo", "CG", "178", "Republic of the Congo"],
  "COD": ["Democratic Republic of the Congo", "CD", "180", "DRC", "Congo-Kinshasa"],
  "GNQ": ["Equatorial Guinea", "GQ", "226"],
  "GAB": ["Gabon", "GA", "266"],
  "STP": ["São Tomé and Príncipe", "ST", "678", "Sao Tome and Principe"],
  
  // East Africa
  "BDI": ["Burundi", "BI", "108"],
  "COM": ["Comoros", "KM", "174"],
  "DJI": ["Djibouti", "DJ", "262"],
  "ERI": ["Eritrea", "ER", "232"],
  "ETH": ["Ethiopia", "ET", "231"],
  "KEN": ["Kenya", "KE", "404"],
  "MDG": ["Madagascar", "MG", "450"],
  "MWI": ["Malawi", "MW", "454"],
  "MUS": ["Mauritius", "MU", "480"],
  "MOZ": ["Mozambique", "MZ", "508"],
  "RWA": ["Rwanda", "RW", "646"],
  "SYC": ["Seychelles", "SC", "690"],
  "SOM": ["Somalia", "SO", "706"],
  "SSD": ["South Sudan", "SS", "728"],
  "TZA": ["Tanzania", "TZ", "834", "United Republic of Tanzania"],
  "UGA": ["Uganda", "UG", "800"],
  "ZMB": ["Zambia", "ZM", "894"],
  "ZWE": ["Zimbabwe", "ZW", "716"],
  
  // Southern Africa
  "BWA": ["Botswana", "BW", "072"],
  "SWZ": ["Eswatini", "SZ", "748", "Swaziland"],
  "LSO": ["Lesotho", "LS", "426"],
  "NAM": ["Namibia", "NA", "516"],
  "ZAF": ["South Africa", "ZA", "710"]
};

// Helper function to check if a geography is an African country
const isAfricanCountry = (geo) => {
  if (!geo || !geo.properties) return false;
  
  // Check various property names that might contain country identifiers
  const props = geo.properties;
  const possibleIdentifiers = [
    props.ISO_A3,
    props.ISO_A2,
    props.iso_a3,
    props.iso_a2,
    props.ADM0_A3,
    props.NAME,
    props.name,
    props.ADMIN,
    props.NAME_EN,
    props.NAME_LONG,
    props.SOVEREIGNT,
    props.ISO_N3,
    geo.id
  ];
  
  // Check if any identifier matches our African countries
  for (const [iso3, variations] of Object.entries(africanCountries)) {
    for (const identifier of possibleIdentifiers) {
      if (!identifier) continue;
      
      // Check against ISO code and all variations
      if (identifier === iso3 || variations.includes(identifier)) {
        return true;
      }
      
      // Check if the identifier contains any of our variations (case-insensitive)
      const lowerIdent = identifier.toLowerCase();
      for (const variation of variations) {
        if (lowerIdent === variation.toLowerCase() || 
            lowerIdent.includes(variation.toLowerCase())) {
          return true;
        }
      }
    }
  }
  
  return false;
};

// Get the display name for a country
const getCountryName = (geo) => {
  const props = geo.properties;
  
  // Try to match with our known countries first
  for (const [iso3, variations] of Object.entries(africanCountries)) {
    const identifiers = [
      props.ISO_A3, props.iso_a3, props.ADM0_A3,
      props.NAME, props.name, props.ADMIN, props.NAME_EN,
      geo.id
    ];
    
    for (const id of identifiers) {
      if (id === iso3 || (variations && variations.includes(id))) {
        return variations[0]; // Return the primary name
      }
    }
  }
  
  // Fallback to whatever name property exists
  return props.NAME || props.name || props.ADMIN || props.NAME_EN || "Unknown";
};

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
        maxWidth: "1000px", 
        margin: "0 auto",
        marginTop: "60px",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div style={{
        position: "relative",
        width: "100%",
        height: "850px",
        overflow: "hidden"
      }}>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 440,
            center: [20, -3]
          }}
          width={1000}
          height={850}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: "0",
            top: "0"
          }}
          onMouseMove={handleMouseMove}
        >
        <Geographies geography={worldGeoUrl}>
          {({ geographies }) => {
            console.log(`Total geographies: ${geographies.length}`);
            
            return geographies.map(geo => {
              const isAfrican = isAfricanCountry(geo);
              const countryName = isAfrican ? getCountryName(geo) : null;
              const isSelected = selectedCountry === countryName;
              
              // Render non-African countries as transparent
              if (!isAfrican) {
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: "transparent",
                        stroke: "transparent",
                        strokeWidth: 0,
                        outline: "none"
                      },
                      hover: {
                        fill: "transparent",
                        stroke: "transparent",
                        strokeWidth: 0,
                        outline: "none"
                      },
                      pressed: {
                        fill: "transparent",
                        stroke: "transparent",
                        strokeWidth: 0,
                        outline: "none"
                      }
                    }}
                  />
                );
              }
              
              // Render African countries with full interactivity
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={(e) => handleCountryInteraction(countryName, e)}
                  onTouchStart={(e) => handleCountryInteraction(countryName, e)}
                  onMouseEnter={() => {
                    if (!isTouchDevice) {
                      setHoveredCountry(countryName);
                    }
                  }}
                  onMouseLeave={() => {
                    if (!isTouchDevice) {
                      setHoveredCountry(null);
                    }
                  }}
                  style={{
                    default: {
                      fill: isSelected ? "#6a994e" : "#fff",
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
              );
            });
          }}
        </Geographies>
      </ComposableMap>
      </div>
      
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