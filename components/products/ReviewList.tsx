import React from "react";
import { Review } from "@/interfaces/interface";
import ReviewCard from "./ReviewCard";

interface ReviewListProps {
  reviews: Review[];
  isLoading: boolean;
  isError: boolean;
}

export default function ReviewList({
  reviews,
  isLoading,
  isError,
}: ReviewListProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
      <h2 className="text-2xl font-semibold text-blue-950 mb-6">
        Recent Reviews
      </h2>
      {isLoading && <p className="text-gray-500">Loading...</p>}
      {isError && (
        <p className="text-red-600 text-sm">{JSON.stringify(error)}</p>
      )}
      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
}
