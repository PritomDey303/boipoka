import { baseApi } from "./baseApi";

export const cartApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        //getCart
        getCart: builder.query({
            query: () => "/cart",
            providesTags: ["Cart"]
        }),
        //add to cart
        addToCart: builder.mutation({
            query: (data) => ({
                url: "/cart/add",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Cart"]
        }),
        //update cart quantity
        updateCart: builder.mutation({
            query: (data) => ({
                url: '/cart/update',
                method: "PUT",
                body: data
            }),
            invalidatesTags: ["Cart"]

        })


    }),
    overrideExisting: true
})

export const { useGetCartQuery, useAddToCartMutation, useUpdateCartMutation } = cartApi