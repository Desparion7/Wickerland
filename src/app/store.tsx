import { configureStore } from '@reduxjs/toolkit';
import shopViewSlice from './slices/shopViewSlice';

export interface State {
	shopView: {
		grid: number;
	};
}

export const store = configureStore({
	reducer: {
		shopView: shopViewSlice,
	},
});
