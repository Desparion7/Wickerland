import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import type { RootState } from './slices/cartSlice';
import apiSlice from './api/apiSlice';
import shopViewSlice from './slices/shopViewSlice';
import slideMenuSlice from './slices/slideMenuSlice';
import cartSlice from './slices/cartSlice';
import wishListSlice, { WishListState } from './slices/wishListSlice';
import authSlice, { AuthState } from './slices/authSlice';

export type State = {
  auth: AuthState;
  cart: RootState;
  wishList: WishListState;
  shopView: {
    grid: number;
  };
  slideMenuView: {
    loginMenuIsOpen: boolean;
    cartMenuIsOpen: boolean;
  };
};

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice /* autentication for keep access token */,
    cart: cartSlice /* products in cart */,
    wishList: wishListSlice /* products in wishlist */,
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
