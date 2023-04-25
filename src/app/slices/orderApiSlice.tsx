import apiSlice from '../api/apiSlice';
import { OrderType, OrderResponseType } from '../../interface/order-interface';

const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<OrderResponseType, OrderType>({
      query: (order) => ({
        url: '/orders',
        method: 'POST',
        body: order,
      }),
      invalidatesTags: [{ type: 'Orders', id: 'LIST' }],
    }),
  }),
});

const { useCreateOrderMutation } = orderApiSlice;
export default useCreateOrderMutation;
