import { configureStore } from '@reduxjs/toolkit';
import shopViewSlice from './slices/shopViewSlice';
import slideMenuSlice from './slices/slideMenuSlice';
import cartSlice from './slices/cartSlice';
import { RootState } from './slices/cartSlice';

export interface State {
	cart: RootState;
	shopView: {
		grid: number;
	};
	slideMenuView: {
		loginMenuIsOpen: boolean;
		cartMenuIsOpen: boolean;
	};
}

export const store = configureStore({
	reducer: {
		cart: cartSlice /*products in cart */,
		shopView:
			shopViewSlice /*state to manage what grid is use on shop screen */,
		slideMenuView: slideMenuSlice /*state to toggle slide menu for login */,
	},
});
