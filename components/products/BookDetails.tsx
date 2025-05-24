import { Book } from "@/interfaces/interface";
import Image from "next/image";
import React from "react";

interface BookDetailsProps {
  book: Book | undefined;
}
export default function BookDetails({ book }: BookDetailsProps) {
  return (
    <div className="col-span-2 flex flex-col  md:flex-row gap-5 p-2">
      <div className="relative w-full md:w-2/5 aspect-[2/3]">
        <Image
          src={book?.cover_image || "/fallback.jpg"}
          alt={book?.title_en || "Book cover"}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-gray-800 my-5">
          {book?.title_bn}
        </h1>
        {/* writter */}
        <div className="flex gap-4 text-gray-700 text-lg align-items-center my-2">
          <p>লেখক</p>
          <p>: {book?.author_bn}</p>
        </div>
        {/* category */}
        <div className="flex gap-4 text-gray-700 text-lg align-items-center my-2">
          <p>ক্যাটাগরি</p>
          <p>: {book?.category}</p>
        </div>
        {/* Language */}
        <div className="flex gap-4 text-gray-700 text-lg align-items-center my-2">
          <p>ভাষা</p>
          <p>: {book?.language}</p>
        </div>
        {/* price */}
        <div className="flex gap-4 text-gray-700 text-lg items-baseline my-2">
          <p>প্রাইস</p>
          <p>:</p>
          <p className="line-through text-error text-sm"> {book?.price} Tk </p>
          <p className="text-green-600 font-semibold">
            {book?.discount_price} Tk
          </p>
        </div>
        {/* description */}
        <div className="flex gap-4 text-gray-700 text-lg align-items-center my-2 text-justify">
          <p>সারাংশ</p>
          <p>: {book?.description} </p>
        </div>
        {/* wishlist and add to cart button */}
        <div className="flex mt-5 justify-start gap-5">
          <button className="btn btn-outline btn-warning">
            Add to Wishlist
          </button>
          <button className="btn btn-outline btn-error">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
