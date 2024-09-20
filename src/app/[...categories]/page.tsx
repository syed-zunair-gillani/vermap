import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";

const CategoryPage = () => {
  return (
    <Container>
      <main className="relative sm:flex justify-end">
        <Image
          src="/images/1.png"
          width={700}
          height={480}
          alt=""
          className="w-full sm:max-w-[80%] rounded-[12px] overflow-hidden object-cover sm:h-[480px] my-4"
        />
        <div className="p-2 sm:p-0">
          <div className="p-6 px-8 box-shadow sm:max-w-[420px] w-full sm:absolute top-1/2 left-0 bg-white -translate-y-1/2 rounded-xl">
            <h2 className="text-3xl font-bold">Glamping Rentals</h2>
            <p className="text-gray-400 font-normal mt-1">
              Fuss-free camping at its finest
            </p>
            <div className="rounded-lg border p-1.5 px-4 mt-4">
              <label htmlFor="" className="uppercase text-xs">
                location
              </label>
              <input
                type="text"
                value="United State"
                className="block outline-none border-none w-full mt-[-4px] text-gray-600"
              />
            </div>
            <div className="rounded-lg border p-1.5 px-4 mt-2 flex items-center">
              <div>
                <label htmlFor="" className="uppercase text-xs">
                  Check In
                </label>
                <input
                  type="text"
                  value="Add Date"
                  className="block outline-none border-none w-full mt-[-4px] text-gray-600"
                />
              </div>
              <div className="pl-[1.5px] h-[30px] bg-gray-300 mx-6" />
              <div className="">
                <label htmlFor="" className="uppercase text-xs">
                  Check out
                </label>
                <input
                  type="text"
                  value="Add Date"
                  className="block outline-none border-none w-full mt-[-4px] text-gray-600"
                />
              </div>
            </div>
            <button className="bg-[#111] w-full text-white py-3 mt-3 rounded-lg">
              Search
            </button>
          </div>
        </div>
      </main>

      <section className="-mt-20 sm:mt-16 my-16">
        <h3 className="text-2xl font-bold">
          Top-rated pet-friendly home rentals in Canmore{" "}
        </h3>
        <p className="text-gray-500">
          Guests agree: these pet-friendly homes are highly rated for location,
          cleanliness, and more.
        </p>
        <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[1, 2, 3, 4].map((item: any, idx: any) => (
            <div className="" key={idx}>
              <figure className="relative">
                <Image
                  src="/images/3.png"
                  className="object-cover h-[250px] rounded-xl"
                  alt=""
                  width={400}
                  height={250}
                />
                <span className="bg-white/90 px-3 py-1 text-sm rounded-full absolute top-3 left-3">
                  Guest favorite
                </span>
              </figure>

              <h4 className="mt-1 font-normal text-lg">Condo in Canmore</h4>
              <p className="line-clamp-4 text-gray-500">
                Mountainview condo, best location in Canmore* Pass The most cozy
                condo, perfect for families, couples or group of friends. Wake
                up with a beautiful Mountain View during your vacation and enjoy
                this Amazing Location
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="my-16">
        <h3 className="text-2xl font-bold">Vacation rentals for every style</h3>
        <p className="text-gray-500">
          Get the amount of space that is right for you
        </p>
        <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {[1, 2, 3].map((item: any, idx: any) => (
            <div className="" key={idx}>
              <figure className="relative">
                <Image
                  src="/images/3.png"
                  className="object-cover h-[360px] rounded-xl w-full"
                  alt=""
                  width={400}
                  height={360}
                />
              </figure>

              <h4 className="mt-1 font-normal text-lg">Houses</h4>
              <p className="line-clamp-4 text-gray-500">
                A space thats all yours, with room for everyone
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="my-16">
        <h3 className="text-2xl font-bold">Popular amenities for Canmore pet-friendly home rentals        </h3>
        <div className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
          {[1, 2, 3, 4, 5].map((item: any, idx: any) => (
            <div className="box-shadow-2 rounded-2xl" key={idx}>
              <figure className="relative">
                <Image
                  src="/icons/kitchen.svg"
                  className=""
                  alt=""
                  width={35}
                  height={35}
                />
              </figure>

              <h4 className="mt-1 font-normal text-lg">Kitchen</h4>
            </div>
          ))}
        </div>
      </section>

    </Container>
  );
};

export default CategoryPage;
