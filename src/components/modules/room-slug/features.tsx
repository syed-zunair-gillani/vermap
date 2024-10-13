import IconList from "@/components/list/icon-list";
import React from "react";

const Features = ({ items, lowgap }: any) => {
  return (
    <div className="py-10">
      <h3 className="sm:font-medium sm:text-lg md:text-2xl mb-6">What this place offers</h3>
      <ul className=" flex flex-col gap-4">
        {items?.map((item: any, idx: number) => (
          <IconList item={item} key={idx} lowgap={lowgap} />
        ))}
      </ul>
    </div>
  );
};

export default Features;
