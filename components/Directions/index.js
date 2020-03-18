import React from "react";
import MapViewDirections from "react-native-maps-directions";

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="" //"AIzaSyBqKPYXiV7BlP65rt4SbKmRHrCYAkqh7j0"
    strokeWidth={4}
    strokeColor="#FF3D00"
  />
);

export default Directions;