import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/counterUser';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
