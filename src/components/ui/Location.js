import { useSelector } from "react-redux";

/**
 * Default location display.
 */
const Location = () => {
    const { latitude, longitude } = useSelector((state) => state.geolocation);

    return (
        <div className="location">
            <div>
                <h1>React-Redux-Forecast App</h1>
                <p>Made by <a href="https://github.com/joaoiacillo" target="_blank" rel="noreferrer">@joaoiacillo</a></p>
            </div>
            <div className="coords">
                <h3>Latitude: {latitude}</h3>
                <h3>Longitude: {longitude}</h3>
            </div>
        </div>
    );
};

export default Location;
