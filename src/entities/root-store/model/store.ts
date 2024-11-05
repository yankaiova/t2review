import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { meetingsApi } from "@/entities/meeting";
import { slotReducer, slotsApi } from "@/entities/slot";
import { usersReducer, usersApi } from "@/entities/user";
import { dayReducer } from "@/entities/calendar";
import { materialsReducer } from "@/entities/material";
import { commentsApi } from "@/entities/comment";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    slot: slotReducer,
    day: dayReducer,
    materials: materialsReducer,
    [slotsApi.reducerPath]: slotsApi.reducer,
    [meetingsApi.reducerPath]: meetingsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      slotsApi.middleware,
      meetingsApi.middleware,
      usersApi.middleware,
      commentsApi.middleware
    ),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
