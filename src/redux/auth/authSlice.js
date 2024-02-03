import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./authOperations";
// import authOperations from "./operations.js";
authOperations;
const initialState = {
  isAuthenticated: false,
  user: {
    email: null,
  },
  loading: false,
  error: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authOperations.registration.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authOperations.registration.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(authOperations.registration.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
