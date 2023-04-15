import { apiSlice } from '../api/apiSlice';
import { GetProductsResponse } from '../../interface/products-interface';
import { ProductsQuery } from '../../interface/products-query-interface';

const productsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getProducts: builder.query<GetProductsResponse, ProductsQuery>({
			query: ({ pageNumber = 1, pageSize = 9 }) => ({
				url: `/products?pageNumber=${pageNumber}&pageSize=${pageSize}`,
				method: 'GET',
			}),
			providesTags: [{ type: 'Products', id: 'LIST' }],
		}),
	}),
});
export const { useGetProductsQuery } = productsApiSlice;