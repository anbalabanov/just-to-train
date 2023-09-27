import { createSlice } from "@reduxjs/toolkit";

export interface StationState {
    currentStation: {
        id?: number,
        name: string,
        url: string
    };
}

const initialState: StationState = {
    currentStation: {
        name: "",
        url: ""
    },
};

export const stationSlice = createSlice({
    name: "station",
    initialState,
    reducers: {
        setCurrentStationIdState(state, action) {
            state.currentStation.id = action.payload;
        },
    },

});

export const { setCurrentStationIdState } = stationSlice.actions;

export default stationSlice.reducer;