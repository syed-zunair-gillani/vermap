"use client";
import React, { createContext, useEffect, useState } from "react";
import { listingItems } from "../../public/data";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [openGalleryModel, setOpenGalleryModel] = useState(false)
  const [category, setCategory] = useState("")
  const [listing, setListing] = useState(listingItems)

   // Guest Meta 
   const [adults, setAdults] = useState(0);
   const [childrens, setChildrens] = useState(0);
   const [infants, setInfants] = useState(0);
   const [pets, setPets] = useState(0);
   const totalGuest = adults + childrens + infants + pets;


  // Calander 
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });
  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
  };
  const getTotalNights = () => {
    const oneDay = 24 * 60 * 60 * 1000; // Hours*Minutes*Seconds*Milliseconds
    const start = selectionRange.startDate;
    const end = selectionRange.endDate;
    // Calculate the difference in time and convert to days
    const diffInTime = end - start; // Difference in milliseconds
    const totalNights = Math.floor(diffInTime / oneDay); // Convert to nights (days)
    return totalNights > 0 ? totalNights : 0; // Ensure nights is not negative
  };

  

  return (
    <GlobalContext.Provider
      value={{
        openGalleryModel, setOpenGalleryModel,
        category, setCategory,
        listing, setListing,
        selectionRange, handleSelect,
        totalNights: getTotalNights(),
        adults, setAdults, childrens, setChildrens, infants, setInfants, pets, setPets, totalGuest
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};