import apiSlice from '../api/apiSlice';
import { MessageFormValues } from '../../interface/message-interface';

const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendMessage: builder.mutation<void, MessageFormValues>({
      query: (userMessage) => ({
        url: `/messages`,
        method: 'POST',
        body: {
          ...userMessage,
        },
      }),
      invalidatesTags: [{ type: 'Message', id: 'LIST' }],
    }),
  }),
});
const { useSendMessageMutation } = productsApiSlice;
export default useSendMessageMutation;
