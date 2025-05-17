"use client";
import CartCard from "@/components/cart/CartCard";
import CheckOutSummery from "@/components/cart/CheckOutSummery";
import React from "react";

const page = () => {
  return (
    <section className="min-h-screen py-10">
      <div className="w-full md:w-8/10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 px-5">
        {/* product list */}
        <div className="bg-white  md:col-span-2 p-5 rounded-xl shadow-lg text-gray-700">
          <h1 className="text-3xl">Selected Books</h1>
          <hr className="border-t-2 border-dotted border-gray-400 my-1" />
          <CartCard
            id={1}
            title="জোছনা ও জননীর গল্প"
            author="হুমায়ূন আহমেদ"
            price={400}
            discountPrice={320}
          />
        </div>
        {/* calculation */}
        <div className="w-full bg-white p-5 rounded-xl shadow-lg">
          <CheckOutSummery total={50} deliveryFee={100} />
        </div>
      </div>
    </section>
  );
};
export default page;
