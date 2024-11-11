import { createSelector } from "@reduxjs/toolkit";

export const getAuth = (state: RootState) => state.auth;

export const getAuthUser = createSelector(getAuth, (auth) => {
  return auth.user;
});
