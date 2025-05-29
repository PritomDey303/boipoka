import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    book: {
        _id: string;
        title?: string;
        price?: number;
    };
    quantity: number;
}

export interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [] as CartItem[],
};


export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            const index = state.items.findIndex(item => item.book._id === action.payload.book._id);

            if (index > -1) {
                state.items[index].quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }

            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        removeFromCart(state, action: PayloadAction<string>) {
            state.items = state.items.filter(item => item.book._id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(state.items));
        },

        updateQuantity(state, action: PayloadAction<{ bookId: string; quantity: number }>) {
            const index = state.items.findIndex(item => item.book._id === action.payload.bookId);
            if (index > -1) {
                state.items[index].quantity = action.payload.quantity;
            }
            localStorage.setItem('cart', JSON.stringify(state.items));
        },

        clearCart(state) {
            state.items = [];
            localStorage.removeItem('cart');
        },
    }

})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;