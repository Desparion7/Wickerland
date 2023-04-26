import apiSlice from '../api/apiSlice';
import { UserSignUp, UserResponseSignUp } from '../../interface/user-interface';

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
  }),
});

const { useSignUpMutation } = usersApiSlice;
export default useSignUpMutation;
