import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { meetingsApi, meetingSlice } from "@/entities/meeting";
import { slotSlice, slotsApi } from "@/entities/slot";
import { usersSlice, specialistsApi } from "@/entities/specialist";
import { commentsApi, commentSlice } from "@/entities/comment";
import { authSlice, authApi, listenerMiddlewareAuth } from "@/entities/auth";
import { teamsApi } from "@/features/add-users-meeting";
import { filtersApi } from "@/features/filters";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    users: usersSlice.reducer,
    slot: slotSlice.reducer,
    meeting: meetingSlice.reducer,
    comment: commentSlice.reducer,
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
