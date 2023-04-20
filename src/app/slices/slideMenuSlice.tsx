import { createSlice } from '@reduxjs/toolkit';
import type { State } from '../store';

const slideMenuSlice = createSlice({
  name: 'loginMenuSlice',
  initialState: {
    loginMenuIsOpen: false,
    cartMenuIsOpen: false,
  },
  reducers: {
    toggleLoginMenuView(state, action) {
      return {
        ...state,
        loginMenuIsOpen: action.payload,
      };
    },
    toggleCartMenu(state, action) {
      return {
        ...state,
        cartMenuIsOpen: action.payload,
      };
    },
  },
});
export default slideMenuSlice.reducer;

export const { toggleLoginMenuView, toggleCartMenu } = slideMenuSlice.actions;
export const loginMenuView = (state: State) =>
  state.slideMenuView.loginMenuIsOpen;
export const cartMenuView = (state: State) =>
  state.slideMenuView.cartMenuIsOpen;
