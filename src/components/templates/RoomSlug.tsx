"use client";
import React, { useContext, useState } from "react";
import Container from "../ui/container";
import { Iheart, Ishare } from "@/const";
import { Button } from "@mui/material";
import GalleryForDesktop from "../gallery/GalleryForDesktop";
import GalleryForMobile from "../gallery/GalleryForMobile";
import Image from "next/image";
import Features from "../modules/room-slug/features";
import Guest from "../filters/guest";
import DateRangeCalander from "../filters/date-range";
import { GlobalContext } from "@/context/global-context";
import SingleListMap from "../map/singleListMap";


const RoomSlug = ({ data }: any) => {
  console.log("🚀 ~ RoomSlug ~ data: 111", data);
  const [roomType, setRoomType] = useState<string>("");
  const [typesData, setTypesData] = useState<any>(data?.acf?.room_types?.[0]);
  const [openGuest, setOpenGuest] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const { selectionRange, totalNights, totalGuest } = useContext(GlobalContext);
  const servicesFee = 62

  const handleRoomType = (type: string) => {
    setRoomType(type);
    const res =
      data?.acf?.room_types?.find((item: any) => item.type === type) || {};
    setTypesData(res);
  };
  

  return (
    <section className="max-w-[1280px] mx-auto">
      <Container className="!px-0 md:px-3">
        {/* head  */}
        <section className="flex flex-col-reverse md:flex-col">
          <div className="flex justify-between items-center gap-4 py-3 md:py-5 px-4 md:px-0">
            <h2 className="font-medium text-lg sm:text-2xl md:text-[28px]">
              {data?.title?.rendered}
            </h2>
            <div className="items-center gap-1 hidden md:flex">
              <Button className="flex gap-2 items-center text-gray-600 hover:rounded-md">
                <i className="text-[17px]">{Ishare()}</i>
                <span className="underline capitalize text-sm">Share</span>
              </Button>
              <Button className="flex gap-2 items-center text-gray-600 hover:rounded-md">
                <i className="text-[18px]">{Iheart()}</i>
                <span className="underline capitalize text-sm">Save</span>
              </Button>
            </div>
          </div>
          {/* Images gallery for Desktop */}
          <GalleryForDesktop data={data?.acf?.images_gallery} />
          {/* Images gallery for Mobile */}
          <GalleryForMobile data={data?.acf?.images_gallery} />
        </section>
      </Container>

      <Container className="md:mt-7">
        <section className="md:flex">
          <div className="w-full md:w-[60%]">
            <h3 className="sm:font-medium sm:text-lg md:text-2xl">
              {data?.acf?.location}
            </h3>
            <p className="text-gray-600 font-light text-base ">
              {typesData?.total_guests} guests <span> · </span>{" "}
              {typesData?.beds} <span> · </span>
              {typesData?.room_size} ft<sup>2</sup>
            </p>
            <p className="mb-6 mt-1 font-light">{typesData?.description}</p>
            <div className="border mb-5 rounded-xl overflow-hidden !inline-block">
              {data?.acf?.room_types?.map((item: any, id: number) => (
                <button
                  key={id}
                  onClick={() => handleRoomType(item?.type)}
                  className={`md:p-3 p-2 px-5 md:px-8 hover:bg-black hover:!text-white ${
                    (roomType || typesData.type) === item?.type &&
                    "bg-black text-white"
                  } ${
                    id + 1 !== data?.acf?.room_types?.length && "border-r-[1px]"
                  }`}
                >
                  {item?.type}
                </button>
              ))}
            </div>
            <hr />
            <div className="flex items-center gap-6 py-5">
              <figure>
                <Image
                  src="/images/user.png"
                  width={80}
                  height={80}
                  alt="image"
                  className="rounded-full h-[45px] w-[45px] object-cover"
                />
              </figure>
              <div>
                <h6 className="capitalize">
                  Hosted by {data?.acf?.store_name}
                </h6>
                <p className="font-light text-gray-500">Big adventurer</p>
              </div>
            </div>
            <hr />
            <Features items={data?.acf?.amenities} lowgap />
            <hr />
            <div className="mt-5 py-6 content">
              <div
                dangerouslySetInnerHTML={{ __html: data.content?.rendered }}
              />
            </div>
            <hr />
            <section className="py-6">
              <h3 className="sm:font-medium sm:text-lg md:text-2xl">
                Room Amenities
              </h3>
              <ul className="mt-4 grid gap-4 md:grid-cols-2">
                {data?.acf?.room_amenities?.map((item: any, id: number) => (
                  <li key={id} className="flex items-center gap-2">
                    <Image
                      src={item?.icon}
                      alt={item.feature}
                      width={30}
                      height={30}
                    />
                    <span>{item?.feature}</span>
                  </li>
                ))}
                
              </ul>
            </section>
            <hr />
            <section className="py-6">
              <h3 className="sm:font-medium sm:text-lg md:text-2xl">
                Room Policies
              </h3>
              <ul className="mt-4 grid gap-4 md:grid-cols-2">
                {data?.acf?.room_policies?.map((item: any, id: number) => (
                  <li key={id} className="flex items-center gap-2">
                    <Image
                      src={item?.icon}
                      alt={item.policy}
                      width={30}
                      height={30}
                    />
                    <span>{item?.policy}</span>
                  </li>
                ))}
              </ul>
            </section>
            <div className="hidden md:block">
              <hr />
            </div>
          </div>
          
          <aside className="flex-1 pt-4 md:ml-[95px]">
            <div className="notifybadge !sticky top-24">
              <h6 className="text-xl text-gray-600">
                <strong className="text-2xl text-black">
                  ${typesData?.price_per_night}
                </strong>{" "}
                night
              </h6>

              <section className="border text-sm rounded-lg mt-4">
                <div className="relative">
                  <div
                    id="calander"
                    className="flex cursor-pointer"
                    onClick={() => setOpenCalendar(!openCalendar)}
                  >
                    <div className="flex-1 p-2 px-3 border-r">
                      <h6>Check-in</h6>
                      <p className="text-gray-600">
                        {selectionRange.startDate.toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex-1 p-2 px-3">
                      <h6>Check-out</h6>
                      <p className="text-gray-600">
                        {selectionRange.endDate.toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  {openCalendar && <DateRangeCalander />}
                </div>
                <div className="border-t">
                  <div
                    className="flex-1 p-2 px-3 cursor-pointer"
                    onClick={() => setOpenGuest(!openGuest)}
                  >
                    <h6>Guest</h6>
                    <p className="text-gray-600">{totalGuest || 0} guest</p>
                  </div>
                  {openGuest && <Guest setOpenGuest={setOpenGuest} dbGest={typesData?.total_guests}/>}
                </div>
              </section>

              <button className="bg-[#111] hover:bg-gray-900 w-full mt-5 text-white py-2.5 rounded-lg">
                Reserve
              </button>
              <p className="text-center my-4 text-gray-600">
                You won't be charged yet
              </p>
              <div className="mt-5 font-light mb-5">
                <p className="text-gray-600 flex items-center gap-3 justify-between">
                  <span className="underline">${typesData?.price_per_night} x {totalNights} nights</span>
                  <span>${(typesData?.price_per_night * totalNights).toFixed(2) || 0}</span>
                </p>
                <p className="text-gray-600 flex mt-2 items-center gap-3 justify-between">
                  <span className="underline">Service fee</span>
                  <span>${servicesFee}</span>
                </p>
              </div>
              <hr />
              <div className="mt-4">
                <p className="flex mt-2 items-center gap-3 justify-between">
                  <span className="">Total before taxes</span>
                  <span>${((typesData?.price_per_night * totalNights) + servicesFee).toFixed(2)}</span>
                </p>
              </div>
            </div>
          </aside>
        </section>
      </Container>

      <Container>
        <div className="py-10">
          <h3 className="sm:font-medium sm:text-lg md:text-2xl">
            Where you’ll be
          </h3>
          <p className="mt-4 text-gray-600 mb-6">{data?.acf?.location}</p>
          <SingleListMap data={data}/>
        </div>
        {/* <SingleListMap/> */}
      </Container>

      <Container>
        <hr />
        <div className="py-10">
          <h3 className="sm:font-medium sm:text-lg md:text-2xl">
            Neighborhood highlights
          </h3>
          <p className="mt-4 text-gray-600">
            {data?.acf?.neighborhood_highlights}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default RoomSlug;
