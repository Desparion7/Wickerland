export type Product = {
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
export type ProductData = {
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
};
export type GetProductsResponse = {
  products: Product[];
  totalPages: number;
};
