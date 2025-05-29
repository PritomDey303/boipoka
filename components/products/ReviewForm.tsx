import { useAuth } from "@/hooks/useAuth";
import { useAddReviewMutation } from "@/redux/api/reviewApi";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  rating: number;
  comment: string;
};
interface bookProps {
  bookId: string;
}
export default function ReviewForm({ bookId }: bookProps) {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [msg, setMsg] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      rating: 3,
      comment: "",
    },
  });

  const [addReview, { isSuccess, isError }] = useAddReviewMutation();

  const onSubmit = async (data: FormData) => {
    const reviewData = {
      bookId: bookId,
      comment: data.comment.trim(),
      rating: data.rating,
    };

    try {
      if (!isAuthenticated) {
        router.push("/signin");
      } else {
        await addReview(reviewData).unwrap();
        console.log("Review Submitted:", reviewData);
        reset();
      }
    } catch (error) {
      console.error("Failed to submit review:", error);
    }
  };

  //clear message

  useEffect(() => {
    if (isSuccess) {
      setMsg("Review added successfully!");
    }
    if (isError) {
      setMsg("Sorry! Something went wrong!");
    }
    setTimeout(() => {
      setMsg("");
    }, 1500);
  }, [isError, isSuccess]);

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
      <h2 className="text-2xl font-semibold text-blue-950 mb-6">
        Write a Review
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Rating
          </label>
          <div className="flex gap-1 rating">
            {[...Array(5)].map((_, index) => (
              <input
                key={index}
                type="radio"
                value={index + 1}
                {...register("rating", { required: true, valueAsNumber: true })}
                className="mask mask-star-2 bg-orange-400"
                aria-label={`${index + 1} star`}
              />
            ))}
          </div>
          {errors.rating && (
            <p className="text-sm text-red-600 mt-1">Rating is required</p>
          )}
        </div>

        {/* Comment */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Your Review
          </label>
          <textarea
            {...register("comment", {
              required: "Comment is required",
              minLength: { value: 10, message: "Minimum 10 characters" },
            })}
            placeholder="Share your thoughts about the book..."
            className="w-full resize-none rounded-lg px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-950"
            rows={4}
          ></textarea>
          {errors.comment && (
            <p className="text-sm text-red-600 mt-1">
              {errors.comment.message}
            </p>
          )}
          {isError && <p className="text-sm text-red-600 mt-1">{msg}</p>}
          {isSuccess && <p className="text-sm text-green-600 mt-1">{msg}</p>}
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="bg-blue-950 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-900 transition duration-200 cursor-pointer"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
}
