import { CartProduct } from '../app/slices/cartSlice';

export interface OrderType {
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
}
