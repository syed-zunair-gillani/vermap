"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { GlobalContext } from "@/context/global-context";
import Image from "next/image";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
};

export default function GModelBox({ data }: any) {
  const { openGalleryModel, seOpenGalleryModel } =
    React.useContext(GlobalContext);

  const handleClose = () => seOpenGalleryModel(false);

  return (
    <div>
      <Modal
        open={openGalleryModel}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="z-[9999999]"
      >
        
        <Box sx={style} className="w-[100vw] h-[100vh] relative overflow-y-scroll">
        <div>
            <button
              onClick={handleClose}
              className="bg-black p-1.5 fixed rounded-full"
            >
              <svg width="1.2em" height="1.2em" viewBox="0 0 1024 1024">
                <path
                  fill="#fff"
                  d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-4 mt-12">
            {data?.map((item: any, idx: number) => (
              <figure key={idx}>
                <Image
                  src={item?.url}
                  alt={item}
                  width={600}
                  height={800}
                  className="w-full"
                />
              </figure>
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
