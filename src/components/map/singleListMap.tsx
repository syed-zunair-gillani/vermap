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
import { useEffect } from "react";

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

  // Custom marker icon generation
  const createCustomIcon = ({ imageUrl, store }: any) =>
    L.divIcon({
      className: "custom-marker",
      html: `<div class="relative">
        <img class="!w-8 !h-8 object-cover overflow-hidden rounded-full" src="${imageUrl}" alt="Marker" />
        <div class="absolute h-4 w-4 border-white border-[3px] bg-blue-500/80 -bottom-4 left-1/2 -translate-x-1/2 rounded-full"/>
        <div class="bg-white shadow py-[1px] absolute left-1/2 -bottom-4 -translate-x-1/2 p-1 rounded-md mt-4 w-fit"><p class="text-xs !font-medium text-nowrap text-black">${store}</p></div>
      </div>`,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -45],
    });

  // useEffect hook to inject styles for custom markers (this needs to be inside the component)
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .custom-marker {
        width: 40px;
        height: 40px;
        background-color: #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      }
      .custom-marker::after {
        content: '';
        position: absolute;
        bottom: -6px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid #fff;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "50vh", width: "100%" }}
      scrollWheelZoom={false}
      doubleClickZoom={true}
      dragging={false}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution=""
      />

      {/* Custom marker with popup */}
      <Marker
        position={position}
        icon={createCustomIcon({
          imageUrl: data?.acf?.room_types?.[0]?.image?.url || "https://media-cdn.tripadvisor.com/media/photo-s/09/45/ed/fe/the-residency-hotel.jpg",
          store: data?.title?.rendered || "Unknown Location",
        })}
      >
        <Popup>
          <strong>{data?.title?.rendered}</strong>
          <p className="!mt-1">{data?.acf?.room_types?.[0]?.description}</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default SingleListMap;
