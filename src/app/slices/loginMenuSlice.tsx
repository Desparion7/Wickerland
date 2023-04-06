import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store';

const loginMenuSlice = createSlice({
	name: 'loginMenuSlice',
	initialState: {
		loginMenuIsOpen: false,
	},
	reducers: {
		toggleLoginMenuView(state, action) {
			state.loginMenuIsOpen = action.payload;
		},
	},
});
export default loginMenuSlice.reducer;

export const { toggleLoginMenuView } = loginMenuSlice.actions;
export const loginMenuView = (state: State) =>
	state.loginMenuView.loginMenuIsOpen;
