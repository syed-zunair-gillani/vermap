"use client";
import React, { useState } from "react";
import Container from "../ui/container";
import ItemListing from "../Item-listing/ItemListing";
import CategoriesBarSlider from "@/components/CategoriesBarSlider";
import { featureSettings } from "@/utils";
import Slider from "react-slick";
import Main from "../main/Main";

const Landing = () => {
  const slider = React.useRef<any>(null);
  const [activeInspiration, setActiveInspiration] = useState<any>(features[0]);

  return (
    <>
      <Main />
      <CategoriesBarSlider />
      <Container>
        <ItemListing data={items} />
      </Container>
      <section className="bg-[#f7f7f7] py-[48px] mt-16">
        <Container>
          <h2 className="text-[22px] font-medium">
            Inspiration for future getaways{" "}
          </h2>
          <div className="relative border-b-[2px] border-gray-300 flex gap-8">
            {/* <Slider
              {...featureSettings}
              ref={slider}
              className="mt-5"
            > */}
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
            {/* </Slider> */}
            {/* <button
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
                    stroke-width="1.5"
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
                    stroke-width="1.5"
                    d="m10 17l5-5l-5-5"
                  />
                </svg>
              </div>
            </button> */}
          </div>
          <section>
            <ul className="mt-8 grid grid-cols-6 gap-4 gap-y-5">
              {activeInspiration?.items?.map((item: any, id: any) => (
                <li key={id} className="text-sm">
                  <h6>{item?.name}</h6>
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

export const items = [
  {
    title: "Train at the X-Mansion",
    storeName: "Tech Store",
    price: 29.99,
    slug: "train-at-the-x-mansion",
    images: [
      "/images/i1.webp",
      "/images/i2.webp",
      "/images/i3.webp",
      "/images/i4.jpeg",
    ],
  },
  {
    title: "Open the Olympic Games at Musée d'Orsay",
    storeName: "Gadget Shop",
    price: 59.99,
    slug: "open-the-olympic-games-at-musee-d-orsay",
    images: [
      "/images/i1.webp",
      "/images/i2.webp",
      "/images/i3.webp",
      "/images/i4.jpeg",
      "/images/i4.jpeg",
      "/images/i4.jpeg",
    ],
  },
  {
    title: "Gaming Keyboard",
    storeName: "Gaming Gear",
    price: 89.99,
    slug: "gaming-keyboard",
    images: [
      "/images/i1.webp",
      "/images/i2.webp",
      "/images/i3.webp",
      "/images/i4.jpeg",
    ],
  },
  {
    title: "Train at the X-Mansion",
    storeName: "Tech Store",
    price: 29.99,
    slug: "train-at-the-x-mansion",
    images: [
      "/images/i1.webp",
      "/images/i2.webp",
      "/images/i3.webp",
      "/images/i4.jpeg",
    ],
  },
  {
    title: "Open the Olympic Games at Musée d'Orsay",
    storeName: "Gadget Shop",
    price: 59.99,
    slug: "open-the-olympic-games-at-musee-d-orsay",
    images: [
      "/images/i1.webp",
      "/images/i2.webp",
      "/images/i3.webp",
      "/images/i4.jpeg",
    ],
  },
  {
    title: "Gaming Keyboard",
    storeName: "Gaming Gear",
    price: 89.99,
    slug: "gaming-keyboard",
    images: [
      "/images/i1.webp",
      "/images/i2.webp",
      "/images/i3.webp",
      "/images/i4.jpeg",
    ],
  },
  {
    title: "Train at the X-Mansion",
    storeName: "Tech Store",
    price: 29.99,
    slug: "train-at-the-x-mansion",
    images: [
      "/images/i1.webp",
      "/images/i2.webp",
      "/images/i3.webp",
      "/images/i4.jpeg",
    ],
  },
  {
    title: "Open the Olympic Games at Musée d'Orsay",
    storeName: "Gadget Shop",
    price: 59.99,
    slug: "open-the-olympic-games-at-musee-d-orsay",
    images: [
      "/images/i1.webp",
      "/images/i2.webp",
      "/images/i3.webp",
      "/images/i4.jpeg",
    ],
  },
  {
    title: "Gaming Keyboard",
    storeName: "Gaming Gear",
    price: 89.99,
    slug: "gaming-keyboard",
    images: [
      "/images/i1.webp",
      "/images/i2.webp",
      "/images/i3.webp",
      "/images/i4.jpeg",
    ],
  },
  {
    title: "Train at the X-Mansion",
    storeName: "Tech Store",
    price: 29.99,
    slug: "train-at-the-x-mansion",
    images: [
      "/images/i1.webp",
      "/images/i2.webp",
      "/images/i3.webp",
      "/images/i4.jpeg",
    ],
  },
  {
    title: "Open the Olympic Games at Musée d'Orsay",
    storeName: "Gadget Shop",
    price: 59.99,
    slug: "open-the-olympic-games-at-musee-d-orsay",
    images: [
      "/images/i1.webp",
      "/images/i2.webp",
      "/images/i3.webp",
      "/images/i4.jpeg",
    ],
  },
  {
    title: "Gaming Keyboard",
    storeName: "Gaming Gear",
    price: 89.99,
    slug: "gaming-keyboard",
    images: [
      "/images/i1.webp",
      "/images/i2.webp",
      "/images/i3.webp",
      "/images/i4.jpeg",
    ],
  },
];


const features = [
  {
    name: "Popular",
    items: [
      {
        name: "Canmore",
        stay: "Pet-friendly rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Canmore",
        stay: "Pet-friendly rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Canmore",
        stay: "Pet-friendly rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Canmore",
        stay: "Pet-friendly rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
    ],
  },
  {
    name: "Arts & culture",
    items: [
      {
        name: "Canmore",
        stay: "Pet-friendly rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Canmore",
        stay: "Pet-friendly rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Canmore",
        stay: "Pet-friendly rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Canmore",
        stay: "Pet-friendly rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
    ],
  },
  {
    name: "Outdoors",
    items: [
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Canmore",
        stay: "Pet-friendly rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Canmore",
        stay: "Pet-friendly rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Canmore",
        stay: "Pet-friendly rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
    ],
  },
  {
    name: "Beach",
    items: [
      {
        name: "Canmore",
        stay: "Pet-friendly rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Canmore",
        stay: "Pet-friendly rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Canmore",
        stay: "Pet-friendly rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Canmore",
        stay: "Pet-friendly rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
    ],
  },
  {
    name: "Vacation rentals",
    items: [
      {
        name: "Canmore",
        stay: "Pet-friendly rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Canmore",
        stay: "Pet-friendly rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Canmore",
        stay: "Pet-friendly rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
    ],
  },
  {
    name: "Arts & culture 2",
    items: [
      {
        name: "Canmore",
        stay: "Pet-friendly rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Canmore",
        stay: "Pet-friendly rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
    ],
  },
  {
    name: "Travel tips & inspiration",
    items: [
      {
        name: "Canmore",
        stay: "Pet-friendly rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Canmore",
        stay: "Pet-friendly rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
    ],
  },
  {
    name: "Airbnb-friendly apartments",
    items: [
      {
        name: "Canmore",
        stay: "Pet-friendly rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
      {
        name: "Canmore",
        stay: "Pet-friendly rentals",
      },
      {
        name: "Mijas",
        stay: "Vacation rentals",
      },
      {
        name: "Tucson",
        stay: "House rentals",
      },
    ],
  },
];
