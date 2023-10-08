import { createSlice } from "@reduxjs/toolkit";
import createLogger from "../../logger";

const logger = createLogger("features/forecast/forecastSlice");

const initialState = {
    temperature: {
        min: null,
        max: null,
        apparent: null
    }
};

const forecastSlice = createSlice({
    name: "forecast",
    initialState,
    reducers: {
        setTemperature(state, { payload: { temperature } }) {
            logger.log("Setting new temperature", { temperature });
            state.temperature = temperature;
        }
    }
});

export const forecastReducer = forecastSlice.reducer;

export const forecastActions = forecastSlice.actions;

export default forecastSlice;
