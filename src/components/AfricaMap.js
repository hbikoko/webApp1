// src/components/AfricaMap.js
import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { useNavigate } from 'react-router-dom';

// World GeoJSON URL (covers the entire world)
const worldGeoUrl = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

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
      projectionConfig={{ scale: 300, center: [20, 0] }}
      width={800}
      height={600}
    >
      <Geographies geography={worldGeoUrl}>
        {({ geographies }) =>
          geographies
            // Filter to include only features whose id (ISO code) is in our African list
            .filter(geo => africanCountries.includes(geo.id))
            .map(geo => {
              const countryName = geo.properties.name || "unknown";
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => navigate(`/africa/${encodeURIComponent(countryName)}`)}
                  style={{
                    default: { fill: "#ECEFF1", stroke: "#607D8B", strokeWidth: 0.75 },
                    hover:   { fill: "#CFD8DC", stroke: "#607D8B", strokeWidth: 1 },
                    pressed: { fill: "#FF5722", stroke: "#607D8B", strokeWidth: 1 },
                  }}
                />
              );
            })
        }
      </Geographies>
    </ComposableMap>
  );
}

export default AfricaMap;

