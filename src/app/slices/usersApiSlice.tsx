import apiSlice from '../api/apiSlice';
import {
  UserSignUp,
  UserResponseSignUp,
  ResetResponseType,
  UpdatePasswordType,
} from '../../interface/user-interface';
import { CartProduct } from './cartSlice';
import { WishListProduct } from './wishListSlice';
import { FormValues } from '../../interface/address-interface';
import { store } from '../store';

const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<UserResponseSignUp, UserSignUp>({
      query: ({ email, password }) => ({
        url: '/users/signup',
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
      invalidatesTags: [{ type: 'User', id: 'LIST' }],
    }),
    resetPassword: builder.mutation<ResetResponseType, { email: string }>({
      query: ({ email }) => ({
        url: '/users/reset',
        method: 'POST',
        body: { email },
      }),
    }),
    createNewPassword: builder.mutation<ResetResponseType, UpdatePasswordType>({
      query: ({ password, token }) => ({
        url: '/users/reset',
        method: 'PATCH',
        body: {
          password,
          token,
        },
      }),
    }),
    getUserAddress: builder.query<FormValues, void>({
      query: () => ({
        url: '/users/address',
        method: 'GET',
      }),
      providesTags: [{ type: 'User', id: 'LIST' }],
    }),
    updateUserAddress: builder.mutation<FormValues, FormValues>({
      query: (address) => ({
        url: '/users/address',
        method: 'PATCH',
        body: {
          ...address,
        },
      }),
      invalidatesTags: [{ type: 'User', id: 'LIST' }],
    }),
    updateUserCart: builder.mutation<CartProduct[], CartProduct[]>({
      query: (cart) => ({
        url: '/users/cart',
        method: 'PATCH',
        body: {
          cart,
        },
      }),
      async onQueryStarted() {
        localStorage.setItem(
          'cartItems',
          JSON.stringify(store.getState().cart)
        );
      },
      invalidatesTags: [{ type: 'User', id: 'LIST' }],
    }),
    updateUserWishList: builder.mutation<WishListProduct[], WishListProduct[]>({
      query: (wishlist) => ({
        url: '/users/wishlist',
        method: 'PATCH',
        body: {
          wishlist,
        },
      }),
      async onQueryStarted() {
        localStorage.setItem(
          'wishListItems',
          JSON.stringify(store.getState().wishList)
        );
      },
      invalidatesTags: [{ type: 'User', id: 'LIST' }],
    }),
  }),
});

export const {
  useSignUpMutation,
  useResetPasswordMutation,
  useGetUserAddressQuery,
  useLazyGetUserAddressQuery,
  useUpdateUserAddressMutation,
  useUpdateUserCartMutation,
  useUpdateUserWishListMutation,
  useCreateNewPasswordMutation,
} = usersApiSlice;
