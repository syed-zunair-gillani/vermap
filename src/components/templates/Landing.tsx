"use client";
import React from "react";
import Container from "../ui/container";
import ItemListing from "../Item-listing/ItemListing";
import CategoriesBarSlider from "@/components/CategoriesBarSlider";
import { featureSettings } from "@/utils";
import Slider from "react-slick";
import Main from "../main/Main";
import { features } from "../../../public/data";

const Landing = ({data}:any) => {

  return (
    <>
      <Main />
      <CategoriesBarSlider />
      <Container>
        <ItemListing data={data} />
      </Container>
      
    </>
  );
};

export default Landing;

const MobileSlider = ({ setActiveInspiration, activeInspiration }: any) => {
  const slider = React.useRef<any>(null);
  return (
    <div className="relative border-b-[2px] border-gray-300 lg:hidden gap-8">
      <Slider {...featureSettings} ref={slider} className="mt-5">
        {features?.map((item: any, idx: number) => (
          <div
            key={idx}
            onClick={() => setActiveInspiration(item)}
            className=""
          >
            <h6
              className={`border-b-[2px]  cursor-pointer text-center py-4 ${
                activeInspiration?.name === item?.name
                  ? "border-gray-600 "
                  : "border-transparent text-gray-600"
              }`}
            >
              {item?.name}
            </h6>
          </div>
        ))}
      </Slider>
      <button
        onClick={() => slider?.current?.slickPrev()}
        className="absolute top-1/2 transform -translate-y-1/2 h-[67px] pr-3 bg-[#f7f7f7] "
      >
        <div className="p-1">
          <svg width="1.4em" height="1.4em" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              strokeWidth="1.5"
              d="m14 7l-5 5l5 5"
            />
          </svg>{" "}
        </div>
      </button>
      <button
        onClick={() => slider?.current?.slickNext()}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[67px] pl-3 bg-[#f7f7f7]"
      >
        <div className="p-1">
          <svg width="1.4em" height="1.4em" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              strokeWidth="1.5"
              d="m10 17l5-5l-5-5"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};
