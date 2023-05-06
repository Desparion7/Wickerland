import { CartProduct } from '../app/slices/cartSlice';

export interface UserSignUp {
  email: string;
  password: string;
}
export interface UserLogin {
  email: string;
  password: string;
}

export interface UserResponseSignUp {
  email: string;
}
export interface UserResponseLogin {
  accessToken: string;
  cart: CartProduct[];
}
