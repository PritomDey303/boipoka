import { Book, BookSearchParams } from "@/interfaces/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/books',
    }),
    tagTypes: ['Books', 'Book'],
    endpoints: (builder) => ({
        //get books by tags and category
        getBooks: builder.query<Book[], BookSearchParams>({
            query: ({ search, data_from, limit, price }) => {

                const params = new URLSearchParams({
                    search,
                    data_from,
                    limit: limit?.toString(),
                    price
                })

                return `/search?${params}`
            },
            transformResponse: (response: { message: string; data: Book[] }) => response.data, providesTags: ['Books']
        }),
        //get book by id
        getBooksById: builder.query<Book, string>({
            query: (id) => `/book/${id}`,
            transformResponse: (response: { message: string; data: Book }) => response.data,
        }),
        //related books
        getRelatedBooks: builder.query<Book[], string>({
            query: (id) => `/related/${id}`,
            transformResponse: (response: { message: string; data: Book[] }) => response.data,


        })
    }),
});

export const { useGetBooksQuery, useGetBooksByIdQuery, useGetRelatedBooksQuery } = bookApi;
