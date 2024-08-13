import React from "react";
import Container from "../ui/container";
import { Iheart, Ishare } from "@/const";
import { Button } from "@mui/material";
import GalleryForDesktop from "../gallery/GalleryForDesktop";
import GalleryForMobile from "../gallery/GalleryForMobile";
import Image from "next/image";
import Features from "../modules/room-slug/features";
import MeetYourHost from "../meet-your-host/meet-your-host";

const RoomSlug = () => {
  return (
    <section className="max-w-[1280px] mx-auto">
      <Container className="!px-0 md:px-3">
        {/* head  */}
        <section className="flex flex-col-reverse md:flex-col">
          <div className="flex justify-between items-center gap-4 py-3 md:py-5 px-4 md:px-0">
            <h2 className="font-medium text-lg sm:text-2xl md:text-[28px]">
              PASSAMBHATI VILLA /Cape Shark Villas, 4-10 pers.
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
          <GalleryForDesktop />
          {/* Images gallery for Mobile */}
          <GalleryForMobile />
        </section>
      </Container>
      <Container className="px-4 md:mt-7">
        <section className="flex">
          <div className="md:w-[60%]">
            <h3 className="sm:font-medium sm:text-lg md:text-2xl">
              Westford, Massachusetts
            </h3>
            <p className="text-gray-600 font-light text-base mb-8">
              4 guests <span> · </span> 1 bedroom <span> · </span> 5 beds{" "}
              <span> · </span> Private half-bath
            </p>
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
                <h6>Hosted by Polly Pocket</h6>
                <p className="font-light text-gray-500">Big adventurer</p>
              </div>
            </div>
            <hr />
            <Features items={featuresList} />
            <hr />
            <div className="mt-5 py-6 content">
              <p>
                Hi, friends! Playdate at my place! You in? I’ll be off on a 35th
                birthday adventure, but my life-sized Slumber Party Fun compact
                is all yours for the day. I left everything just the way you
                remember it—from all the way back in ’94! Can you believe it’s
                been that long?! Anyway, grab your BFFs—I set up a retro bash
                that’s sure to be a blast!{" "}
              </p>
              <strong>What you’ll do</strong>
              <p>
                I set up my compact to feel like you’re still actually in the
                ’90s! Just picture it—crafting, throwback snacks, Polaroid
                cameras… it’s going to be AMAZING. Basically, I turned my
                Slumber Party Fun compact into a time machine where your
                imagination can run wild. Because there’s no greater adventure
                than the one you create for yourself.{" "}
              </p>
              <p>Here’s the 411—let’s do this! </p>
              <p>
                • Remember when we used to give each other makeovers and gab
                until morning? Well, my vanity has everything you need to relive
                that magic. Press-on nails and butterfly hair clips, anyone?!
              </p>
              <p>
                • My compact is stuffed to the brim with all my favorite snacks
                from the greatest era in snacking history. Ring Pops and Push
                Pops and Ba
              </p>
              <p>
                • Before you leave, I made sure you’ll be able to commemorate
                your adventure with a group photo right outside my compact. I’m
                not saying it would DEFINITELY be the cover pic of your
                ‘90s-style scrapbook, but come on.
              </p>
            </div>
            <hr />
            <MeetYourHost />
          </div>
          <aside className="flex-1 ml-[95px] hidden md:block">
            <div className="notifybadge">
              <h5 className="text-center font-medium text-[22px] mb-5">
                Coming August 21
              </h5>
              <button className="bg-[#e51d52] w-full text-white py-2.5 rounded-lg">
                Notify me
              </button>
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
          <p className="mt-4 text-gray-600">
            Westford, Massachusetts, United States{" "}
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
