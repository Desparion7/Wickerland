import { CartProduct } from '../app/slices/cartSlice';

export type OrderType = {
  name: string;
  surname: string;
  companyName?: string;
  street: string;
  postcode: string;
  city: string;
  phone: string;
  email: string;
  message?: string;
  paymentMethod: string;
  deliveryMethod: string;
  price: number;
  products: CartProduct[];
};
export type OrderResponseType = {
  _id: string;
  name: string;
  surname: string;
  companyName?: string;
  street: string;
  postcode: string;
  city: string;
  phone: string;
  email: string;
  message?: string;
  paymentMethod: string;
  deliveryMethod: string;
  price: number;
  paid: boolean;
  date: Date;
  products: CartProduct[];
  error?: string;
};
export type OrderResponseTypeWithPage = {
  orders: OrderResponseType[];
  totalPages: number;
};
