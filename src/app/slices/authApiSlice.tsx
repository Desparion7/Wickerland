import apiSlice from '../api/apiSlice';
import { UserLogin } from '../../interface/user-interface';
import { logOut, setCredentials } from './authSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<{ accessToken: string }, UserLogin>({
      query: (data) => ({
        url: '/users/login',
        method: 'POST',
        body: { ...data },
      }),
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
