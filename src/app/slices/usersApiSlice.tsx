import apiSlice from '../api/apiSlice';
import { UserSignUp } from '../../interface/user-interface';

const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<UserSignUp, UserSignUp>({
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
  }),
});

export const { useSignUpMutation } = usersApiSlice;
