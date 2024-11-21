import React from "react";

const Destination = ({ className }: any) => {
  return (
    <section
      className={`absolute rounded-lg flex flex-col gap-2 notifybadge !pb-5 z-10 bg-white w-auto mr-[22px] p-3 ${className}`}
    >
      <h4 className="px-2 text-sm">Search by region</h4>
      <div className="grid grid-cols-3 gap-2">
        <div className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <img
            className="border rounded-lg"
            alt=""
            src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg?im_w=320"
          />
          <p className="text-xs text-gray-700 mt-1 pl-1">I’m flexible</p>
        </div>
        <div className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <img
            className="border rounded-lg"
            alt=""
            src="https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320"
          />
          <p className="text-xs text-gray-700 mt-1 pl-1">Europe</p>
        </div>
        <div className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <img
            className="border rounded-lg"
            alt=""
            src="https://a0.muscache.com/im/pictures/dbb2b5ef-2efe-4099-81ac-c7b957f384ed.jpg?im_w=320"
          />
          <p className="text-xs text-gray-700 mt-1 pl-1">United Kingdom</p>
        </div>
        <div className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <img
            className="border rounded-lg"
            alt=""
            src="https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320"
          />
          <p className="text-xs text-gray-700 mt-1 pl-1">Southeast Asia</p>
        </div>
        <div className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <img
            className="border rounded-lg"
            alt=""
            src="https://a0.muscache.com/im/pictures/e1a36727-5064-4ba7-a870-4f9fec72def7.jpg?im_w=320"
          />
          <p className="text-xs text-gray-700 mt-1 pl-1">United Arab Emirates</p>
        </div>

        <div className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <img
            className="border rounded-lg"
            alt=""
            src="https://a0.muscache.com/im/pictures/66355b01-4695-4db9-b292-c149c46fb1ca.jpg?im_w=320"
          />
          <p className="text-xs text-gray-700 mt-1 pl-1">Middle East</p>
        </div>
      </div>
    </section>
  );
};

export default Destination;
