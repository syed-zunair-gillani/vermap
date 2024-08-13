import Image from "next/image";
import React from "react";
import Features from "../modules/room-slug/features";

const MeetYourHost = () => {
  return (
    <section className="py-10 ">
      <h3 className="sm:font-medium sm:text-lg md:text-2xl">Meet your Host</h3>
      <div className="notifybadge mt-5 max-w-[380px] !border-none flex justify-center flex-col items-center">
        <figure className="relative inline-flex">
          <Image
            src="/images/user.png"
            width={100}
            height={100}
            alt="image"
            className="rounded-full h-[90px] w-[90px] object-cover"
          />
          <div className="bg-[#e51d52] inline-flex rounded-full absolute bottom-2 -right-2 p-1">
            <svg width="1.3em" height="1.3em" viewBox="0 0 24 24">
              <path
                fill="white"
                d="m10.95 12.7l-1.4-1.4q-.3-.3-.7-.3t-.7.3t-.3.713t.3.712l2.1 2.125q.3.3.7.3t.7-.3l4.25-4.25q.3-.3.3-.712t-.3-.713t-.712-.3t-.713.3zM12 21.9q-.175 0-.325-.025t-.3-.075Q8 20.675 6 17.638T4 11.1V6.375q0-.625.363-1.125t.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725T20 6.375V11.1q0 3.5-2 6.538T12.625 21.8q-.15.05-.3.075T12 21.9"
              />
            </svg>
          </div>
        </figure>
        <h2 className="font-medium text-lg mt-3 sm:text-2xl md:text-[28px]">
          Polly Pocket
        </h2>
        <p className="text-sm font-light">Started hosting in 2024</p>
      </div>
      <Features items={featuresList} lowgap/>
      <p className="font-normal text-gray-600">I’m your average girl that’s not-so-average sized. But even though I’m tiny, there’s no adventure too big for me to conquer. Whether it’s hanging ten on a surfboard or rocking the runway, I’m always down for a new epic experience, especially if my BFFs are along for the ride.      </p>
    </section>
  );
};

export default MeetYourHost;

const featuresList = [
  {
    info: "Most useless skill: Fitting through cracks under the door",
    icon: "/icons/star.svg",
  },
  {
    info: "Suit up for adventure with my dresses, glamour jacket, scarves, and more!",
    icon: "/icons/star.svg",
  },
  {
    info: "Unleash your creativity at my picnic table—aka Friendship Bracelet Station.",
    icon: "/icons/star.svg",
  },
  {
    info: "It’ll be all that and a bag of chips! And lots of candy, too.",
    icon: "/icons/star.svg",
  },
];
