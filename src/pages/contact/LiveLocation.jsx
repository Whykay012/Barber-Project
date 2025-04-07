import React from "react";
import { useContextFunc } from "../../functionalities/Context";
import { TOGGLE_TRACKING } from "../../functionalities/action";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LiveLocation = () => {
  const { tracking, error, position, dispatch } = useContextFunc();
  return (
    <div>
      <button
        onClick={() => dispatch({ type: TOGGLE_TRACKING })}
        className="tracking"
      >
        {tracking ? "Stop Tracking" : "Start Tracking"}
      </button>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>You are here!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LiveLocation;
