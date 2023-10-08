const TemperatureBlock = ({ title, value, icon }) => {
    return (
        <div className="temperature-block">
            <img src={icon} alt="temperature icon" />
            <h2>{title}</h2>
            { value ? <p>{value}ºC</p> : <p>Loading...</p> }
        </div>
    );
};

export default TemperatureBlock;
