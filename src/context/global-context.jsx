"use client";
import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [openGalleryModel, seOpenGalleryModel] = useState(false)
    console.log("🚀 ~ GlobalProvider ~ openGalleryModel:", openGalleryModel)
  return (
    <GlobalContext.Provider
      value={{
        openGalleryModel, seOpenGalleryModel
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};