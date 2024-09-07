"use client";
import React, { createContext, useEffect, useState } from "react";
import { listingItems } from "../../public/data";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [openGalleryModel, seOpenGalleryModel] = useState(false)
  const [category, setCategory] = useState("")
  const [listing, setListing] = useState(listingItems)

  return (
    <GlobalContext.Provider
      value={{
        openGalleryModel, seOpenGalleryModel,
        category, setCategory,
        listing, setListing
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};