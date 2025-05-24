import { Review } from "@/interfaces/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviewApi = createApi({
    reducerPath: "reviewApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/review",
    }),
    endpoints: (builder) => ({
        getReviews: builder.query<Review[], string>({
            query: (id) => `/${id}`,
            transformResponse: (response: { message: string; data: Review[] }) => response.data,
        }),
    }),
});

export const { useGetReviewsQuery } = reviewApi;
