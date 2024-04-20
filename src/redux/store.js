import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./auth/authSlice";
import { productsReducer } from "./products/productsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
  },
});
