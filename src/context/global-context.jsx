"use client";
import React, { createContext, useEffect, useState } from "react";
import { listingItems } from "../../public/data";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [openGalleryModel, seOpenGalleryModel] = useState(false)
  const [category, setCategory] = useState("")
  const [listing, setListing] = useState(listingItems)

  // Calander 
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });
  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
  };

  return (
    <GlobalContext.Provider
      value={{
        openGalleryModel, seOpenGalleryModel,
        category, setCategory,
        listing, setListing,
        selectionRange, handleSelect
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};