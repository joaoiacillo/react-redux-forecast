import axios from "axios";

const OpenMeteoClient = axios.create({
    baseURL: "https://api.open-meteo.com/v1/",
    timeout: 2000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default OpenMeteoClient;
