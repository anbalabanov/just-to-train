import { createSlice } from "@reduxjs/toolkit";
import { radioList } from "@/app/radio";

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
    setCurrentStationIdState(state, { payload: id }) {
      state.currentStation.id = id;
      const { name = "", url = "" } =
        radioList.find((station) => station.id === id) ?? {};
      state.currentStation.name = name;
      state.currentStation.url = url;
    },
    setVolumeState(state, action) {
      state.currentStation.volume = action.payload;
    },
  },
});

export const { setCurrentStationIdState, setVolumeState } =
  stationSlice.actions;

export default stationSlice.reducer;
