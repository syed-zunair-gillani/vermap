import Image from "next/image";
import React from "react";

const IconList = ({item, lowgap}:any) => {
  return (
    <>
      <li className={`flex items-center ${lowgap ? 'gap-3' : 'gap-3 md:gap-10'}`}>
        <figure className="w-[30px]">
          <Image src={item.icon || "/icons/star.svg"} width={30} height={30} alt={item.title} className="w-full"/>
        </figure>
        <div className="flex-1">
          <h6 className="text-lg pt-1 font-medium">{item?.title}</h6>
          <p className="text-gray-600 font-normal">{item?.info || item?.feature}</p>
        </div>
      </li>
    </>
  );
};

export default IconList;
