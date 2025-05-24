import { useGetReviewsQuery } from "@/redux/api/reviewApi";
import { Review } from "@/interfaces/interface";
import React from "react";
import moment from "moment";

interface ReviewProps {
  id: string;
}

export default function ReviewSection({ id }: ReviewProps) {
  const {
    data: reviews = [],
    isLoading,
    isError,
    error,
  } = useGetReviewsQuery(id);

  return (
    <div className="w-full p-6 bg-white rounded-xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-3">Book Reviews</h1>
      <hr className="border-t-2 border-dotted border-gray-400 my-3" />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Recent Reviews
          </h2>

          {isLoading && <p>Loading...</p>}
          {isError && <p className="text-red-500">{JSON.stringify(error)}</p>}
          {reviews.map((review: Review) => (
            <div
              key={review?._id}
              className="mb-4 p-4 bg-white border-l-4 border-blue-950 rounded-md shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-blue-900 font-semibold">
                  {review.user?.name}
                </span>
                <span className="text-sm text-gray-400">
                  {moment(review?.createdAt).fromNow()}
                </span>
              </div>
              <p className="text-gray-700 text-[15px]">{review?.comment}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Write a Review
          </h2>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              value="Pritom"
              readOnly
              className="bg-gray-200 text-gray-700 rounded-md px-4 py-2 border border-gray-300"
            />
            <textarea
              placeholder="Write your review here..."
              className="resize-none rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
              rows={4}
            ></textarea>
            <button className="self-start bg-blue-950 text-white px-5 py-2 rounded-md hover:bg-blue-900 transition cursor-pointer">
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
