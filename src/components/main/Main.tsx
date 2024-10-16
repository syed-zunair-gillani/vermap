import React from "react";
import MainFilter from "../header/MainFilter";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import('./MapComponent'), {
  ssr: false
});

const Main = () => {
  return (
    <main className="relative">
      <MapComponent />
      <div className="absolute bottom-[70px] z-[1000] w-full ">
        <MainFilter />
      </div>
    </main>
  );
};

export default Main;
