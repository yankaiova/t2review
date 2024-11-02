import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import recordReducer from "@/entities/record/model/slice";
import dayReducer from "@/entities/calendar/model/slice";
export const store = configureStore({
  reducer: {
    record: recordReducer,
    day: dayReducer,
    // [slotsApi.reducerPath]: slotsApi.reducer,
    // history: historyReducer,
    // [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // .concat(slotsApi.middleware),
  //   .prepend(
  //     listenerMiddlewareHistory.middleware,
  //     listenerMiddlewareFavorites.middleware
  //   ),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
