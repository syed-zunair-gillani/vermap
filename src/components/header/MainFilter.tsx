"use client";
import React, { useState } from "react";

const MainFilter = () => {
  const [openDestination, setOpenDestination] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [openGuest, setOpenGuest] = useState(false);

  const handleMainFilter = (type: any) => {
    if (type === "destinations") {
      setOpenDestination(!openDestination);
    }
    if (type === "dates") {
      setOpenDate(!openDate);
    }
    if (type === "guests") {
      setOpenGuest(!openGuest);
    }
  };

  return (
   <section className="px-2">
     <div className="border bg-white max-w-[750px] mx-auto w-full mt-3 flex rounded-full items-center shadow-lg overflow-hidden">
      <button
        onClick={() => handleMainFilter("destinations")}
        className="py-2 px-5 md:pl-10 font-normal flex-1 text-[13px] text-gray-500 bg-white rounded-full hover:bg-gray-100"
      >
        <p className="text-black text-left">Where</p>
        <p className="text-left md:text-[13px] text-[10px]"><span className="hidden md:inline">Search</span> destinations</p>
      </button>
      <div className="pl-[1px] h-[30px] bg-gray-300" />
      <button
        onClick={() => handleMainFilter("dates")}
        className="py-2 px-5 md:pl-10 font-normal flex-1 text-[13px] text-gray-500 bg-white rounded-full hover:bg-gray-100"
      >
        <p className="text-black text-left">Date</p>
        <p className="text-left md:text-[13px] text-[10px]">Add dates</p>
      </button>
      <div className="pl-[1px] h-[30px] bg-gray-300" />
      <div
        onClick={() => handleMainFilter("guests")}
        className="py-2 px-2 md:pl-10 font-normal items-center flex justify-between flex-1 text-[13px] text-gray-500 bg-white rounded-full hover:bg-gray-100"
      >
        <div>
          <p className="text-black text-left">Who</p>
          <p className="text-left md:text-[13px] text-[10px]">Add guests</p>
        </div>
      </div>
      <button className="bg-[#111] text-white p-3 rounded-full">
        <svg width="1.7em" height="1.7em" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M18.319 14.433A8.001 8.001 0 0 0 6.343 3.868a8 8 0 0 0 10.564 11.976l.043.045l4.242 4.243a1 1 0 1 0 1.415-1.415l-4.243-4.242zm-2.076-9.15a6 6 0 1 1-8.485 8.485a6 6 0 0 1 8.485-8.485"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
   </section>
  );
};

export default MainFilter;
