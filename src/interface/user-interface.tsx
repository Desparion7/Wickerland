import { CartProduct } from '../app/slices/cartSlice';
import { WishListProduct } from '../app/slices/wishListSlice';

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
  wishlist: WishListProduct[];
}
export interface ResetResponseType {
  message?: string;
  error?: string;
}
export interface UpdatePasswordType {
  password: string;
  token: string;
}
