import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { meetingsApi, meetingReducer } from "@/entities/meeting";
import { slotReducer, slotsApi } from "@/entities/slot";
import { usersReducer, specialistsApi } from "@/entities/specialist";
import { materialsReducer } from "@/entities/material";
import { commentsApi } from "@/entities/comment";
import { authReducer, authApi, listenerMiddlewareAuth } from "@/entities/auth";
import { teamsApi } from "@/entities/team";
import { filtersApi } from "@/features/filters";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    slot: slotReducer,
    meeting: meetingReducer,
    materials: materialsReducer,
    [authApi.reducerPath]: authApi.reducer,
    [slotsApi.reducerPath]: slotsApi.reducer,
    [meetingsApi.reducerPath]: meetingsApi.reducer,
    [specialistsApi.reducerPath]: specialistsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [teamsApi.reducerPath]: teamsApi.reducer,
    [filtersApi.reducerPath]: filtersApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(
        authApi.middleware,
        slotsApi.middleware,
        meetingsApi.middleware,
        specialistsApi.middleware,
        teamsApi.middleware,
        commentsApi.middleware,
        filtersApi.middleware
      )
      .prepend(listenerMiddlewareAuth.middleware),
});
setupListeners(store.dispatch);
