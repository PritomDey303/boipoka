import React from "react";

const dummyReviews = [
  {
    id: 1,
    name: "Alice",
    comment:
      "A beautifully written book with deep characters and a moving story.",
    timeAgo: "2 hours ago",
  },
  {
    id: 2,
    name: "Bob",
    comment:
      "An insightful read. The author did a great job building the plot.A bit slow in the beginning, but picks up well in the second half.A bit slow in the beginning, but picks up well in the second half.",
    timeAgo: "1 day ago",
  },
  {
    id: 3,
    name: "Charlie",
    comment:
      "A bit slow in the beginning, but picks up well in the second half.",
    timeAgo: "3 days ago",
  },
];

export default function Review() {
  return (
    <div className="w-full p-6 bg-white rounded-xl ">
      <h1 className="text-3xl font-bold text-gray-800 mb-3">Book Reviews</h1>
      <hr className="border-t-2 border-dotted border-gray-400 my-3" />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Display Reviews */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Recent Reviews
          </h2>
          {dummyReviews.map((review) => (
            <div
              key={review.id}
              className="mb-4 p-4 bg-white border-l-4 border-blue-950 rounded-md shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-blue-900 font-semibold">
                  {review.name}
                </span>
                <span className="text-sm text-gray-400">{review.timeAgo}</span>
              </div>
              <p className="text-gray-700 text-[15px]">{review.comment}</p>
            </div>
          ))}
        </div>

        {/* Write Review */}
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
