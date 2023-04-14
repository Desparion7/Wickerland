export interface Products {
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
export interface GetProductsResponse {
	products: Products[];
	totalPages: number;
}
