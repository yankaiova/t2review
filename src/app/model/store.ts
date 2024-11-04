import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { meetingsApi } from "@/entities/meeting";
import { slotsReducer, slotsApi } from "@/entities/slot";
import { expertsReducer, usersApi } from "@/entities/user";
import { dayReducer } from "@/entities/calendar";
import { materialsReducer } from "@/entities/material";
import { commentsApi } from "@/entities/comment";

export const store = configureStore({
  reducer: {
    experts: expertsReducer,
    slots: slotsReducer,
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
