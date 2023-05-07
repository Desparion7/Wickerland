import apiSlice from '../api/apiSlice';
import { UserSignUp, UserResponseSignUp } from '../../interface/user-interface';
import { CartProduct } from './cartSlice';
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
  }),
});

export const { useSignUpMutation, useUpdateUserCartMutation } = usersApiSlice;
