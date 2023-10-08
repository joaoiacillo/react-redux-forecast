/**
 * Model for geoposition data fetched from the API.
 * 
 * @param {Object} data The geoposition api response
 * @returns {{
 *  latitude: number,
 *  longitude: number,
 *  city: string,
 *  country: string
 * }}
 */
const Geoposition = (data) => {
    return {
        latitude: data.latitude,
        longitude: data.longitude,
        city: data.name,
        country: data.country
    };
};

export default Geoposition;
