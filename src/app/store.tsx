import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import type { RootState } from './slices/cartSlice';
import apiSlice from './api/apiSlice';
import shopViewSlice from './slices/shopViewSlice';
import slideMenuSlice from './slices/slideMenuSlice';
import cartSlice from './slices/cartSlice';
import whishListSlice, { WhishListState } from './slices/whishListSlice';

export interface State {
  cart: RootState;
  whishList: WhishListState;
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
    cart: cartSlice /* products in cart */,
    whishList: whishListSlice /* products in whishlist */,
    shopView:
      shopViewSlice /* state to manage what grid is use on shop screen */,
    slideMenuView: slideMenuSlice /* state to toggle slide menu for login */,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: false,
});
setupListeners(store.dispatch);
export type StoreState = ReturnType<typeof store.getState>;
