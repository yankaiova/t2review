import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { meetingsApi, meetingSlice } from "@/entities/meeting";
import { slotSlice, slotsApi } from "@/entities/slot";
import { usersSlice, specialistsApi } from "@/entities/specialist";
import { commentsApi } from "@/entities/comment";
import { authSlice, authApi, listenerMiddlewareAuth } from "@/entities/auth";
import { teamsApi } from "@/features/add-team-meeting";
import { materialsApi, materialSlice } from "@/entities/material";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    users: usersSlice.reducer,
    slot: slotSlice.reducer,
    meeting: meetingSlice.reducer,
    material: materialSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [slotsApi.reducerPath]: slotsApi.reducer,
    [meetingsApi.reducerPath]: meetingsApi.reducer,
    [materialsApi.reducerPath]: materialsApi.reducer,
    [specialistsApi.reducerPath]: specialistsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [teamsApi.reducerPath]: teamsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(
        authApi.middleware,
        slotsApi.middleware,
        meetingsApi.middleware,
        specialistsApi.middleware,
        materialsApi.middleware,
        teamsApi.middleware,
        commentsApi.middleware
      )
      .prepend(listenerMiddlewareAuth.middleware),
});
setupListeners(store.dispatch);
