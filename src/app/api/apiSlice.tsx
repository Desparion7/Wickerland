import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { StoreState } from '../store';
// import {
//   BaseQueryFn,
//   FetchArgs,
//   FetchBaseQueryError,
// } from '@reduxjs/toolkit/query';

// https://comfortable-wasp-neckerchief.cyclic.app
// http://localhost:3000

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://comfortable-wasp-neckerchief.cyclic.app',
  // credentials: 'include',
  // prepareHeaders: (headers, { getState }) => {
  // 	const token = (getState() as StoreState).auth.token;

  // 	if (token) {
  // 		headers.set('authorization', `Bearer ${token}`);
  // 	}
  // 	return headers;
  // },
});
const apiSlice = createApi({
  reducerPath: 'api', // optional
  baseQuery,
  tagTypes: ['Products', 'Product'],
  endpoints: () => ({}),
});
export default apiSlice;
