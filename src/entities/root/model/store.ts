import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { meetingsApi, meetingReducer } from "@/entities/meeting";
import { slotReducer, slotsApi } from "@/entities/slot";
import { usersReducer, usersApi } from "@/entities/specialist";
import { materialsReducer } from "@/entities/material";
import { commentsApi } from "@/entities/comment";
import { authReducer, authApi, listenerMiddlewareAuth } from "@/entities/auth";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    slot: slotReducer,
    day: meetingReducer,
    materials: materialsReducer,
    [authApi.reducerPath]: authApi.reducer,
    [slotsApi.reducerPath]: slotsApi.reducer,
    [meetingsApi.reducerPath]: meetingsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(
        authApi.middleware,
        slotsApi.middleware,
        meetingsApi.middleware,
        usersApi.middleware,
        commentsApi.middleware
      )
      .prepend(listenerMiddlewareAuth.middleware),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
