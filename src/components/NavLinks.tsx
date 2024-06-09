"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <ul className="text-gray-500 font-light flex items-center justify-center">
      <li className={`hover:text-black hover:bg-gray-100 px-5 rounded-full py-2 ${pathname === '/' && 'font-normal text-black'}`}>
        <Link href="/">Home</Link>
      </li>
      <li className={`hover:text-black hover:bg-gray-100 px-5 rounded-full py-2 ${pathname === '/blogs' && 'font-normal text-black'}`}>
        <Link href="/blogs">Blogs</Link>
      </li>
      <li className={`hover:text-black hover:bg-gray-100 px-5 rounded-full py-2 ${pathname === '/register' && 'font-normal text-black'}`}>
        <Link href="/register">Register</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
