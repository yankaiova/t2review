import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import dayReducer from "../../entities/slot/model/slice";
export const store = configureStore({
  reducer: {
    day: dayReducer,
    // history: historyReducer,
    // [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  //   .concat(productApi.middleware)
  //   .prepend(
  //     listenerMiddlewareHistory.middleware,
  //     listenerMiddlewareFavorites.middleware
  //   ),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
