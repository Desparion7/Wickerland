import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store';

export interface CartProduct {
	pid: string;
	qty: number;
	price: number;
}
export interface RootState {
	products: CartProduct[];
}
const initialState: RootState = {
	products: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			const existItem = state.products.find(
				(item) => item.pid === action.payload.pid
			);
			if (existItem) {
				existItem.qty = action.payload.qty;
			} else {
				state.products.push(action.payload);
			}
		},
		removeItem(state, action) {
			state.products = state.products.filter(
				(item) => item.pid !== action.payload
			);
		},
	},
});
export default cartSlice.reducer;

export const { addItem, removeItem } = cartSlice.actions;
export const cartItems = (state: State) => state.cart.products;
