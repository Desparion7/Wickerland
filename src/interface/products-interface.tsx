export interface Product {
	pid: string;
	name: string;
	description: string;
	category: string;
	subcategory: string;
	amount: number;
	price: number;
	parameters: Record<string, unknown>[];
	img: string[];
}
export interface ProductData {
	product: {
		pid: string;
		name: string;
		description: string;
		category: string;
		subcategory: string;
		amount: number;
		price: number;
		parameters: Record<string, unknown>[];
		img: string[];
	};
}
export interface GetProductsResponse {
	products: Product[];
	totalPages: number;
}

