import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./WorldMapSection.css";

// Dummy Country GeoJSONs (You should later replace with real country boundary GeoJSONs)
const countryGeoJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "India",
        info: `
          <h3>India</h3>
          <p><strong>Millets & Area</strong></p>
          <a href="https://www.wfp.org/countries/india" target="_blank" rel="noopener noreferrer">Read More</a>
        `
      },
      
    },
    {
      type: "Feature",
      properties: {
        name: "China",
        info: `
          <h3>China</h3>
          <p><strong>percentage of millets and area</p>
        `
      },
      
    }
    // 👉 Add more countries if needed
  ]
};

const WorldMapSection = () => {
  useEffect(() => {
    const mapContainer = document.getElementById("worldMapContainer");

    // ✅ Fix: Prevent "Map container already initialized" errorglo
    if (mapContainer && mapContainer._leaflet_id) {
      mapContainer._leaflet_id = null;
    }

    const map = L.map("worldMapContainer", {
      zoomControl: true,
      scrollWheelZoom: false
    }).setView([20, 30], 2);

    // Base Map Tile Layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    // Country Highlight + Popup on Hover
    function onEachFeature(feature, layer) {
      layer.on({
        mouseover: function (e) {
          const popup = L.popup({
            closeButton: true,
            offset: L.point(0, -10),
            className: "custom-map-popup",
            autoPan: true,
            maxWidth: 300
          })
            .setLatLng(e.latlng)
            .setContent(feature.properties.info)
            .openOn(map);

          layer.setStyle({
            fillColor: "#0056b3",
            fillOpacity: 0.9
          });
        },
        mouseout: function (e) {
          map.closePopup();
          layer.setStyle({
            fillColor: "#0074D9",
            fillOpacity: 0.7
          });
        }
      });
    }

    L.geoJSON(countryGeoJSON, {
      style: {
        fillColor: "#0074D9",
        weight: 1,
        color: "#ffffff",
        fillOpacity: 0.7
      },
      onEachFeature
    }).addTo(map);
  }, []);

  return (
    <section className="world-map-section">
      <h2>Millets Around the World</h2>
      <div id="worldMapContainer" className="world-map-container"></div>
    </section>
  );
};

export default WorldMapSection;
