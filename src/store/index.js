// third-party
import { configureStore } from '@reduxjs/toolkit';

// project import
import { apiSlice } from "../store/reducers/api/apiSlice"
import authReducer from '../store/reducers/auth/authSlice'
import menuReducer from '../store/reducers/menu'
import loaderReducer from '../store/reducers/loader/loaderSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    loader: loaderReducer,
    menu: menuReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
});
