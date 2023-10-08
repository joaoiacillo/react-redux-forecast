import { configureStore } from "@reduxjs/toolkit";
import { geolocationReducer } from "./features/geolocation/geolocationSlice";
import { forecastReducer } from "./features/forecast/forecastSlice";

const store = configureStore({
    reducer: {
        geolocation: geolocationReducer,
        forecast: forecastReducer
    }
});

export default store;
