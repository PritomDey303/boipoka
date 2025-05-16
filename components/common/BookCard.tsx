import { Book } from "@/interfaces/interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Link href={`/products/${book?.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden flex flex-col h-full border border-gray-300">
        <figure className="relative w-full h-40 sm:h-48 md:h-56 overflow-hidden">
          <Image
            src={book?.cover_image}
            alt={book?.title_bn}
            fill
            className="object-cover transform hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={false}
          />
        </figure>
        <div className="p-4 flex flex-col flex-grow">
          <h2 className="text-md md:text-xl font-semibold mb-1 text-gray-900 line-clamp-2 truncate">
            {book?.title_bn}
          </h2>
          <p className="text-sm md:text-md text-gray-700 mb-2 truncate">
            <span className="font-medium">{book?.author_bn}</span>
          </p>

          <div className="mt-auto">
            <div className="mt-2 flex items-center gap-2">
              <span className="text-sm line-through text-red-500">
                ৳{book?.price}
              </span>
              <span className="text-lg font-bold text-green-600">
                ৳{book?.discount_price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
