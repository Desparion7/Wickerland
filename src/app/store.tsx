import { configureStore } from '@reduxjs/toolkit';
import { RootState } from './slices/cartSlice';
import { apiSlice } from './api/apiSlice';
import shopViewSlice from './slices/shopViewSlice';
import slideMenuSlice from './slices/slideMenuSlice';
import cartSlice from './slices/cartSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

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
		[apiSlice.reducerPath]: apiSlice.reducer,
		cart: cartSlice /*products in cart */,
		shopView:
			shopViewSlice /*state to manage what grid is use on shop screen */,
		slideMenuView: slideMenuSlice /*state to toggle slide menu for login */,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: false,
});
setupListeners(store.dispatch);
export type StoreState = ReturnType<typeof store.getState>;
