import { Eye, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function WishlistCard() {
  return (
    <div className="shadow-lg p-5 flex justify-between w-full mx-auto items-center bg-white rounded-md mb-4">
      {/* Book info */}
      <div>
        <p className="font-semibold text-xl">চলে যায় বসন্তের দিন</p>
        <p className="text-sm text-gray-600">হুমায়ুন আহমেদ</p>
      </div>

      {/* Price */}
      <div className="text-right">
        <p className="text-md text-green-600 font-semibold">৳500</p>
        <p className="text-xs line-through text-gray-400">৳700</p>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-3 ml-4">
        {/* View Button */}
        <Link
          href={`/products/1`}
          className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-blue-600 border-0 rounded hover:bg-blue-50 transition"
        >
          <Eye size={16} />
          View
        </Link>

        {/* Delete Button */}
        <button
          className="text-red-500 hover:text-red-700 transition-colors cursor-pointer"
          aria-label="Remove from cart"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
}
