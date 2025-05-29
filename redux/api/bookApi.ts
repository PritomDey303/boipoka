// services/bookApi.ts
import { baseApi } from "./baseApi";
import { Book, BookSearchParams } from "@/interfaces/interface";

export const bookApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Get books by search/tag/category
        getBooks: builder.query<Book[], BookSearchParams>({
            query: ({ search, data_from, limit, price }) => {
                const params = new URLSearchParams({
                    search,
                    data_from,
                    limit: limit?.toString() || "",
                    price,
                });
                return `books/search?${params.toString()}`;
            },
            transformResponse: (response: { message: string; data: Book[] }) =>
                response.data,
            providesTags: ["Books"],
        }),

        // Get book by ID
        getBooksById: builder.query<Book, string>({
            query: (id) => `books/book/${id}`,
            transformResponse: (response: { message: string; data: Book }) =>
                response.data,
            providesTags: (result, error, id) => [{ type: "Book", id }],
        }),

        // Related books
        getRelatedBooks: builder.query<Book[], string>({
            query: (id) => `books/related/${id}`,
            transformResponse: (response: { message: string; data: Book[] }) =>
                response.data,
            providesTags: ["Books"],
        }),
    }),
    overrideExisting: true,
});

export const {
    useGetBooksQuery,
    useGetBooksByIdQuery,
    useGetRelatedBooksQuery,
} = bookApi;
