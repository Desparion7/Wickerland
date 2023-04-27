import apiSlice from '../api/apiSlice';
import { UserLogin } from '../../interface/user-interface';
import { logOut } from './authSlice';

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
        url: '/logout',
        method: 'POST',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logOut());

          dispatch(apiSlice.util.resetApiState());
        } catch (err) {
          //   console.log(err);
        }
      },
    }),
    // refresh: builder.mutation<{ accessToken: string }, void>({
    //   query: () => ({
    //     url: '/auth/refresh',
    //     method: 'GET',
    //   }),
    //   async onQueryStarted(arg, { dispatch, queryFulfilled }) {
    //     try {
    //       const { data } = await queryFulfilled;
    //       // console.log(data);
    //       const { accessToken } = data;
    //       dispatch(setCredentials({ accessToken }));
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   },
    // }),
  }),
});

export const { useLoginMutation, useSendLogoutMutation } = authApiSlice;
