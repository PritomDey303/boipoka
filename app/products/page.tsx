"use client";
import BookCard from "@/components/common/BookCard";
import { books } from "@/helper/books";
import { Book } from "@/interfaces/interface";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [matchedBooks, setMatchedBooks] = useState<Book[]>([]);
  const searchParams = useSearchParams();

  const dataFrom = searchParams.get("data_from");
  const search = searchParams.get("search") || "";

  useEffect(() => {
    if (dataFrom === "search" && search) {
      const normalizedSearch = search.trim().toLowerCase();

      const filtered = books.filter(
        (book: Book) =>
          book.title_en.toLowerCase().includes(normalizedSearch) ||
          book.title_bn.includes(search) ||
          book.author_en.toLowerCase().includes(normalizedSearch) ||
          book.author_bn.includes(search)
      );

      setMatchedBooks(filtered);
    }
    if (dataFrom === "category" && search) {
      const filtered = books.filter(
        (book: Book) =>
          book.category.includes(search) || book.tags.includes(search)
      );

      setMatchedBooks(filtered);
    }
  }, [search, dataFrom]);
  return (
    <section className=" min-h-screen py-10">
      <div className="w-9/10 md:w-8/10 bg-white  mx-auto rounded-2xl shadow-xl mt-5 py-8 px-5">
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
            >
              <option value="default">Default</option>
              <option value="lowToHigh">Low to High Price</option>
              <option value="highToLow">High to Low Price</option>
            </select>
          </div>
        </div>

        {/* display result */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 p-5">
          {matchedBooks.length > 0 ? (
            matchedBooks.map((book: Book) => (
              <BookCard key={book.id} book={book} />
            ))
          ) : (
            <p className="text-error text-center font-semibold col-span-full">
              No books found
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
