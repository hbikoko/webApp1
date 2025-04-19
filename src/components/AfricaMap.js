// src/components/AfricaMap.js
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import { useNavigate } from "react-router-dom";
import { geoCentroid } from "d3-geo";

// World GeoJSON URL
const worldGeoUrl =
  "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

// List of African country ISO codes
const africanCountries = [
  "DZA","AGO","BEN","BWA","BFA","BDI","CMR","CPV","CAF","TCD","COM",
  "COG","CIV","DJI","EGY","GNQ","ERI","SWZ","ETH","GAB","GMB","GHA",
  "GIN","GNB","KEN","LSO","LBR","LBY","MDG","MWI","MLI","MRT","MUS",
  "MOZ","NAM","NER","NGA","RWA","STP","SEN","SYC","SLE","SOM","ZAF",
  "SSD","SDN","TZA","TGO","TUN","UGA","ZMB","ZWE"
];

// Full mapping from ISO code → { name, [lon, lat], markerType }
const capitals = {
  DZA: { name: "Algiers", coordinates: [3.0588, 36.7538], markerType: "circle", color: "#FF5722" },
  AGO: { name: "Luanda", coordinates: [13.2343, -8.8390], markerType: "triangle", color: "#2196F3" },
  BEN: { name: "Porto-Novo", coordinates: [2.6136, 6.4969], markerType: "circle", color: "#4CAF50" },
  BWA: { name: "Gaborone", coordinates: [25.9139, -24.6282], markerType: "triangle", color: "#FF5722" },
  BFA: { name: "Ouagadougou", coordinates: [-1.5197, 12.3714], markerType: "circle", color: "#FF9800" },
  BDI: { name: "Gitega", coordinates: [29.9246, -3.4264], markerType: "triangle", color: "#2196F3" },
  CMR: { name: "Yaoundé", coordinates: [11.5167, 3.8667], markerType: "circle", color: "#4CAF50" },
  CPV: { name: "Praia", coordinates: [-23.5080, 14.9167], markerType: "circle", color: "#9C27B0" },
  CAF: { name: "Bangui", coordinates: [18.5582, 4.3947], markerType: "triangle", color: "#FF5722" },
  TCD: { name: "N'Djamena", coordinates: [15.0444, 12.1348], markerType: "circle", color: "#2196F3" },
  COM: { name: "Moroni", coordinates: [43.2551, -11.6400], markerType: "triangle", color: "#4CAF50" },
  COG: { name: "Brazzaville", coordinates: [15.2663, -4.2661], markerType: "circle", color: "#FF9800" },
  CIV: { name: "Yamoussoukro", coordinates: [-5.2893, 6.8270], markerType: "triangle", color: "#2196F3" },
  DJI: { name: "Djibouti", coordinates: [43.1456, 11.5721], markerType: "circle", color: "#9C27B0" },
  EGY: { name: "Cairo", coordinates: [31.2357, 30.0444], markerType: "triangle", color: "#FF5722" },
  GNQ: { name: "Malabo", coordinates: [8.7832, 3.7500], markerType: "circle", color: "#2196F3" },
  ERI: { name: "Asmara", coordinates: [38.9318, 15.3229], markerType: "triangle", color: "#4CAF50" },
  SWZ: { name: "Mbabane", coordinates: [31.1367, -26.3054], markerType: "circle", color: "#FF9800" },
  ETH: { name: "Addis Ababa", coordinates: [38.7578, 8.9806], markerType: "triangle", color: "#2196F3" },
  GAB: { name: "Libreville", coordinates: [9.4496, 0.4162], markerType: "circle", color: "#9C27B0" },
  GMB: { name: "Banjul", coordinates: [-16.5780, 13.4549], markerType: "triangle", color: "#FF5722" },
  GHA: { name: "Accra", coordinates: [-0.186964, 5.603717], markerType: "circle", color: "#2196F3" },
  GIN: { name: "Conakry", coordinates: [-13.5784, 9.6412], markerType: "triangle", color: "#4CAF50" },
  GNB: { name: "Bissau", coordinates: [-15.5977, 11.8636], markerType: "circle", color: "#FF9800" },
  KEN: { name: "Nairobi", coordinates: [36.8219, -1.2921], markerType: "triangle", color: "#2196F3" },
  LSO: { name: "Maseru", coordinates: [27.4854, -29.3158], markerType: "circle", color: "#9C27B0" },
  LBR: { name: "Monrovia", coordinates: [-10.8010, 6.2907], markerType: "triangle", color: "#FF5722" },
  LBY: { name: "Tripoli", coordinates: [13.1913, 32.8872], markerType: "circle", color: "#2196F3" },
  MDG: { name: "Antananarivo", coordinates: [47.5162, -18.8792], markerType: "triangle", color: "#4CAF50" },
  MWI: { name: "Lilongwe", coordinates: [33.7873, -13.9626], markerType: "circle", color: "#FF9800" },
  MLI: { name: "Bamako", coordinates: [-8.0000, 12.6500], markerType: "triangle", color: "#2196F3" },
  MRT: { name: "Nouakchott", coordinates: [-15.9690, 18.0864], markerType: "circle", color: "#9C27B0" },
  MUS: { name: "Port Louis", coordinates: [57.5012, -20.1609], markerType: "triangle", color: "#FF5722" },
  MOZ: { name: "Maputo", coordinates: [32.5825, -25.9653], markerType: "circle", color: "#2196F3" },
  NAM: { name: "Windhoek", coordinates: [17.0836, -22.5609], markerType: "triangle", color: "#4CAF50" },
  NER: { name: "Niamey", coordinates: [2.1173, 13.5120], markerType: "circle", color: "#FF9800" },
  NGA: { name: "Abuja", coordinates: [7.4898, 9.0579], markerType: "triangle", color: "#2196F3" },
  RWA: { name: "Kigali", coordinates: [30.0619, -1.9441], markerType: "circle", color: "#9C27B0" },
  STP: { name: "São Tomé", coordinates: [6.7333, 0.3333], markerType: "triangle", color: "#FF5722" },
  SEN: { name: "Dakar", coordinates: [-17.4677, 14.7167], markerType: "circle", color: "#2196F3" },
  SYC: { name: "Victoria", coordinates: [55.4501, -4.6191], markerType: "triangle", color: "#4CAF50" },
  SLE: { name: "Freetown", coordinates: [-13.2343, 8.4657], markerType: "circle", color: "#FF9800" },
  SOM: { name: "Mogadishu", coordinates: [45.3182, 2.0469], markerType: "triangle", color: "#2196F3" },
  ZAF: { name: "Pretoria", coordinates: [28.2293, -25.7479], markerType: "circle", color: "#9C27B0" },
  SSD: { name: "Juba", coordinates: [31.5825, 4.8517], markerType: "triangle", color: "#FF5722" },
  SDN: { name: "Khartoum", coordinates: [32.5599, 15.5007], markerType: "circle", color: "#2196F3" },
  TZA: { name: "Dodoma", coordinates: [35.7416, -6.1630], markerType: "triangle", color: "#4CAF50" },
  TGO: { name: "Lomé", coordinates: [1.2047, 6.1725], markerType: "circle", color: "#FF9800" },
  TUN: { name: "Tunis", coordinates: [10.1658, 36.8065], markerType: "triangle", color: "#2196F3" },
  UGA: { name: "Kampala", coordinates: [32.5825, 0.3476], markerType: "circle", color: "#9C27B0" },
  ZMB: { name: "Lusaka", coordinates: [28.3228, -15.3875], markerType: "triangle", color: "#FF5722" },
  ZWE: { name: "Harare", coordinates: [31.0534, -17.8252], markerType: "circle", color: "#2196F3" }
};

