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
    getSingleOrder: builder.query<
      OrderResponseType,
      { id: string | undefined }
    >({
      query: ({ id }) => ({
        url: `/orders/${id}`,
        method: 'GET',
      }),
      providesTags: [{ type: 'Order', id: 'LIST' }],
    }),
    getUserOrders: builder.query<OrderType[], void>({
      query: () => ({
        url: '/orders',
        method: 'GET',
      }),
      providesTags: [{ type: 'UserOrders', id: 'LIST' }],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetSingleOrderQuery,
  useGetUserOrdersQuery,
} = orderApiSlice;
