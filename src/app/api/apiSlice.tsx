import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { StoreState } from '../store';

let apiUrl;

if (import.meta.env.MODE === 'development') {
  apiUrl = 'http://localhost:3000';
} else {
  apiUrl = 'https://comfortable-wasp-neckerchief.cyclic.app';
}

const baseQuery = fetchBaseQuery({
  baseUrl: apiUrl,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as StoreState).auth;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
const apiSlice = createApi({
  reducerPath: 'api', // optional
  baseQuery,
  tagTypes: ['Products', 'Product', 'UserOrders', 'Order', 'Orders', 'User'],
  endpoints: () => ({}),
});
export default apiSlice;