// Helper function to render different marker types
const renderMarker = (markerType, color) => {
  switch (markerType) {
    case "triangle":
      return (
        <path
          d="M0,-12 L8,6 L-8,6 Z"  // Slightly larger triangle
          fill={color}
          stroke="#fff"
          strokeWidth={1.5}
        />
      );
    case "circle":
      return (
        <circle
          r={6}
          fill={color}
          stroke="#fff"
          strokeWidth={1.5}
        />
      );
    default:
      return (
        <circle
          r={5}
          fill="#CCCCCC"
          stroke="#fff"
          strokeWidth={1}
        />
      );
  }
};

function AfricaMap() {
  const navigate = useNavigate();

  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        // Adjusted to show entire continent including North Africa and South Africa
        scale: 600,
        center: [18, 10]
      }}
      width={1200}
      height={800}
    >
      <Geographies geography={worldGeoUrl}>
        {({ geographies }) =>
          geographies
            .filter(geo => africanCountries.includes(geo.id))
            .map(geo => (
              <React.Fragment key={geo.rsmKey}>
                <Geography
                  geography={geo}
                  onClick={() =>
                    navigate(
                      `/africa/${encodeURIComponent(
                        geo.properties.name
                      )}`
                    )
                  }
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
                {/* Country name at centroid */}
                <Marker coordinates={geoCentroid(geo)}>
                  <text
                    textAnchor="middle"
                    y={-5}
                    style={{
                      fontFamily: "system-ui",
                      fill: "#333",
                      fontSize: "9px"
                    }}
                  >
                    {geo.properties.name}
                  </text>
                </Marker>
              </React.Fragment>
            ))
        }
      </Geographies>

      {/* Render capital markers with variety of shapes and colors */}
      {Object.values(capitals).map(({ name, coordinates, markerType, color }) => (
        <Marker key={name} coordinates={coordinates}>
          {renderMarker(markerType, color)}
          {/* Optional: Add city name labels if desired */}
          {/*
          <text
            textAnchor="middle"
            y={14}
            style={{
              fontFamily: "system-ui",
              fill: "#333",
              fontSize: "8px"
            }}
          >
            {name}
          </text>
          */}
        </Marker>
      ))}
    </ComposableMap>
  );
}

export default AfricaMap;










