import React from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Driver Icon
const driverIcon = new L.Icon({
  iconUrl:
    "https://cdn-icons-png.flaticon.com/512/744/744465.png",

  iconSize: [45, 45],
});

// Rider Icon
const riderIcon = new L.Icon({
  iconUrl:
    "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",

  iconSize: [40, 40],
});

const DriverRideMap = ({
  driverPosition,
  riderPosition,
}) => {
  return (
    <div className="bg-white rounded-4xl shadow-lg overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800">
          Live Ride Tracking
        </h2>
      </div>

      {/* Map */}
      <div className="h-125 w-full">
        <MapContainer
          center={driverPosition}
          zoom={13}
          scrollWheelZoom={true}
          className="h-full w-full z-0"
        >
          {/* OpenStreetMap Tiles */}
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Driver Marker */}
          <Marker
            position={driverPosition}
            icon={driverIcon}
          >
            <Popup>
              🚗 Driver Current Location
            </Popup>
          </Marker>

          {/* Rider Marker */}
          <Marker
            position={riderPosition}
            icon={riderIcon}
          >
            <Popup>
              📍 Rider Pickup Location
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default DriverRideMap;