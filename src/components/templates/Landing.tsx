"use client";
import React, { useContext, useState } from "react";
import Container from "../ui/container";
import ItemListing from "../Item-listing/ItemListing";
import CategoriesBarSlider from "@/components/CategoriesBarSlider";
import { featureSettings } from "@/utils";
import Slider from "react-slick";
import Main from "../main/Main";
import { features, listingItems } from "../../../public/data";
import { GlobalContext } from "@/context/global-context";
import Link from "next/link";

const Landing = ({data}:any) => {
  const [activeInspiration, setActiveInspiration] = useState<any>(features[0]);

  return (
    <>
      <Main />
      <CategoriesBarSlider />
      <Container>
        <ItemListing data={data} />
      </Container>
      <section className="bg-[#f7f7f7] py-[48px] mt-16">
        <Container>
          <h2 className="text-[22px] font-medium">
            Inspiration for future getaways{" "}
          </h2>
          <MobileSlider
            activeInspiration={activeInspiration}
            setActiveInspiration={setActiveInspiration}
          />
          <div className="relative border-b-[2px] border-gray-300 lg:flex hidden gap-8">
            {features?.map((item: any, idx: number) => (
              <div
                key={idx}
                onClick={() => setActiveInspiration(item)}
                className=""
              >
                <h6
                  className={`border-b-[3px]  cursor-pointer py-4 ${
                    activeInspiration?.name === item?.name
                      ? "border-gray-600"
                      : "border-transparent text-gray-600"
                  }`}
                >
                  {item?.name}
                </h6>
              </div>
            ))}
          </div>
          <section>
            <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 gap-y-5">
              {activeInspiration?.items?.map((item: any, id: any) => (
                <li key={id} className="text-sm">
                  <h6>
                    <Link href={`/${item?.name}/${item?.stay}`}>
                      {item?.name}
                    </Link>
                  </h6>
                  <p className="font-light text-gray-600">{item?.stay}</p>
                </li>
              ))}
            </ul>
          </section>
        </Container>
      </section>
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
