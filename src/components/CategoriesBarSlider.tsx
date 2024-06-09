"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import Container from "./ui/container";

const CategoriesBarSlider = () => {
  const slider = React.useRef<any>(null);

  return (
    <section className="border-t-[1px] py-4 ">
      <Container >
        <div className="relative">
          <Slider {...settings} ref={slider} className="pl-5 pr-8">
            {categoriesList?.map((item: any, idx: number) => (
              <div
                key={idx}
                className="opacity-60 hover:opacity-100 cursor-pointer !flex flex-col items-center justify-center"
              >
                <Image
                  src={item.icon}
                  alt={item?.title}
                  width={32}
                  height={32}
                  className=""
                />
                <h6 className="text-[13px]">{item?.title}</h6>
              </div>
            ))}
          </Slider>
          <button
            onClick={() => slider?.current?.slickPrev()}
            className="absolute top-0 h-full bg-gradient-to-l from-white/0 via-white to-white pr-10"
          >
            <div className="p-1 border rounded-full">
            <svg width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14 7l-5 5l5 5"/></svg>            </div>
          </button>
          <button
            onClick={() => slider?.current?.slickNext()}
            className="absolute right-0 top-0 bg-gradient-to-r from-white/0 via-white to-white h-full pl-10"
          >
            <div className="p-1 border rounded-full">
                <svg width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10 17l5-5l-5-5"/></svg>
            </div>
          </button>
        </div>
        
      </Container>
    </section>
  );
};

export default CategoriesBarSlider;

var settings = {
  dots: false,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 17,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const categoriesList = [
  {
    title: "Hotels",
    slug: "/hotels",
    icon: "/icons/hotels.svg",
  },
  {
    title: "Beauty",
    slug: "/beauty",
    icon: "/icons/beauty.svg",
  },
  {
    title: "Restaurants",
    slug: "/restaurants",
    icon: "/icons/restaurants.svg",
  },
  {
    title: "Fitness",
    slug: "/fitness",
    icon: "/icons/Fitness.svg",
  },
  {
    title: "Rantal",
    slug: "/rantal",
    icon: "/icons/Rantal.svg",
  },
  {
    title: "Services",
    slug: "/services",
    icon: "/icons/services.svg",
  },
  {
    title: "Events",
    slug: "/events",
    icon: "/icons/events.svg",
  },
  {
    title: "Hotels",
    slug: "/hotels",
    icon: "/icons/hotels.svg",
  },
  {
    title: "Beauty",
    slug: "/beauty",
    icon: "/icons/beauty.svg",
  },
  {
    title: "Restaurants",
    slug: "/restaurants",
    icon: "/icons/restaurants.svg",
  },
  {
    title: "Fitness",
    slug: "/fitness",
    icon: "/icons/Fitness.svg",
  },
  {
    title: "Rantal",
    slug: "/rantal",
    icon: "/icons/Rantal.svg",
  },
  {
    title: "Services",
    slug: "/services",
    icon: "/icons/services.svg",
  },
  {
    title: "Events",
    slug: "/events",
    icon: "/icons/events.svg",
  },
  {
    title: "Hotels",
    slug: "/hotels",
    icon: "/icons/hotels.svg",
  },
  {
    title: "Beauty",
    slug: "/beauty",
    icon: "/icons/beauty.svg",
  },
  {
    title: "Restaurants",
    slug: "/restaurants",
    icon: "/icons/restaurants.svg",
  },
  {
    title: "Fitness",
    slug: "/fitness",
    icon: "/icons/Fitness.svg",
  },
  {
    title: "Rantal",
    slug: "/rantal",
    icon: "/icons/Rantal.svg",
  },
  {
    title: "Services",
    slug: "/services",
    icon: "/icons/services.svg",
  },
  {
    title: "Events",
    slug: "/events",
    icon: "/icons/events.svg",
  },
];
