import createLogger from "../logger";

const logger = createLogger("models/Forecast");

/**
 * Model for forecast data fetched from the API.
 * 
 * @param {Object} data The forecast api response
 * @returns {{
 *  temperature: {
 *   max: number,
 *   min: number,
 *   apparent: number
 *  }
 * }}
*/
const Forecast = (data) => {
    const model = {
        temperature: {
            max: Math.round(data.daily.temperature_2m_max[0]),
            min: Math.round(data.daily.temperature_2m_min[0]),
            apparent: Math.round(data.daily.apparent_temperature_max[0])
        }
    };

    logger.log("Created model", { model });

    return model;
};

export default Forecast;
