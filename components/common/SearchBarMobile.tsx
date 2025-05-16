import React from "react";
import { IoSearch } from "react-icons/io5";

export default function SearchBarMobile() {
  return (
    <div className="px-2 w-8/10 mx-auto mt-5">
      <form action="#">
        <div className="flex md:hidden w-full mt-2 md:mt-0 order-last md:order-first md:mr-5 shadow-2xl">
          <input
            type="text"
            placeholder="Search by books"
            className="input  text-gray-700 w-full rounded-none border border-white focus:outline-none focus:ring-0 focus:border-white"
          />
          <button className="px-4 py-2 bg-gray-700 text-white hover:bg-gray-600 transition">
            <IoSearch />
          </button>
        </div>
      </form>
    </div>
  );
}
