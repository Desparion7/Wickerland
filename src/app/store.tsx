import { configureStore } from '@reduxjs/toolkit';
import shopViewSlice from './slices/shopViewSlice';

export interface State {
	shopView: {
		grid: number;
		cart: boolean;
	};
}

export const store = configureStore({
	reducer: {
		shopView: shopViewSlice,
	},
});
