import React, { useState } from "react";
import Logo from "./Logo";
import Image from "next/image";
import Link from "next/link";

const MobileNav = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <div className="md:hidden bg-white z-10 p-3 relative flex items-center justify-between">
        <Logo />
        <Image
          src="/icons/menu.svg"
          alt="icon"
          width={30}
          height={30}
          className="cursor-pointer"
          onClick={() => setOpenNav(!openNav)}
        />
      </div>
      <nav
        className={`absolute p-4 bg-[#111]/95 z-[1] w-full left-0 transition-all duration-200 text-white flex flex-col ${openNav ?  'top-16' : 'top-[-500%]'}`}
      >
        <Link href="/" className="py-4 border-b-[2px] border-gray-300/10">
          Home
        </Link>
        <Link href="/" className="py-4 border-b-[2px] border-gray-300/10">
          Blogs
        </Link>
        <Link href="/" className="py-4">
          Registor
        </Link>
      </nav>
    </>
  );
};

export default MobileNav;
