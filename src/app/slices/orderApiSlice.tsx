import apiSlice from '../api/apiSlice';
import {
  OrderType,
  OrderResponseType,
  OrderResponseTypeWithPage,
} from '../../interface/order-interface';

const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserOrders: builder.query<
      OrderResponseTypeWithPage,
      { page: string | null }
    >({
      query: ({ page = '1' }) => ({
        url: `/orders/${page}`,
        method: 'GET',
      }),
      providesTags: [{ type: 'Orders', id: 'LIST' }],
    }),
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
        url: `/orders/order/${id}`,
        method: 'GET',
      }),
      providesTags: [{ type: 'Order', id: 'LIST' }],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetSingleOrderQuery,
  useGetUserOrdersQuery,
} = orderApiSlice;
