"use client";
import { Idots } from "@/const";
import { GlobalContext } from "@/context/global-context";
import Image from "next/image";
import React from "react";
import GModelBox from "./ModelBox";

const GalleryForDesktop = ({ data }: any) => {
  const { seOpenGalleryModel } = React.useContext(GlobalContext);
  return (
    <>
      <section
        className={`
        ${data?.length === 1 && "grid-cols-1"}
        ${data?.length >= 2 && "grid-cols-2"}
        gap-2 rounded-xl hidden md:grid overflow-hidden relative`}
      >
        {data?.slice(0, 1)?.map((item: any, id: number) => (
          <div key={id}>
            <figure className="relative group cursor-pointer">
              <Image
                src={item?.sizes?.medium}
                width={800}
                height={460}
                alt="image"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 group-hover:bg-black/10" />
            </figure>
          </div>
        ))}

        <div className={`
          ${data?.length === 2 && "grid-cols-1"}
          ${data?.length === 3 && "grid-cols-1"}
          ${data?.length === 4 && "grid-cols-2"}
          ${data?.length >= 5 && "grid-cols-2"}
          grid gap-2`}>
          {data?.slice(1, 5)?.map((item: any, id: number) => (
            <figure className={`relative group cursor-pointer ${data?.length === 4 && id === 2 && "col-span-2"}`} key={id}>
              <Image
                src={item?.sizes?.medium}
                width={800}
                height={460}
                alt={item?.title || "image"}
                className={`w-full ${data?.length >= 3 ? "h-[226px]" :  "h-[460px]"} object-cover`}
              />
              <div className="absolute inset-0 group-hover:bg-black/10" />
            </figure>
          ))}
        </div>

        <button
          onClick={() => seOpenGalleryModel(true)}
          className="absolute right-4 bottom-4 normal-case px-3 py-1.5 items-center rounded-lg !border !border-black bg-white text-black font-medium flex gap-1.5"
        >
          {Idots()} Show all photos
        </button>
      </section>
      <GModelBox data={data}/>
    </>
  );
};

export default GalleryForDesktop;
