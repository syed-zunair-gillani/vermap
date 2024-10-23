"use client";
import { GlobalContext } from "@/context/global-context";
import React, { useContext, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const DateRangeCalander = ({className}:any) => {
  const { selectionRange, handleSelect } = useContext(GlobalContext);

  return (
    <section className={`absolute rounded-lg flex flex-col gap-5 notifybadge !pb-0 z-10 bg-white w-full !p-3 ${className}`}>
      <DateRange
        ranges={[selectionRange]}
        onChange={handleSelect}
        minDate={new Date()}
        rangeColors={["#111"]}
      />
    </section>
  );
};

export default DateRangeCalander;
