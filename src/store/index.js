// third-party
import { configureStore } from '@reduxjs/toolkit';

// project import
import { apiSlice } from "../store/reducers/api/apiSlice"
import authReducer from '../store/reducers/auth/authSlice'
import menuReducer from '../store/reducers/menu'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    menu: menuReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
});
