import { GlobalContext } from "@/context/global-context";
import React, { useContext, useState } from "react";

const Guest = ({ setOpenGuest, dbGest, className }: any) => {
  // Context for guest counts
  const {
    adults,
    setAdults,
    childrens,
    setChildrens,
    infants,
    setInfants,
    pets,
    setPets,
    totalGuest,
  } = useContext(GlobalContext);

  // Handlers for incrementing and decrementing
  const increment = (setCount: any, count: any) => setCount(count + 1);
  const decrement = (setCount: any, count: any) => {
    if (count > 0) setCount(count - 1); // Prevent negative numbers
  };

  // Calculate total guests without infants and pets
  const totalWithoutInfantsAndPets = adults + childrens;

  return (
    <div className={`absolute rounded-lg flex flex-col gap-5 notifybadge !pb-5 z-10 bg-white w-auto mr-[22px] p-3 ${className}`}>
      {/* Adults */}
      <div className="flex justify-between">
        <div>
          <p className="font-medium text-[17px]">Adults</p>
          <p className="text-gray-500">Age 13+</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="border p-2 rounded-full"
            onClick={() => decrement(setAdults, adults)}
            disabled={adults === 0} // Disable if count is 0
          >
            <svg width="15px" height="15px" viewBox="0 0 24 24">
              <path d="M23 13H1v-2h22z" />
              <path fill="none" d="M0 0h24v24H0z" />
            </svg>
          </button>
          <p className="text-lg text-gray-700 font-light">{adults}</p>
          <button
            className="border p-2 rounded-full"
            onClick={() => increment(setAdults, adults)}
            disabled={totalWithoutInfantsAndPets === +dbGest ? true : false}
          >
            <svg width="12px" height="12px" viewBox="0 -0.5 21 21" version="1.1">
              <defs></defs>
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-379.000000, -240.000000)" fill="#000000">
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <polygon id="plus-[#1512]" points="344 89 344 91 334.55 91 334.55 100 332.45 100 332.45 91 323 91 323 89 332.45 89 332.45 80 334.55 80 334.55 89"></polygon>
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>

      {/* Children */}
      <div className="flex justify-between">
        <div>
          <p className="font-medium text-[17px]">Children</p>
          <p className="text-gray-500">Ages 2–12</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="border p-2 rounded-full"
            onClick={() => decrement(setChildrens, childrens)}
            disabled={childrens === 0}
          >
            <svg width="15px" height="15px" viewBox="0 0 24 24">
              <path d="M23 13H1v-2h22z" />
              <path fill="none" d="M0 0h24v24H0z" />
            </svg>
          </button>
          <p className="text-lg text-gray-700 font-light">{childrens}</p>
          <button
            className="border p-2 rounded-full"
            onClick={() => increment(setChildrens, childrens)}
            disabled={totalWithoutInfantsAndPets === +dbGest ? true : false}
          >
            <svg width="12px" height="12px" viewBox="0 -0.5 21 21" version="1.1">
              <defs></defs>
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-379.000000, -240.000000)" fill="#000000">
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <polygon id="plus-[#1512]" points="344 89 344 91 334.55 91 334.55 100 332.45 100 332.45 91 323 91 323 89 332.45 89 332.45 80 334.55 80 334.55 89"></polygon>
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>

      {/* Infants (not included in totalGuest limit) */}
      <div className="flex justify-between">
        <div>
          <p className="font-medium text-[17px]">Infants</p>
          <p className="text-gray-500">Under 2</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="border p-2 rounded-full"
            onClick={() => decrement(setInfants, infants)}
            disabled={infants === 0}
          >
            <svg width="15px" height="15px" viewBox="0 0 24 24">
              <path d="M23 13H1v-2h22z" />
              <path fill="none" d="M0 0h24v24H0z" />
            </svg>
          </button>
          <p className="text-lg text-gray-700 font-light">{infants}</p>
          <button
            className="border p-2 rounded-full"
            onClick={() => increment(setInfants, infants)}
          >
            <svg width="12px" height="12px" viewBox="0 -0.5 21 21" version="1.1">
              <defs></defs>
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-379.000000, -240.000000)" fill="#000000">
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <polygon id="plus-[#1512]" points="344 89 344 91 334.55 91 334.55 100 332.45 100 332.45 91 323 91 323 89 332.45 89 332.45 80 334.55 80 334.55 89"></polygon>
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>

      {/* Pets (not included in totalGuest limit) */}
      <div className="flex justify-between">
        <div>
          <p className="font-medium text-[17px]">Pets</p>
          <p className="text-gray-500 underline">Bringing a service animal?</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="border p-2 rounded-full"
            onClick={() => decrement(setPets, pets)}
            disabled={pets === 0}
          >
            <svg width="15px" height="15px" viewBox="0 0 24 24">
              <path d="M23 13H1v-2h22z" />
              <path fill="none" d="M0 0h24v24H0z" />
            </svg>
          </button>
          <p className="text-lg text-gray-700 font-light">{pets}</p>
          <button
            className="border p-2 rounded-full"
            onClick={() => increment(setPets, pets)}
          >
            <svg width="12px" height="12px" viewBox="0 -0.5 21 21" version="1.1">
              <defs></defs>
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-379.000000, -240.000000)" fill="#000000">
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <polygon id="plus-[#1512]" points="344 89 344 91 334.55 91 334.55 100 332.45 100 332.45 91 323 91 323 89 332.45 89 332.45 80 334.55 80 334.55 89"></polygon>
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Guest;