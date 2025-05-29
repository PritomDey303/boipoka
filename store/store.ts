
import { configureStore } from "@reduxjs/toolkit";
import authReducer from '@/redux/features/authSlice'
import { cartReducer } from "@/redux/features/cartSlice";
import { baseApi } from "@/redux/api/baseApi";
export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        [baseApi.reducerPath]: baseApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware)

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch