"use client"
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";


const SingleListMap = () => {

  const customIcon = new Icon({
    iconUrl: "/images/hotel.png",
    iconSize: [38, 38]
  })

  return (
    <>
    <section className="h-[80vh] relative">
      <MapContainer
        center={[13.7563, 100.5018]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution=''
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        {cooardinates.map((pin:any, idx:number) => (
          <Marker position={pin.geoCode} key={idx} icon={customIcon}>
            <Popup>
              {pin.popup}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
    </>
  )
}

export default SingleListMap


const cooardinates = [
    {
      geoCode: [13.7563, 100.5018],
      popup: "popup data 1"
    },
    {
      geoCode: [13.86250, 100.51444],
      popup: "popup data 2"
    }
  
  ]