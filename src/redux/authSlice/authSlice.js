import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth:
      localStorage.getItem('auth') && JSON.parse(localStorage.getItem('auth'))
        ? JSON.parse(localStorage.getItem('auth'))
        : sessionStorage.getItem('auth')
        ? JSON.parse(sessionStorage.getItem('auth'))
        : null,
    isRemember: localStorage.getItem('isRemember')
      ? JSON.parse(localStorage.getItem('isRemember'))
      : false,
    name: 'User',
  },
  reducers: {
    setAuth(state, { payload }) {
      state.auth = payload;
    },
    setIsRemember(state, { payload }) {
      state.isRemember = payload;
    },
    setName(state, { payload }) {
      state.name = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth, setIsRemember, setName } = authSlice.actions;

export default authSlice.reducer;
