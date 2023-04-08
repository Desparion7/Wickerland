import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store';

const slideMenuSlice = createSlice({
	name: 'loginMenuSlice',
	initialState: {
		loginMenuIsOpen: false,
		cartMenuIsOpen: false,
	},
	reducers: {
		toggleLoginMenuView(state, action) {
			state.loginMenuIsOpen = action.payload;
		},
		toggleCartMenu(state, action) {
			state.cartMenuIsOpen = action.payload;
		},
	},
});
export default slideMenuSlice.reducer;

export const { toggleLoginMenuView, toggleCartMenu } = slideMenuSlice.actions;
export const loginMenuView = (state: State) =>
	state.slideMenuView.loginMenuIsOpen;
export const cartMenuView = (state: State) =>
	state.slideMenuView.cartMenuIsOpen;
