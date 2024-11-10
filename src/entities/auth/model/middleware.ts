import { createListenerMiddleware } from "@reduxjs/toolkit";
import { login, logout } from "./slice";
import { saveUser, cleanUser } from "@/shared/lib/helpers";

export const listenerMiddlewareAuth = createListenerMiddleware();

listenerMiddlewareAuth.startListening({
  actionCreator: login,
  effect: async (action) => {
    saveUser(action.payload);
  },
});
listenerMiddlewareAuth.startListening({
  actionCreator: logout,
  effect: async () => {
    cleanUser();
  },
});
