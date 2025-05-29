"use client";
import CartCard from "@/components/cart/CartCard";
import CheckOutSummery from "@/components/cart/CheckOutSummery";
import { useGetCartQuery } from "@/redux/api/cartApi";
import React from "react";

export default function Page() {
  const { data, isSuccess, isLoading } = useGetCartQuery({});

  // Return early if loading
  if (isLoading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading cart...</p>
      </section>
    );
  }

  const cartItems = data?.items || [];

  const total = cartItems.reduce((sum, item) => {
    const price = item.book?.discount_price || item.book?.price || 0;
    return sum + price * item.quantity;
  }, 0);

  return (
    <section className="min-h-screen py-10">
      <div className="w-full md:w-8/10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 px-5">
        {/* product list */}
        <div className="bg-white md:col-span-2 p-5 rounded-xl shadow-lg text-gray-700">
          <h1 className="text-3xl">Selected Books</h1>
          <hr className="border-t-2 border-dotted border-gray-400 my-1" />

          {isSuccess && cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartCard
                key={item._id}
                id={item.book._id}
                title={item.book.title_bn}
                author={item.book.author_bn}
                price={item.book.price}
                discountPrice={item.book.discount_price}
                quantity={item.quantity}
              />
            ))
          ) : (
            <p>Your cart is empty!</p>
          )}
        </div>

        {/* calculation */}
        <div className="w-full bg-white p-5 rounded-xl shadow-lg">
          <CheckOutSummery total={total} deliveryFee={100} />
        </div>
      </div>
    </section>
  );
}
