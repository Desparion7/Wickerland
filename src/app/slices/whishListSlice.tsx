import { createSlice } from '@reduxjs/toolkit';
import type { State } from '../store';

export interface WhishListProduct {
  pid: string;
  name: string;
  category: string;
  price: number;
  img: string[];
}
export interface WhishListState {
  whishList: WhishListProduct[];
}

const whishListItems = localStorage.getItem('whishListItems');
const initialState: WhishListState = whishListItems
  ? JSON.parse(whishListItems)
  : {
      whishList: [],
    };

const whishListSlice = createSlice({
  name: 'whishlist',
  initialState,
  reducers: {
    whishListAddItem(state, action) {
      const existItem = state.whishList.find(
        (item) => item.pid === action.payload.pid
      );
      if (!existItem) {
        state.whishList.push(action.payload);
      }
    },
    whishListRemoveItem(state, action) {
      return {
        ...state,
        whishList: state.whishList.filter(
          (item) => item.pid !== action.payload
        ),
      };
    },
  },
});
export default whishListSlice.reducer;

export const { whishListAddItem, whishListRemoveItem } = whishListSlice.actions;
export const whishList = (state: State) => state.whishList.whishList;
