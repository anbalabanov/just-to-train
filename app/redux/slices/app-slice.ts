import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
  app: {
    isDarkTheme: boolean;
    land: "RU" | "EN";
  };
}

const initialState: AppState = {
  app: {
    isDarkTheme: true,
    land: "RU",
  },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleThemeMode(state) {
      state.app.isDarkTheme = !state.app.isDarkTheme;
    },
    setCurrentLang(state, action) {
      state.app.land = action.payload;
    },
  },
});

export const { toggleThemeMode, setCurrentLang } = appSlice.actions;

export default appSlice.reducer;
