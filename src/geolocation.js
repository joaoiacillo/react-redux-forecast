import createLogger from "./logger";

const logger = createLogger("geolocation");

const options = {
    enableHighAccuracy: false,
    timeout: 2000,
    maximumAge: 100
};

/**
 * Gets the user geolocation coordinates (latitude and longitude).
 */
const getGeolocation = () => {
    logger.log("Getting user geolocation");

    return new Promise((resolve, reject) => {
        const onSuccess = (pos) => {
            const { latitude, longitude } = pos.coords;
            resolve({
                latitude: latitude.toFixed(2),
                longitude: longitude.toFixed(2)
            });
        };

        const onError = (err) => {
            logger.error("Couldn't get geolocation", { err });
            reject(err);
        };

        navigator.geolocation.getCurrentPosition(
            onSuccess,
            onError,
            options
        );
    });
};

export default getGeolocation;
