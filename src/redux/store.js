import { configureStore } from '@reduxjs/toolkit';
import auth from './authSlice/authSlice';

export const store = configureStore({
  reducer: {
    auth,
  },
});
