"use client"
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix leaflet's default icon issue with React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MapComponent = () => {
  const position:any = [51.505, -0.09]; // Default center position

  // Sample markers
  const markers:any = [
    { position: [51.505, -0.09], popupText: "I'm here!" },
    { position: [51.51, -0.1], popupText: "Another marker" },
    { position: [51.49, -0.08], popupText: "Yet another one" }
  ];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "90vh", width: "100%" }}
      scrollWheelZoom={false} // Enable zooming with the scroll wheel
      doubleClickZoom={true} // Enable zooming with double click
      dragging={true} // Enable dragging
      zoomControl={false} // Disable default zoom control
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution=''
      />
      
      {markers.map((marker:any, index:any) => (
        <Marker key={index} position={marker.position}>
          <Popup>{marker.popupText}</Popup>
        </Marker>
      ))}
       <ZoomControl position="bottomright" />
    </MapContainer>
  );
};

export default MapComponent;
