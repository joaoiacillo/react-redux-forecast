import axios from "axios";
import ApiError from "../error/ApiError";
import OpenMeteoClient from "../client";
import createLogger from "../../logger";

import Forecast from "../../models/Forecast";

const logger = createLogger("api/requests/forecast");

const createUri = (latitude, longitude) => {
    const daily = ["temperature_2m_max", "temperature_2m_min", "apparent_temperature_max"].join(",");
    const params = {
        latitude,
        longitude,
        daily,
        'timezone': 'America%2FSao_Paulo',
        forecast_days: 1
    };

    const paramsString = Object.entries(params).map(([param, value]) => `${param}=${value}`).join("&");
    const uri = "/forecast?" + paramsString;

    return uri;
};

/**
 * Fetches a specific region name in the API.
 * 
 * @param {string} name The region name
 * @param {number} latitude The latitude
 * @param {number} longitude The longitude
 * @returns {Promise<Forecast>} The region geoposition model
 */
const fetchForecast = async (latitude, longitude) => {
    logger.log("Fetching forecast", { latitude, longitude });

    const uri = createUri(latitude, longitude);
    logger.log("URI created", { uri });

    const response = await OpenMeteoClient.get(uri);

    if (response.status < 200 || response.status >= 300) {
        logger.error("Response not successful", { status: response.status } );
        throw new ApiError("Response not successful", response);
    }

    logger.log("Response successful", { response, status: response.status });

    const data = response.data;

    if (data === undefined) {
        throw new ApiError("Unknown geoposition", { geoposition: { latitude, longitude } });
    }

    const model = Forecast(data);
    return model;
};

export default fetchForecast;
