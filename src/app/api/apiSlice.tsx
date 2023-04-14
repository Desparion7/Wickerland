import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { StoreState } from '../store';
import {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
} from '@reduxjs/toolkit/query';

// https://sangria-hummingbird-kilt.cyclic.app
// http://localhost:3000

const baseQuery = fetchBaseQuery({
	baseUrl: 'https://sangria-hummingbird-kilt.cyclic.app',
	// credentials: 'include',
	// prepareHeaders: (headers, { getState }) => {
	// 	const token = (getState() as StoreState).auth.token;

	// 	if (token) {
	// 		headers.set('authorization', `Bearer ${token}`);
	// 	}
	// 	return headers;
	// },
});
export const apiSlice = createApi({
	reducerPath: 'api', // optional
	baseQuery: baseQuery,
	tagTypes: ['Products'],
	endpoints: (builder) => ({}),
});
