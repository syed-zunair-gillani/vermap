"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const ItemCard = ({ data }: any) => {
  const slider = React.useRef<any>(null);

  return (
    <div className="">
      <div className="relative group cursor-pointer ">
        <Slider {...settings} ref={slider}>
          {data?.acf?.images_gallery?.map((item: any, idx: number) => (
            <figure key={idx} className="rounded-[14px] !overflow-hidden">
              <Link href={`/rooms/${data?.slug}`}>
              <Image
                src={item?.sizes?.medium}
                alt={data?.title}
                width={285}
                height={285}
                className="h-[160px] sm:h-[285px] lg:h-[310px] object-cover w-full"
              />
              </Link>
            </figure>
          ))}
        </Slider>
        <button
          onClick={() => slider?.current?.slickPrev()}
          className="absolute top-1/2 left-1 transform -translate-y-1/2 -mt-1 hidden group-hover:block"
        >
          <svg width="2.2em" height="2.2em" viewBox="0 0 24 24">
            <path
              fill="#fff"
              d="m12 15.289l.689-.689l-2.1-2.1H15.5v-1h-4.911l2.1-2.1L12 8.711L8.711 12zM12.003 21q-1.867 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709"
            />
          </svg>
        </button>
        <button onClick={() => slider?.current?.slickNext()} className="absolute top-1/2 right-1 transform -translate-y-1/2 -mt-1 hidden group-hover:block">
          <svg width="2.2em" height="2.2em" viewBox="0 0 24 24">
            <path
              fill="#fff"
              d="M12 15.289L15.288 12L12 8.711l-.688.689l2.1 2.1H8.5v1h4.912l-2.1 2.1zM12.003 21q-1.867 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709"
            />
          </svg>
        </button>
      </div>

      <h5 className="text-[15px] font-medium line-clamp-1 mt-1 px-1">
        <Link href={`/rooms/${data?.slug}`}>{data?.title?.rendered}</Link>
      </h5>
      <p className="text-gray-500 font-light text-sm px-1">
        Hosted by {data?.acf?.store_name}
      </p>
      <h5 className="text-[15px] font-medium line-clamp-1 px-1">
        ${data?.price} <span className="font-light">per guest</span>
      </h5>
    </div>
  );
};

export default ItemCard;

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};
