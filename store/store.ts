import { bookApi } from "@/redux/api/bookApi";
import { reviewApi } from "@/redux/api/reviewApi";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [bookApi.reducerPath]: bookApi.reducer,
        [reviewApi.reducerPath]: reviewApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(bookApi.middleware, reviewApi.middleware)

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch