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
              src={url?.sizes?.medium}
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
