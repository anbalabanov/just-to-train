import { createSlice } from "@reduxjs/toolkit";

export interface StationState {
    stationState: boolean;
}

const initialState: StationState = {
    stationState: false,
};

export const stationSlice = createSlice({
    name: "station",
    initialState,
    reducers: {
        setStationState(state, action) {
            state.stationState = action.payload;
        },
    },

});

export const { setStationState } = stationSlice.actions;

export default stationSlice.reducer;