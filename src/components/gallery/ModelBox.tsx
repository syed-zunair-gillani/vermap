"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { GlobalContext } from "@/context/global-context";
import Image from "next/image";
import Slider from "react-slick";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fff",
  boxShadow: 24,
  p: 0,
};

export default function GModelBox({ data }: any) {
  const { openGalleryModel, setOpenGalleryModel } =
    React.useContext(GlobalContext);

  const handleClose = () => setOpenGalleryModel(false);
  const slider = React.useRef<any>(null);

  return (
    <div>
      <Modal
        open={openGalleryModel}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="z-[9999999]"
      >
        <Box
          sx={style}
          className="!w-[100vw] !h-[100vh] relative overflow-y-scroll"
        >
          <div className="absolute top-5 right-14 z-[11111]">
            <button
              onClick={handleClose}
              className="bg-black p-1.5 fixed rounded-full"
            >
              <svg
                width="1.6rem"
                height="1.6rem"
                viewBox="0 -0.5 25 25"
                fill="#fff"
              >
                <path
                  d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"
                  fill="#fff"
                />
              </svg>
            </button>
          </div>
          <div className="">
            <Slider {...settings} ref={slider}>
              {data?.map((item: any, idx: number) => (
                <figure key={idx}>
                  <Image
                    src={item?.url}
                    alt={item}
                    width={1200}
                    height={1200}
                    className="w-full h-[100vh] object-cover "
                  />
                </figure>
              ))}
            </Slider>
          </div>
        </Box>
      </Modal>
      <button
        onClick={() => slider?.current?.slickPrev()}
        className="absolute top-1/2 left-8 hover:scale-110 transition-all duration-300 z-[11111]"
      >
        <svg width="3.2em" height="3.2em" viewBox="0 0 24 24">
          <path
            fill="#fff"
            d="m12 15.289l.689-.689l-2.1-2.1H15.5v-1h-4.911l2.1-2.1L12 8.711L8.711 12zM12.003 21q-1.867 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709"
          />
        </svg>
      </button>
      <button
        onClick={() => slider?.current?.slickNext()}
        className="absolute top-1/2 right-8 hover:scale-110 transition-all duration-300 z-[11111]"
      >
        <svg width="3.2em" height="3.2em" viewBox="0 0 24 24">
          <path
            fill="#fff"
            d="M12 15.289L15.288 12L12 8.711l-.688.689l2.1 2.1H8.5v1h4.912l-2.1 2.1zM12.003 21q-1.867 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709"
          />
        </svg>
      </button>
    </div>
  );
}

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
};
