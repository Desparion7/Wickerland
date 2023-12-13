import { createSlice } from '@reduxjs/toolkit';
import type { State } from '../store';

export type AuthState = {
  token: string | null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: { token: null } as AuthState,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload;
      return { ...state, token: accessToken };
    },
    logOut: (state) => {
      return { ...state, token: null };
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const currentToken = (state: State) => state.auth.token;
