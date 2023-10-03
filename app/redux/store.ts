import { configureStore } from "@reduxjs/toolkit";

import stationReducer from "./slices/station-slice";
import appReducer from "./slices/app-slice";
import { stationApi } from "@/app/redux/services/stationApi";

export const store = configureStore({
  reducer: {
    stationReducer,
    appReducer,
    [stationApi.reducerPath]: stationApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([stationApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
