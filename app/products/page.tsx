"use client";

import BookCard from "@/components/common/BookCard";
import { Book } from "@/interfaces/interface";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useGetBooksQuery } from "@/redux/api/bookApi";
import { Loader2 } from "lucide-react";

export default function Page() {
  const searchParams = useSearchParams();

  const data_from = searchParams.get("data_from") || "";
  const search = searchParams.get("search") || "";
  const [limit, setLimit] = useState<number>(10);
  const [price, setPrice] = useState<"asc" | "desc">("asc");

  const {
    data: matchedBooks = [],
    isLoading,
    isError,
  } = useGetBooksQuery({
    search,
    data_from,
    limit,
    price,
  });
  //reset limit
  useEffect(() => {
    setLimit(10);
  }, [search, data_from]);

  return (
    <section className="min-h-screen py-10">
      <div className="w-9/10 md:w-8/10 bg-white mx-auto rounded-2xl shadow-xl mt-5 py-8 px-5">
        <h1 className="font-semibold text-xl md:text-2xl text-center">
          Search Result
        </h1>
        <div className="mt-5 flex justify-between px-7 text-sm md:text-base">
          <p>
            {matchedBooks.length} {matchedBooks.length === 1 ? "item" : "items"}{" "}
            found
          </p>
          <div className="flex gap-1 w-auto">
            <p>Sort By:</p>
            <select
              id="priceSort"
              className="block w-full px-2 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
              value={price}
              onChange={(e) => setPrice(e.target.value as "asc" | "desc")}
            >
              <option value="asc">Low to High Price</option>
              <option value="desc">High to Low Price</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 p-5">
          {isLoading ? (
            <p className="text-center col-span-full">Loading...</p>
          ) : isError ? (
            <p className="text-error text-center font-semibold col-span-full">
              Error fetching books
            </p>
          ) : matchedBooks.length > 0 ? (
            matchedBooks.map((book: Book) => (
              <BookCard key={book._id} book={book} />
            ))
          ) : (
            <p className="text-error text-center font-semibold col-span-full">
              No books found
            </p>
          )}
        </div>

        <div className="my-5 flex justify-center">
          {isLoading ? (
            <button
              className="flex items-center gap-2 px-5 py-2 border border-blue-600 text-blue-600 bg-blue-100 rounded-md cursor-not-allowed"
              disabled
            >
              <Loader2 className="w-4 h-4 animate-spin" />
              Loading...
            </button>
          ) : matchedBooks.length >= limit ? (
            <button
              className="flex items-center gap-2 px-5 py-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md transition-all duration-300"
              onClick={() => setLimit(limit + 10)}
            >
              <Loader2 className="w-4 h-4" />
              Load More
            </button>
          ) : (
            <div className="text-gray-500 font-semibold text-center">
              No more books to load.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
