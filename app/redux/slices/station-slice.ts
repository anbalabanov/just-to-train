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
    volume: 50, // save to localhost
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
  },
});

export const { setCurrentStationIdState, setVolumeState } =
  stationSlice.actions;

export default stationSlice.reducer;
