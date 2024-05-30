// src/Map.js
import React, { useRef, useEffect, useState } from "react";
import "ol/ol.css";
import { Map as OLMap, View } from "ol";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM as OSMSource, Vector as VectorSource } from "ol/source";
import { fromLonLat } from "ol/proj";
import { Feature } from "ol";
import { Point } from "ol/geom";
import { Icon, Style } from "ol/style";
import Overlay from "ol/Overlay";
import axios from "axios";

function Map({ items }) {
  const mapRef = useRef();
  const [map, setMap] = useState(null);
  const popupRef = useRef();

  useEffect(() => {
    const initialMap = new OLMap({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSMSource(),
        }),
      ],
      view: new View({
        center: fromLonLat([-1.90269, 52.4797]),
        zoom: 13,
      }),
    });

    // Create overlay for the popup
    const popupOverlay = new Overlay({
      element: popupRef.current,
      autoPan: true,
      autoPanAnimation: {
        duration: 250,
      },
    });
    initialMap.addOverlay(popupOverlay);

    // Add click handler to show popup on marker click
    initialMap.on("click", function (evt) {
      const feature = initialMap.forEachFeatureAtPixel(
        evt.pixel,
        (feature) => feature
      );
      if (feature) {
        const coordinates = feature.getGeometry().getCoordinates();
        popupOverlay.setPosition(coordinates);
        popupRef.current.style.display = "block";
        popupRef.current.innerHTML = `
          <div style="padding: 10px; border-radius: 5px; background: white; border: 1px solid black;">
            <p>A pretty CSS3 popup.</p>
            <p>Easily customizable.</p>
          </div>
        `;
      } else {
        popupRef.current.style.display = "none";
      }
    });

    setMap(initialMap);
    return () => initialMap.setTarget(null); // Clean up on unmount
  }, []);

  const addMarker = async (address) => {
    try {
      const response = await axios.get(
        "https://api.opencagedata.com/geocode/v1/json",
        {
          params: {
            key: "0aeb49aecb9c435aa9c589700402f495",
            q: address,
            limit: 1,
          },
        }
      );

      if (response.data.results.length > 0) {
        const { lat, lng } = response.data.results[0].geometry;
        const coordinates = fromLonLat([lng, lat]);

        const marker = new Feature({
          geometry: new Point(coordinates),
        });

        marker.setStyle(
          new Style({
            image: new Icon({
              src: "https://uxwing.com/wp-content/themes/uxwing/download/location-travel-map/map-pin-icon.png",
              anchor: [0.5, 1],
              scale: 0.07,
            }),
          })
        );

        const vectorSource = new VectorSource({
          features: [marker],
        });

        const markerLayer = new VectorLayer({
          source: vectorSource,
        });

        map.addLayer(markerLayer);

        // Center the map on the new marker
        map.getView().setCenter(coordinates);
        map.getView().setZoom(14);
      } else {
        console.log("No results found for the address.");
      }
    } catch (error) {
      console.error("Error fetching geocode data:", error);
    }
  };

  useEffect(() => {
    const address = "1600 Amphitheatre Parkway, Mountain View, CA";
    if (map) {
      addMarker(address);
    }
  }, [map]);

  return (
    <div style={{ position: "relative" }}>
      <div ref={mapRef} style={{ width: "100%", height: "100vh" }} />
      <div
        ref={popupRef}
        style={{ position: "absolute", display: "none" }}
      ></div>
    </div>
  );
}

export default Map;
