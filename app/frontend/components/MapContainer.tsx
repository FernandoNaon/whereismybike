import React, { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Set your Mapbox access token here
mapboxgl.accessToken = 'pk.eyJ1IjoiZmVybmFuZG8tbmFvbiIsImEiOiJjbHZna2c3ODYwaGh1Mm1xeGYybnBhMno2In0.aX8DzTByC6wfEwr3mynM8Q';

interface Marker {
  lng: number;
  lat: number;
}

const MapWithMarker: React.FC = () => {
  const [marker, setMarker] = useState<{ lat: number; lng: number } | null>(null);

  // Initialize the map
  const initializeMap = () => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [12.568337, 55.676098], // Copenhagen coordinates
      zoom: 17,
    });

    // Add click event listener to the map
    map.on('click', (e: mapboxgl.MapMouseEvent & mapboxgl.EventData) => {
      // Get the clicked coordinates
      const { lng, lat } = e.lngLat;

      // Update the marker state
      setMarker({ lng, lat });

      // Add a marker to the map
      new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
    });

    return map;
  };

  // Initialize the map when the component mounts
  useEffect(() => {
    const map = initializeMap();

    // Clean up function to remove the map when the component unmounts
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
      {marker && (
        <p>
          Marker Location: Lat {marker.lat}, Lng {marker.lng}
        </p>
      )}
    </div>
  );
};

export default MapWithMarker;
