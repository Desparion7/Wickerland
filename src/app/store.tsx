import { configureStore } from '@reduxjs/toolkit';
import shopViewSlice from './slices/shopViewSlice';
import loginMenuSlice from './slices/loginMenuSlice';

export interface State {
	shopView: {
		grid: number;
		cart: boolean;
	};
	loginMenuView: {
		loginMenuIsOpen: boolean;
	};
}

export const store = configureStore({
	reducer: {
		shopView: shopViewSlice,
		loginMenuView: loginMenuSlice,
	},
});
