import { Review } from "@/interfaces/interface";
import { baseApi } from "./baseApi";

export const reviewApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        //get review
        getReviews: builder.query({
            query: (id) => `review/${id}`,
            transformResponse: (response: { message: string; data: Review[] }) => response.data,
            providesTags: ['Review']
        }),
        //add review
        addReview: builder.mutation({
            query: (data) => ({
                url: 'review/add',
                method: "POST",
                body: data
            }),
            invalidatesTags: ['Review']
        })
    }),
});

export const { useGetReviewsQuery, useAddReviewMutation } = reviewApi;
