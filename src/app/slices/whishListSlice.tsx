import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store';

export interface WhishListProduct {
	pid: string;
	name: string;
	category: string;
	price: number;
	img: string[];
}
export interface whishListState {
	whishList: WhishListProduct[];
}

const whishListItems = localStorage.getItem('whishListItems');
const initialState: whishListState = whishListItems
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
			state.whishList = state.whishList.filter(
				(item) => item.pid !== action.payload
			);
		},
	},
});
export default whishListSlice.reducer;

export const { whishListAddItem, whishListRemoveItem } = whishListSlice.actions;
export const whishList = (state: State) => state.whishList.whishList;
