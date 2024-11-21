"use client";
import React, { useContext, useState } from "react";
import DateRangeCalander from "../filters/date-range";
import Guest from "../filters/guest";
import { GlobalContext } from "@/context/global-context";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Destination from "../filters/destination";

const MainFilter = () => {
  const [openDestination, setOpenDestination] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [openGuest, setOpenGuest] = useState(false);
  const router = useRouter()
  const pathname = usePathname(); 
  const currentSearchParams = useSearchParams();

  const { selectionRange, totalNights, totalGuest,
    adults, childrens, infants, pets,
   } = useContext(GlobalContext);
   
  const handleMainFilter = (type: any) => {
    if (type === "destinations") {
      setOpenDestination(!openDestination);
      setOpenGuest(false);
      setOpenDate(false);
    }
    if (type === "dates") {
      setOpenDate(!openDate);
      setOpenGuest(false);
      setOpenDestination(false);
    }
    if (type === "guests") {
      setOpenGuest(!openGuest);
      setOpenDate(false);
      setOpenDestination(false);
    }
  };

  const filterHandler = () => {
    const updatedSearchParams = new URLSearchParams(currentSearchParams.toString())
    updatedSearchParams.set("guest", totalGuest)
    router.push(pathname + "?" + updatedSearchParams.toString())
  }

  return (
   <section className="px-2">
     <div className="border relative bg-white max-w-[750px] mx-auto w-full mt-3 flex rounded-full items-center shadow-lg">
      <button
        onClick={() => handleMainFilter("destinations")}
        className="py-2 px-5 md:pl-10 font-normal flex-1 text-[13px] text-gray-500 bg-white rounded-full hover:bg-gray-100"
      >
        <p className="text-black text-left">Where</p>
        <div className="text-left md:text-[13px] text-[10px]">
          {/* <span className="hidden md:inline">Search</span> destinations */}
          <input type="text" className="placeholder:text-[#737986] placeholder:font-semibold bg-transparent outline-none" placeholder="Search destinations"/>
        </div>
      </button>
      <div className="pl-[1px] h-[30px] bg-gray-300" />
      <button
        onClick={() => handleMainFilter("dates")}
        className="py-2 px-5 md:pl-10 font-normal flex-1 text-[13px] text-gray-500 bg-white rounded-full hover:bg-gray-100"
      >
        <p className="text-black text-left">Date</p>
        <p className="text-left sm:hidden md:text-[13px] text-[10px]">
          {"Add dates"}
        </p>
        <p className="text-left hidden sm:block md:text-[13px] text-[10px]">
          {selectionRange.startDate.toLocaleDateString() !== selectionRange.endDate.toLocaleDateString() ? 
          `${selectionRange.startDate.toLocaleDateString()} - ${selectionRange.endDate.toLocaleDateString()}` : "Add dates"}
        </p>
      </button>
      <div className="pl-[1px] h-[30px] bg-gray-300" />
      <div
        onClick={() => handleMainFilter("guests")}
        className="py-2 px-2 md:pl-10 font-normal items-center flex justify-between flex-1 text-[13px] text-gray-500 bg-white rounded-full hover:bg-gray-100"
      >
        <div>
          <p className="text-black cursor-pointer text-left">Who</p>
          <p className="text-left cursor-pointer md:text-[13px] text-[10px] hidden sm:block">{ totalGuest ? `Adults: ${adults}, childrens: ${childrens}` : "Add guests"}</p> 
          <p className="text-left cursor-pointer md:text-[13px] sm:hidden text-[10px]">{"Add guests"}</p>
        </div>
      </div>
      <button className="bg-[#111] text-white p-3 rounded-full" onClick={filterHandler}>
        <svg width="1.7em" height="1.7em" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M18.319 14.433A8.001 8.001 0 0 0 6.343 3.868a8 8 0 0 0 10.564 11.976l.043.045l4.242 4.243a1 1 0 1 0 1.415-1.415l-4.243-4.242zm-2.076-9.15a6 6 0 1 1-8.485 8.485a6 6 0 0 1 8.485-8.485"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      {openDate && <DateRangeCalander className="left-0 top-[58px] w-full sm:!left-1/2 sm:-translate-x-1/2 sm:!w-[50%]"/>}
      {openGuest && <Guest setOpenGuest={setOpenGuest} dbGest={15} className="!right-0 left-0 left-unset top-[58px] w-full sm:!w-[60%] md:!w-[45%]"/>}
    </div>
   </section>
  );
};

export default MainFilter;
