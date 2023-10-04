import { createSlice } from "@reduxjs/toolkit";

export interface StationState {
  currentStation: {
    id?: number;
    name: string;
    url: string;
    volume: number;
  };
}

const initialState: StationState = {
  currentStation: {
    name: "",
    url: "",
    volume: 50,
  },
};

export const stationSlice = createSlice({
  name: "station",
  initialState,
  reducers: {
    setCurrentStationIdState(state, action) {
      state.currentStation.id = action.payload;
    },
    setVolumeState(state, action) {
      state.currentStation.volume = action.payload;
    },
    toggleMute(state) {
      const { volume } = state.currentStation;
      state.currentStation.volume = volume === 0 ? 50 : 0;
    },
  },
});

export const { setCurrentStationIdState, setVolumeState, toggleMute } =
  stationSlice.actions;

export default stationSlice.reducer;
