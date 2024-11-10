import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/entities/root";

export const getAuth = (state: RootState) => state.auth;

export const getAuthUser = createSelector(getAuth, (auth) => {
  return auth.user;
});
