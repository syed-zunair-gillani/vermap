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
import React, { useEffect } from "react";
import { BiSolidLike } from "react-icons/bi";
import { FaCommentDots } from "react-icons/fa6";
import { GrAnnounce } from "react-icons/gr";
import PermotionModels from "./permotion-models";

// Fix leaflet's default icon issue with React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const MapComponent = () => {
  const position: any = [51.505, -0.09]; // Default center position

  // Sample markers
  const markers: any = [
    {
      position: [51.505, -0.09],
      popupText: "I'm here!",
      status:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ducimus?",
    },
    {
      position: [51.51, -0.1],
      popupText: "Another marker",
      status:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ducimus?",
    },
    {
      position: [51.49, -0.08],
      popupText: "Yet another one",
      status:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ducimus?",
    },
  ];

  // Custom icon with HTML and CSS
  const createCustomIcon = ({ imageUrl, store }: any) =>
    L.divIcon({
      className: "custom-marker", // CSS class for styling
      html: `<div class="relative">
        <img class="!w-8 !h-8 object-cover overflow-hidden rounded-full" src="${imageUrl}" alt="Marker" />
        <div class="absolute h-4 w-4 border-white border-[3px] bg-blue-500/80 -bottom-4 left-1/2 -translate-x-1/2 rounded-full"/>
        <div class="bg-white shadow py-[1px] absolute left-1/2 -bottom-4 -translate-x-1/2 p-1 rounded-md mt-4 w-fit"><p class="text-xs !font-medium text-nowrap text-black">${store}</p></div>
      </div>`,
      iconSize: [40, 40], // Size of the marker
      iconAnchor: [20, 40], // Anchor point (centered at the bottom)
      popupAnchor: [0, -45], // Where the popup opens relative to the icon
    });

  // UseEffect hook to dynamically apply CSS styles for custom markers
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .custom-marker {
        width: 40px;
        height: 40px;
        background-color: #fff; /* Marker color */
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 16px;
        font-weight: bold;
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
        border-top: 10px solid #fff; /* Triangle color */
      }
    `;
    document.head.appendChild(style);
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
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
          // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution=""
        />

        {markers.map((marker: any, index: any) => (
          <Marker
            key={index}
            position={marker.position}
            icon={createCustomIcon({
              imageUrl:
                "https://media-cdn.tripadvisor.com/media/photo-s/09/45/ed/fe/the-residency-hotel.jpg",
              store: marker.popupText,
            })} // Create custom icon with first letter of popupText
          >
            <Popup>
              <div>
                <strong>{marker.popupText}</strong>
                <p className="!m-0 !mt-[2px] text-gray-600">{marker?.status}</p>
                <div className="mt-2 flex items-center gap-3">
                  <button
                    className="flex items-center gap-1 text-gray-600 hover:text-black"
                    onClick={handleClickOpen}
                  >
                    <BiSolidLike size={16} />
                  </button>
                  <button
                    className="flex items-center gap-1 text-gray-600 hover:text-black"
                    onClick={handleClickOpen}
                  >
                    <FaCommentDots size={14.5} />
                    <span>Comments</span>
                  </button>
                  <button
                    className="flex items-center gap-1 text-gray-600 hover:text-black"
                    onClick={handleClickOpen}
                  >
                    <GrAnnounce size={15} />
                    <span>Promotion</span>
                  </button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}

        <ZoomControl position="bottomright" />
      </MapContainer>
      <PermotionModels
        handleClickOpen={handleClickOpen}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};


export default MapComponent;
