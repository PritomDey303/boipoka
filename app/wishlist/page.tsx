import WishlistCard from "@/components/wishlist/WishlistCard";
import React from "react";

export default function page() {
  return (
    <section className="min-h-screen p-3">
      <div className=" rounded-xl bg-white p-5 md:p-10 shadow-xl mt-5 text-gray-700 w-full md:w-8/10 mx-auto">
        <h1 className="font- text-3xl ">Wishlist</h1>
        <hr className="border-t-2 border-dotted border-gray-400 my-1" />
        <div>
          <WishlistCard />
          <WishlistCard />
        </div>
      </div>
    </section>
  );
}
