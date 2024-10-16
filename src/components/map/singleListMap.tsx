"use client";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix leaflet's default icon issue with React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const SingleListMap = ({ data }: any) => {
  const position: any = [51.505, -0.09]; // Default center position

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "50vh", width: "100%" }}
      scrollWheelZoom={false} // Enable zooming with the scroll wheel
      doubleClickZoom={true} // Enable zooming with double click
      dragging={true} // Enable dragging
      zoomControl={false} // Disable default zoom control
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution=""
      />

      <Marker position={position}>
        <Popup>
          <strong>{data?.title?.rendered}</strong>
          <p className="!mt-1">{data?.acf?.room_types?.[0]?.description}</p>
        </Popup>
      </Marker>
      {/* <ZoomControl position="bottomright" /> */}
    </MapContainer>
  );
};

export default SingleListMap;
