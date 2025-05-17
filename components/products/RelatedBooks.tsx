import { Book } from "@/interfaces/interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface RelatedBookProps {
  relatedBook: Book | undefined;
}

export default function RelatedBooks({ relatedBook }: RelatedBookProps) {
  return (
    <Link href={`/products/${relatedBook?.id}`}>
      <div className="bg-white w-full shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 flex">
        <div className="relative w-1/4 aspect-[2/3]">
          <Image
            src={relatedBook?.cover_image || "/fallback.jpg"}
            alt={relatedBook?.title_en || "Related book"}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-3">
          <h2 className="text-md font-semibold truncate">
            {relatedBook?.title_bn || "No title"}
          </h2>
          <p className="text-sm text-gray-600">{relatedBook?.author_bn}</p>
          <div className="mt-5 flex gap-2 items-baseline">
            <p className="text-sm text-red-600 line-through ">
              {relatedBook?.price} Tk
            </p>
            <p className="text-md text-green-800 ">
              {relatedBook?.discount_price} Tk
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
