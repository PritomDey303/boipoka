import React from "react";
import moment from "moment";
import { Review } from "@/interfaces/interface";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="p-4 bg-white border-l-4 border-blue-900 rounded-md shadow hover:shadow-md transition">
      <div className="flex justify-between items-center mb-2">
        <span className="text-blue-900 font-semibold text-lg">
          {review.user?.name}
        </span>
        <span className="text-sm text-gray-400">
          {moment(review.createdAt).fromNow()}
        </span>
      </div>

      {/* Rating stars */}

      <div className="flex items-center gap-1 mb-2">
        <span className="font-thin text-gray-600 italic">Rating:</span>
        <div className="rating rating-xs">
          {[...Array(5)].map((_, index) => (
            <input
              key={index}
              type="radio"
              name={`rating-${review._id}`} // make it unique
              className="mask mask-star-2 bg-yellow-400"
              checked={index + 1 === review.rating}
              readOnly
            />
          ))}
        </div>
      </div>

      <p className="text-gray-700 text-[15px]">{review.comment}</p>
    </div>
  );
}
