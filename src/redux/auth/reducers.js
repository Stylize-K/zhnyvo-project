export const userRegistrationSuccessReducer = (state, action) => {
  state.user = action.payload.user;
};
