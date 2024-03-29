import { createSlice } from '@reduxjs/toolkit';
import type { State } from '../store';

export type CartProduct = {
  pid: string;
  name: string;
  amount: number;
  category: string;
  qty: number;
  price: number;
  img: string[];
};
export type RootState = {
  cartItems: CartProduct[];
};

const savedCartItems = localStorage.getItem('cartItems');
const initialState: RootState = savedCartItems
  ? JSON.parse(savedCartItems)
  : {
      cartItems: [],
    };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const existItem = state.cartItems.find(
        (item) => item.pid === action.payload.pid
      );
      if (existItem) {
        existItem.qty = action.payload.qty;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeItem(state, action) {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.pid !== action.payload
        ),
      };
    },
    changeItemQty(state, action) {
      const existItem = state.cartItems.find(
        (item) => item.pid === action.payload.pid
      );
      if (existItem) {
        existItem.qty = action.payload.qty;
      }
    },
    emptyCart(state) {
      return {
        ...state,
        cartItems: [],
      };
    },
    updateCart(state, action) {
      return {
        ...state,
        cartItems: action.payload,
      };
    },
  },
});
export default cartSlice.reducer;

export const { addItem, removeItem, changeItemQty, emptyCart, updateCart } =
  cartSlice.actions;
export const cartItems = (state: State) => state.cart.cartItems;
