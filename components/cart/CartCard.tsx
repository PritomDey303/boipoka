"use client";
import React, { useState } from "react";
import { Eye, Trash2 } from "lucide-react";
import Link from "next/link";

type CartCardProps = {
  id: number;
  title: string;
  author: string;
  price: number;
  discountPrice: number;
};

export default function CartCard({
  id,
  title,
  author,
  price,
  discountPrice,
}: CartCardProps) {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="flex items-center justify-between gap-6 rounded-md shadow-md px-5 py-4 bg-white mb-4">
      <div className="flex-1 min-w-0">
        <p className="text-lg font-semibold text-gray-900 truncate">{title}</p>
        <p className="text-sm text-gray-600 truncate">{author}</p>
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor={`quantity-${id}`} className="text-sm text-gray-700">
          Qty:
        </label>
        <input
          type="number"
          id={`quantity-${id}`}
          value={quantity}
          onChange={(e) =>
            setQuantity(Math.max(1, parseInt(e.target.value) || 1))
          }
          min={1}
          max={99}
          className="w-16 border border-gray-300 rounded px-2 py-1 text-sm"
        />
      </div>

      <div className="text-right min-w-[80px]">
        <p className="text-md font-semibold text-green-600">
          ৳{discountPrice * quantity}
        </p>
        <p className="text-xs line-through text-gray-400">
          ৳{price * quantity}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href={`/products/${id}`}
          className="inline-flex items-center gap-1 px-3 py-1.5 text-sm text-blue-600 border border-0 rounded hover:bg-blue-50 transition"
        >
          <Eye size={16} />
          View
        </Link>
        <button
          className="text-red-500 hover:text-red-700 transition-colors"
          aria-label="Remove from cart"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
}
