import { CartProduct } from '../app/slices/cartSlice';
import { WishListProduct } from '../app/slices/wishListSlice';

export type UserSignUp = {
  email: string;
  password: string;
};
export type UserLogin = {
  email: string;
  password: string;
};

export type UserResponseSignUp = {
  email: string;
};
export type UserResponseLogin = {
  accessToken: string;
  cart: CartProduct[];
  wishlist: WishListProduct[];
};
export type ResetResponseType = {
  message?: string;
  error?: string;
};
export type UpdatePasswordType = {
  password: string;
  token: string;
};
