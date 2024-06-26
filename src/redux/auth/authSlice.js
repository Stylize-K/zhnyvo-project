import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./authOperations";

const initialState = {
  isAuthenticated: false,
  user: {
    email: null,
  },
  loading: false,
  error: null,
  token: null,
  refreshToken: null,
  isRefreshing: false,
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
      })
      .addCase(authOperations.login.pending, (state, action) => {
        state.error = action.payload;
        state.loading = true;
      })
      .addCase(authOperations.login.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.isAuthenticated = true;
        state.loading = false;
        state.token = action.payload.accessToken;
        state.refreshedToken = action.payload.refreshToken;
      })
      .addCase(authOperations.login.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(authOperations.getPersonalInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authOperations.getPersonalInfo.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(authOperations.getPersonalInfo.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(authOperations.refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(authOperations.refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isRefreshing = false;
      })
      .addCase(authOperations.refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(authOperations.logOut.fulfilled, (state) => {
        state.user.email = null;
        state.isAuthenticated = false;
        state.token = null;
        state.refreshToken = null;
      });
  },
});

export const authReducer = authSlice.reducer;
