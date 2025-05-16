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
          <p className="text-sm text-gray-600 mt-5">{relatedBook?.price} Tk</p>
        </div>
      </div>
    </Link>
  );
}
