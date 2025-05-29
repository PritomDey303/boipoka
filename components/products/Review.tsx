import React from "react";
import { useGetReviewsQuery } from "@/redux/api/reviewApi";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";

interface ReviewProps {
  id: string;
}

export default function Review({ id }: ReviewProps) {
  const { data: reviews = [], isLoading, isError } = useGetReviewsQuery(id);

  return (
    <div className="w-full p-8 bg-white rounded-2xl shadow-xl">
      <h1 className="text-3xl font-bold text-blue-950 mb-6">Book Reviews</h1>
      <hr className="border-t border-gray-300 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ReviewList reviews={reviews} isLoading={isLoading} isError={isError} />
        <ReviewForm bookId={id} />
      </div>
    </div>
  );
}
