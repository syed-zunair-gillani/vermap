"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import Slider from "react-slick";
import Container from "./ui/container";
import { cateorySettings } from "@/utils";
import { GlobalContext } from "@/context/global-context";
import { useRouter } from "next/navigation";

const CategoriesBarSlider = () => {
  const slider = React.useRef<any>(null);
  const { setCategory, setListing, listing, category } =
    useContext(GlobalContext);
  const [items, setItems] = useState(listing);
  const router = useRouter();

  const handleListingCategory = (slug: any) => {
    const filterListing = items?.filter((item: any) => item.category === slug);
    setListing(filterListing);
    setCategory(slug);
    // router.push(`?category=${slug}`);
  };

  return (
    <section className="border-t-[1px] pt-4 pb-2 sticky top-[70px] z-10 bg-white">
      <Container>
        <div className="relative">
          <Slider {...cateorySettings} ref={slider} className="pl-5 pr-8">
            {categoriesList?.map((item: any, idx: number) => (
              <button
                key={idx}
                className={`opacity-60 outline-none hover:opacity-100 cursor-pointer !flex flex-col items-center border-transparent justify-center ${
                  category === item.slug && "!opacity-100"
                }`}
                onClick={() => handleListingCategory(item?.slug)}
              >
                <Image
                  src={item.icon}
                  alt={item?.title}
                  width={32}
                  height={32}
                  className=""
                />
                <h6
                  className={`text-[13px] border-b-[2px] border-transparent pb-2 ${
                    category === item.slug && "!border-black"
                  }`}
                >
                  {item?.title}
                </h6>
              </button>
            ))}
          </Slider>
          <button
            onClick={() => slider?.current?.slickPrev()}
            className="absolute top-0 h-full bg-gradient-to-l from-white/0 via-white to-white pr-10"
          >
            <div className="p-1 border rounded-full">
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
            className="absolute right-0 top-0 bg-gradient-to-r from-white/0 via-white to-white h-full pl-10"
          >
            <div className="p-1 border rounded-full">
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
          </button>
        </div>
      </Container>
    </section>
  );
};

export default CategoriesBarSlider;

const categoriesList = [
  {
    title: "Hotels",
    slug: "hotels",
    icon: "/icons/hotels.svg",
  },
  {
    title: "Beauty",
    slug: "beauty",
    icon: "/icons/beauty.svg",
  },
  {
    title: "Restaurants",
    slug: "restaurants",
    icon: "/icons/restaurants.svg",
  },
  {
    title: "Fitness",
    slug: "fitness",
    icon: "/icons/Fitness.svg",
  },
  {
    title: "Rantal",
    slug: "rantal",
    icon: "/icons/Rantal.svg",
  },
  {
    title: "Services",
    slug: "services",
    icon: "/icons/services.svg",
  },
  {
    title: "Events",
    slug: "events",
    icon: "/icons/events.svg",
  },
  {
    title: "Hotels",
    slug: "hotels",
    icon: "/icons/hotels.svg",
  },
  {
    title: "Beauty",
    slug: "beauty",
    icon: "/icons/beauty.svg",
  },
  {
    title: "Restaurants",
    slug: "restaurants",
    icon: "/icons/restaurants.svg",
  },
  {
    title: "Fitness",
    slug: "fitness",
    icon: "/icons/Fitness.svg",
  },
  {
    title: "Rantal",
    slug: "rantal",
    icon: "/icons/Rantal.svg",
  },
  {
    title: "Services",
    slug: "services",
    icon: "/icons/services.svg",
  },
  {
    title: "Events",
    slug: "events",
    icon: "/icons/events.svg",
  },
  {
    title: "Hotels",
    slug: "hotels",
    icon: "/icons/hotels.svg",
  },
  {
    title: "Beauty",
    slug: "beauty",
    icon: "/icons/beauty.svg",
  },
  {
    title: "Restaurants",
    slug: "restaurants",
    icon: "/icons/restaurants.svg",
  },
  {
    title: "Fitness",
    slug: "fitness",
    icon: "/icons/Fitness.svg",
  },
  {
    title: "Rantal",
    slug: "rantal",
    icon: "/icons/Rantal.svg",
  },
  {
    title: "Services",
    slug: "services",
    icon: "/icons/services.svg",
  },
  {
    title: "Events",
    slug: "events",
    icon: "/icons/events.svg",
  },
];
