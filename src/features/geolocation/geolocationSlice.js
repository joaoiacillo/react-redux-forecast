import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    latitude: null,
    longitude: null,
};

const geolocationSlice = createSlice({
    name: "geolocation",
    initialState,
    reducers: {
        setCoordinates(state, { payload }) {
            state.latitude = payload.latitude;
            state.longitude = payload.longitude;
        }
    }
});

export const geolocationReducer = geolocationSlice.reducer;

export const geolocationActions = geolocationSlice.actions;

export default geolocationSlice;
