"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const GalleryForMobile = ({data}:any) => {
  return (
    <section className="md:hidden relative">
      <Slider {...settings}>
        {data?.map((url:any, idx:number) => (
          <figure className="relative group cursor-pointer" key={idx}>
            <Image
              src={url}
              width={800}
              height={320}
              alt="image"
              className="w-full h-[320px] object-cover"
            />
          </figure>
        ))}
      </Slider>
    </section>
  );
};

export default GalleryForMobile;

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

const galleryImages = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
];
