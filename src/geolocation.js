const options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 100
};

const onSuccess = (pos, setGeolocation) => {
    const coords = {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude
    };
    setGeolocation(coords);
};

const onError = (err, setGeolocation) => {
    getGeolocation(setGeolocation);
};

/**
 * Gets the user geolocation coordinates (latitude and longitude) and pass them
 * to the callback function `setGeolocation`.
 * 
 * @param {Function} setGeolocation Func to set the geolocation in the state
 */
const getGeolocation = (setGeolocation) => {
    console.log("Getting user geolocation...");
    
    navigator.geolocation.getCurrentPosition(
        (pos) => onSuccess(pos, setGeolocation),
        (err) => onError(err, setGeolocation),
        options
    );
};

export default getGeolocation;
