import apiSlice from '../api/apiSlice';
import { UserLogin, UserResponseLogin } from '../../interface/user-interface';
import { logOut, setCredentials } from './authSlice';
import { updateCart, emptyCart } from './cartSlice';
import { updateWishList, emptyWishList } from './wishListSlice';
import { store } from '../store';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<UserResponseLogin, UserLogin>({
      query: (data) => ({
        url: '/users/login',
        method: 'POST',
        body: { ...data },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          // update cart and wishlist from backend state
          const { data } = await queryFulfilled;
          const { cart, wishlist } = data;
          dispatch(updateCart(cart));
          dispatch(updateWishList(wishlist));
          localStorage.setItem(
            'cartItems',
            JSON.stringify(store.getState().cart)
          );
          localStorage.setItem(
            'wishListItems',
            JSON.stringify(store.getState().wishList)
          );
        } catch (err) {
          //   console.log(err);
        }
      },
    }),
    sendLogout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          // clean token
          dispatch(logOut());
          // clean cart and wishlist local sotrage
          dispatch(emptyCart());
          dispatch(emptyWishList());
          localStorage.setItem(
            'cartItems',
            JSON.stringify(store.getState().cart)
          );
          localStorage.setItem(
            'wishListItems',
            JSON.stringify(store.getState().wishList)
          );
          // reset user state
          dispatch(apiSlice.util.invalidateTags(['User']));
        } catch (err) {
          //   console.log(err);
        }
      },
    }),
    refresh: builder.mutation<{ accessToken: string }, void>({
      query: () => ({
        url: '/users/refresh',
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          // console.log(data);
          const { accessToken } = data;
          dispatch(setCredentials({ accessToken }));
        } catch (err) {
          // console.log(err);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useSendLogoutMutation, useRefreshMutation } =
  authApiSlice;
