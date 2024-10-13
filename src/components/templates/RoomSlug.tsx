"use client";
import React, { useState } from "react";
import Container from "../ui/container";
import { Iheart, Ishare } from "@/const";
import { Button } from "@mui/material";
import GalleryForDesktop from "../gallery/GalleryForDesktop";
import GalleryForMobile from "../gallery/GalleryForMobile";
import Image from "next/image";
import Features from "../modules/room-slug/features";
import MeetYourHost from "../meet-your-host/meet-your-host";

const RoomSlug = ({ data }: any) => {
  console.log("🚀 ~ RoomSlug ~ data: 111", data);
  console.log("🚀 ~ RoomSlug ~ data:", data?.acf?.room_types?.[0]);
  const [roomType, setRoomType] = useState<string>("");
  const [typesData, setTypesData] = useState<any>(data?.acf?.room_types?.[0]);
  console.log("🚀 ~ RoomSlug ~ typesData: 11", typesData);

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
      <Container className="px-4 md:mt-7">
        <section className="flex">
          <div className="md:w-[60%]">
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
                  className={`p-3 px-8 hover:bg-black hover:!text-white ${
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
                      src={`${item.icon}`}
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
                    <img
                      src={item.icon}
                      alt={item.policy}
                      width={30}
                      height={30}
                    />
                    <span>{item?.policy}</span>
                  </li>
                ))}
              </ul>
            </section>
            <hr />
            <MeetYourHost />
          </div>
          <aside className="flex-1 ml-[95px] hidden md:block">
            <div className="notifybadge">
              <h6 className="text-xl text-gray-600">
                <strong className="text-2xl text-black">
                  ${typesData?.price_per_night}
                </strong>{" "}
                night
              </h6>
              <div className="border text-sm rounded-lg overflow-hidden mt-4">
                <div className="flex">
                  <div className="flex-1 p-2 px-3 border-r">
                    <h6>Check-in</h6>
                    <p className="text-gray-600">11/3/2024</p>
                  </div>
                  <div className="flex-1 p-2 px-3">
                    <h6>Check-out</h6>
                    <p className="text-gray-600">11/3/2024</p>
                  </div>
                </div>
                <div>
                  <div className="flex-1 p-2 px-3 border-t">
                    <h6>Guest</h6>
                    <p className="text-gray-600">1 guest</p>
                  </div>
                </div>
              </div>
              <button className="bg-[#111] hover:bg-gray-900 w-full mt-5 text-white py-2.5 rounded-lg">
                Reserve
              </button>
              <p className="text-center my-4 text-gray-600">
                You won't be charged yet
              </p>
              <div className="mt-5 font-light mb-5">
                <p className="text-gray-600 flex items-center gap-3 justify-between">
                  <span className="underline">$220 x 2 nights</span>
                  <span>$440</span>
                </p>
                <p className="text-gray-600 flex mt-2 items-center gap-3 justify-between">
                  <span className="underline">Vermap service fee</span>
                  <span>$62</span>
                </p>
              </div>
              <hr/>
              <div className="mt-4">
              <p className=" flex mt-2 items-center gap-3 justify-between">
                  <span className="underline">Total before taxes</span>
                  <span>$502</span>
                </p>
              </div>
            </div>
          </aside>
        </section>
      </Container>

      <Container>
        <hr />
        <div className="py-10">
          <h3 className="sm:font-medium sm:text-lg md:text-2xl">
            Where you’ll be
          </h3>
          <p className="mt-4 text-gray-600">{data?.acf?.location}</p>
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
            My Slumber Party Fun compact is in my adorable hometown of
            Littleton, Massachusetts. It might not be the most urban of
            settings, but that’s exactly why I love it. Plenty of room for
            imagination, exploration, and adventure. You MUST come see it.
          </p>
        </div>
      </Container>

      <Container className="">
        <hr />
        <figure className="flex justify-center mt-8">
          <Image src="/images/icons.png" width={600} height={300} alt="icons" />
        </figure>
        <div className=" max-w-[460px] mx-auto mb-16">
          <h3 className="text-center font-extrabold text-2xl md:text-8xl">
            icons
          </h3>
          <p className="mt-4 text-gray-600 text-center">
            Extraordinary experiences hosted by the world’s greatest names in
            music, film, TV, art, sports, and more.
          </p>
        </div>
      </Container>

      <Container className="">
        <hr />
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 my-10">
          <div className="">
            <h3 className="font-medium">Request to book</h3>
            <p className="text-gray-500 font-normal mt-1.5">
              Choose your dates, add your guests, then answer a question about
              why you want to go.
            </p>
          </div>
          <div className="">
            <h3 className="font-medium">Selection process</h3>
            <p className="text-gray-500 font-normal mt-1.5">
              First, we’ll randomly choose a set of potential guests. Next,
              we’ll review their answers for unique perspectives and connections
              to the icon. Then, we’ll invite selected guests to book.
            </p>
          </div>
          <div className="">
            <h3 className="font-medium">Requirements</h3>
            <p className="text-gray-500 font-normal mt-1.5">
              You’ll need an active Airbnb account and the app to participate,
              and be a resident of an eligible country or region. It won’t cost
              you anything to submit a request.
            </p>
          </div>
        </section>
      </Container>

      <Container className="">
        <hr />
        <div className=" max-w-[560px] my-10">
          <p className="mt-4 text-gray-600 text-sm font-light">
            If you’re selected and decide to book, you’ll have 24 hours to
            complete the purchase. Travel costs are not included. See the full
            rules, including age and geographic eligibility, how data will be
            used, odds of being selected, and other terms.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default RoomSlug;

const featuresList = [
  {
    title: "Camp out under the stars",
    info: "Curl up in my life-sized Action Park Tent for the night!",
    icon: "/icons/star.svg",
  },
  {
    title: "Play dress-up with my wardrobe",
    info: "Suit up for adventure with my dresses, glamour jacket, scarves, and more!",
    icon: "/icons/star.svg",
  },
  {
    title: "Craft some bling for your BFFs",
    info: "Unleash your creativity at my picnic table—aka Friendship Bracelet Station.",
    icon: "/icons/star.svg",
  },
  {
    title: "Raid my kitchen for your fav ‘90s goodies",
    info: "It’ll be all that and a bag of chips! And lots of candy, too.",
    icon: "/icons/star.svg",
  },
];
