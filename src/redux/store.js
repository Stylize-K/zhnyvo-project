import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./auth/authSlice";

// const loadTokenFromLocalStorage = () => {
//   try {
//     const token = localStorage.getItem("accessToken");
//     if (token) {
//       return token;
//     }
//   } catch (error) {
//     console.error("Error loading token from local storage:", error);
//   }

//   // If token doesn't exist or error occurs, return null
//   return null;
// };

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  // preloadedState: {
  //   // Load token from local storage and set it in the initial state
  //   auth: {
  //     token: loadTokenFromLocalStorage(),
  //   },
  // },
});
