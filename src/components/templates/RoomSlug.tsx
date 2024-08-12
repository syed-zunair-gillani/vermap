import React from "react";
import Container from "../ui/container";
import { Iheart, Ishare } from "@/const";
import { Button } from "@mui/material";
import GalleryForDesktop from "../gallery/GalleryForDesktop";
import GalleryForMobile from "../gallery/GalleryForMobile";

const RoomSlug = () => {
  return (
    <>
      <Container>
        {/* head  */}
        <section className="flex justify-between items-center gap-4 py-5">
          <h2 className="font-medium text-2xl md:text-[28px]">
            PASSAMBHATI VILLA /Cape Shark Villas, 4-10 pers.
          </h2>
          <div className="flex items-center gap-1">
            <Button className="flex gap-2 items-center text-gray-600 hover:rounded-md">
              <i className="text-[17px]">{Ishare()}</i>
              <span className="underline capitalize text-sm">Share</span>
            </Button>
            <Button className="flex gap-2 items-center text-gray-600 hover:rounded-md">
              <i className="text-[18px]">{Iheart()}</i>
              <span className="underline capitalize text-sm">Save</span>
            </Button>
          </div>
        </section>
        {/* Images gallery for Desktop */}
        <GalleryForDesktop />
        {/* Images gallery for Mobile */}
        <GalleryForMobile />

      </Container>
    </>
  );
};

export default RoomSlug;
