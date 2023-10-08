import Swal from "sweetalert2";
import getGeolocation from "./geolocation";
import fetchForecast from "./api/requests/forecast";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { geolocationActions } from "./features/geolocation/geolocationSlice";
import { forecastActions } from "./features/forecast/forecastSlice";

import Container from "./components/ui/Container";
import Temperature from "./components/ui/Temperature";
import Location from "./components/ui/Location";

import "./assets/css/styles.css";

/**
 * App main component.
 * 
 * @author João Iacillo
 */
const App = () => {
    const dispatcher = useDispatch();

    useEffect(() => {
        getGeolocation()
            .then((geolocation) => {
                dispatcher(geolocationActions.setCoordinates(geolocation));
                
                fetchForecast(geolocation.latitude, geolocation.longitude)
                    .then((forecast) => {
                        dispatcher(forecastActions.setTemperature(forecast));
                    });
                    
            })
            .catch((err) => {
                Swal.fire({
                    title: 'Error on obtaining the geoposition',
                    text: `[Error Code ${err.code}] ${err.message}`,
                    icon: 'error',
                    showConfirmButton: true,
                    confirmButtonText: "Try Again",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: true
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload();
                    }
                });
            });
    }, [ dispatcher ]);

    return (
        <Container>
            <Location />
            <Temperature />
        </Container>
    );
};

export default App;
