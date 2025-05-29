// services/authApi.ts
import { baseApi } from "./baseApi";


export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Create User
        createUser: builder.mutation({
            query: (newUser) => ({
                url: "/api/user/signup",
                method: "POST",
                body: newUser,
            }),
            transformResponse: (response: { message: string }) => response.message,

        }),

        // Verify Email
        verifyEmail: builder.query({
            query: (token) => `/user/verify/${token}`,
        }),

        // Sign In
        signin: builder.mutation({
            query: (data) => ({
                url: "/user/signin",
                method: "POST",
                body: data,
            }),

            invalidatesTags: ["Auth"],
        }),

        // Sign Out
        signout: builder.mutation({
            query: () => ({
                url: "/user/signout",
                method: "POST",
            }),
            invalidatesTags: ["Auth"],
        }),

        // Check Auth
        checkAuth: builder.query({
            query: () => "/user/me",
            providesTags: ["Auth"],
        }),
    }),
    overrideExisting: false,
});

export const {
    useCreateUserMutation,
    useVerifyEmailQuery,
    useSigninMutation,
    useSignoutMutation,
    useCheckAuthQuery,
} = authApi;
