import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store';

const shopViewSlice = createSlice({
	name: 'viewSlice',
	initialState: {
		grid: 3,
		cart: false,
	},
	reducers: {
		setGrid(state, action) {
			state.grid = action.payload;
		},
		toggleCart(state, action) {
			state.cart = action.payload;
		},
	},
});
export default shopViewSlice.reducer;

export const { setGrid, toggleCart } = shopViewSlice.actions;
export const shopGrid = (state: State) => state.shopView.grid;
export const cartView = (state: State) => state.shopView.cart;
