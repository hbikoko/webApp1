// src/components/AfricaMap.js
import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps';
import { geoCentroid } from 'd3-geo';
import { useNavigate } from 'react-router-dom';

// World GeoJSON URL (covers the entire world)
const worldGeoUrl =
  "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

// Array of African country ISO codes (the “id” field in the GeoJSON)
const africanCountries = [
  "DZA", "AGO", "BEN", "BWA", "BFA", "BDI", "CMR", "CPV", "CAF", "TCD", "COM",
  "COG", "CIV", "DJI", "EGY", "GNQ", "ERI", "SWZ", "ETH", "GAB", "GMB", "GHA",
  "GIN", "GNB", "KEN", "LSO", "LBR", "LBY", "MDG", "MWI", "MLI", "MRT", "MUS",
  "MOZ", "NAM", "NER", "NGA", "RWA", "STP", "SEN", "SYC", "SLE", "SOM", "ZAF",
  "SSD", "SDN", "TZA", "TGO", "TUN", "UGA", "ZMB", "ZWE"
];

function AfricaMap() {
  const navigate = useNavigate();

  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{ scale: 900, center: [20, 0] }} // 3× larger scale
      width={2400}
      height={1800}
      style={{ margin: "0 auto", display: "block" }}
    >
      <Geographies geography={worldGeoUrl}>
        {({ geographies }) =>
          geographies
            .filter(geo => africanCountries.includes(geo.id))
            .map(geo => {
              const countryName = geo.properties.name || "unknown";
              // Compute the centroid of each country
              const centroid = geoCentroid(geo);
              return (
                <React.Fragment key={geo.rsmKey}>
                  <Geography
                    geography={geo}
                    onClick={() => navigate(`/africa/${encodeURIComponent(countryName)}`)}
                    style={{
                      default: { fill: "#ECEFF1", stroke: "#607D8B", strokeWidth: 0.75 },
                      hover: { fill: "#CFD8DC", stroke: "#607D8B", strokeWidth: 1 },
                      pressed: { fill: "#FF5722", stroke: "#607D8B", strokeWidth: 1 }
                    }}
                  />
                  <Marker coordinates={centroid}>
                    <text
                      textAnchor="middle"
                      style={{
                        fontFamily: "system-ui",
                        fill: "#333",
                        fontSize: "24px",
                        fontWeight: "bold",
                        pointerEvents: "none" // Allow clicking on the country shape
                      }}
                    >
                      {countryName}
                    </text>
                  </Marker>
                </React.Fragment>
              );
            })
        }
      </Geographies>
    </ComposableMap>
  );
}

export default AfricaMap;





