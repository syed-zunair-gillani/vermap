"use client"
import { Idots } from "@/const";
import { GlobalContext } from "@/context/global-context";
import Image from "next/image";
import React from "react";
import GModelBox from "./ModelBox";

const GalleryForDesktop = () => {
  const {seOpenGalleryModel} = React.useContext(GlobalContext)
  return (
    <>
      <section className="grid-cols-2 gap-2 rounded-xl hidden md:grid overflow-hidden relative">
        <div>
          <figure className="relative group cursor-pointer">
            <Image
              src="/images/1.png"
              width={800}
              height={460}
              alt="image"
              className="w-full h-[460px] object-cover"
            />
            <div className="absolute inset-0 group-hover:bg-black/10" />
          </figure>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <figure className="relative group cursor-pointer">
            <Image
              src="/images/2.png"
              width={800}
              height={400}
              alt="image"
              className="w-full h-[226px] object-cover"
            />
            <div className="absolute inset-0 group-hover:bg-black/10" />
          </figure>
          <figure className="relative group cursor-pointer">
            <Image
              src="/images/2.png"
              width={800}
              height={400}
              alt="image"
              className="w-full h-[226px] object-cover"
            />
            <div className="absolute inset-0 group-hover:bg-black/10" />
          </figure>
          <figure className="relative group cursor-pointer">
            <Image
              src="/images/3.png"
              width={800}
              height={400}
              alt="image"
              className="w-full h-[226px] object-cover"
            />
            <div className="absolute inset-0 group-hover:bg-black/10" />
          </figure>
          <figure className="relative group cursor-pointer">
            <Image
              src="/images/4.png"
              width={800}
              height={400}
              alt="image"
              className="w-full h-[226px] object-cover"
            />
            <div className="absolute inset-0 group-hover:bg-black/10" />
          </figure>
        </div>
        <button onClick={()=>seOpenGalleryModel(true)} className="absolute right-4 bottom-4 normal-case px-3 py-1.5 items-center rounded-lg !border !border-black bg-white text-black font-medium flex gap-1.5">
          {Idots()} Show all photos
        </button>
      </section>
      <GModelBox/>
    </>
  );
};

export default GalleryForDesktop;
