import { createSlice } from "@reduxjs/toolkit";
import createLogger from "../../logger";

const logger = createLogger("features/geolocation/geolocationSlice");

const initialState = {
    latitude: null,
    longitude: null,
};

const geolocationSlice = createSlice({
    name: "geolocation",
    initialState,
    reducers: {
        setCoordinates(state, { payload: { latitude, longitude } }) {
            logger.log("Setting new coordinates", { latitude, longitude });
            state.latitude = latitude;
            state.longitude = longitude;
        }
    }
});

export const geolocationReducer = geolocationSlice.reducer;

export const geolocationActions = geolocationSlice.actions;

export default geolocationSlice;
