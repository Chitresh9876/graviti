import React, { useEffect } from "react";
import api from "../services/api";

const TrackLocation = () => {
  const sendLocation = async (coordinates) => {
    try {
      await api.post("/location/track", { coordinates });
    } catch (err) {
      console.error("Failed to send location:", err);
    }
  };

  useEffect(() => {
    const updateLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        sendLocation([longitude, latitude]);
      });
    };

    const interval = setInterval(updateLocation, 4000);
    return () => clearInterval(interval);
  }, []);

  return <h1>Tracking your location...</h1>;
};

export default TrackLocation;
