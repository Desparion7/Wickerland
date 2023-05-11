// import {
//   BaseQueryFn,
//   FetchArgs,
//   FetchBaseQueryError,
// } from '@reduxjs/toolkit/query';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { StoreState } from '../store';

// https://comfortable-wasp-neckerchief.cyclic.app
// http://localhost:3000

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://comfortable-wasp-neckerchief.cyclic.app',
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
  tagTypes: ['Products', 'Product', 'Order', 'Orders', 'User'],
  endpoints: () => ({}),
});
export default apiSlice;
