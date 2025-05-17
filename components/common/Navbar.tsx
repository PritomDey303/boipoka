"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaUser, FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Logo from "@/public/logo/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  //handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (search.trim()) {
      router.push(
        `/products?search=${encodeURIComponent(
          search.trim()
        )}&data_from=search&page=1`
      );
    }
  };

  return (
    <div className="navbar bg-blue-950 text-white border-t-1 border-b-1 sticky top-0 z-50 px-10 py-8 shadow-lg flex justify-evenly items-center w-full flex-wrap">
      {/*  Logo */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link href="/" className="text-3xl font-extrabold">
          <Image src={Logo} alt="BoiPoka" />
        </Link>

        {/* Hamburger Toggle on Mobile */}
        <button
          className="md:hidden text-4xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <FaBars />
        </button>
      </div>

      {/* pages routes */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row gap-5 md:items-center mt-4 md:mt-0 w-full md:w-auto`}
      >
        {/* search bar */}
        <form onSubmit={handleSubmit}>
          <div className="hidden md:flex w-full mt-2 md:mt-0 order-last md:order-first md:mr-5">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
              className="input font-semibold md:w-96 text-gray-700 w-full rounded-none border border-white focus:outline-none focus:ring-0 focus:border-white"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-gray-700 text-white hover:bg-gray-600 transition cursor-pointer"
            >
              <IoSearch />
            </button>
          </div>
        </form>
        {/* all links */}
        <Link href="/wishlist" aria-label="Wishlist" className="flex gap-2">
          <FaHeart className="text-2xl transition-transform duration-200 ease-in-out hover:scale-125" />
          <span className="block md:hidden">উইশলিস্ট</span>
        </Link>
        <Link href="/cart" aria-label="Cart" className="flex gap-2">
          <FaShoppingCart className="text-2xl transition-transform duration-200 ease-in-out hover:scale-125" />
          <span className="block md:hidden">কার্ট</span>
        </Link>
        <Link href="/profile" aria-label="Profile" className="flex gap-2">
          <FaUser className="text-2xl transition-transform duration-200 ease-in-out hover:scale-125" />
          <span className="block md:hidden">প্রোফাইল</span>
        </Link>
        <Link href="/signin">
          <button className="btn  btn-white">সাইন ইন</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
