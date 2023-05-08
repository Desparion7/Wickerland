import { createSlice } from '@reduxjs/toolkit';
import type { State } from '../store';

export interface WishListProduct {
  pid: string;
  name: string;
  category: string;
  price: number;
  img: string[];
}
export interface WishListState {
  wishList: WishListProduct[];
}

const wishListItems = localStorage.getItem('wishListItems');
const initialState: WishListState = wishListItems
  ? JSON.parse(wishListItems)
  : {
      wishList: [],
    };

const wishListSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    wishListAddItem(state, action) {
      const existItem = state.wishList.find(
        (item) => item.pid === action.payload.pid
      );
      if (!existItem) {
        state.wishList.push(action.payload);
      }
    },
    wishListRemoveItem(state, action) {
      return {
        ...state,
        wishList: state.wishList.filter((item) => item.pid !== action.payload),
      };
    },
    updateWishList(state, action) {
      return {
        ...state,
        wishList: action.payload,
      };
    },
    emptyWishList(state) {
      return {
        ...state,
        wishList: [],
      };
    },
  },
});
export default wishListSlice.reducer;

export const {
  wishListAddItem,
  wishListRemoveItem,
  updateWishList,
  emptyWishList,
} = wishListSlice.actions;
export const wishList = (state: State) => state.wishList.wishList;
