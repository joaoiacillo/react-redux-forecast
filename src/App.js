import getGeolocation from "./geolocation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { geolocationActions } from "./features/geolocation/geolocationSlice";

import Container from "./components/ui/Container";

import "./assets/css/styles.css";

/**
 * App main component.
 * 
 * @author João Iacillo
 */
const App = () => {
    const coords = useSelector((state) => state.geolocation);
    const dispatcher = useDispatch();

    useEffect(() => {
        getGeolocation((coords) => dispatcher(geolocationActions.setCoordinates(coords)));
    }, [ dispatcher ]);

    return (
        <Container>
            <p>Latitude: {coords.latitude}</p>
            <p>Longitude: {coords.longitude}</p>
        </Container>
    );
};

export default App;
