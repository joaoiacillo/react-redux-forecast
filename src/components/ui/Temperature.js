import { useSelector } from "react-redux";
import TemperatureBlock from "./TemperatureBlock";

import MinTemperatureIcon from "../../assets/img/min-temp.png";
import MaxTemperatureIcon from "../../assets/img/max-temp.png";
import ApparentTemperatureIcon from "../../assets/img/apparent-temp.png";

/**
 * Default temperature display.
 */
const Temperature = () => {
    const { min, max, apparent } = useSelector((state) => state.forecast.temperature);

    return (
        <div className="temperature">
            <TemperatureBlock title="Minimum Temperature" value={min} icon={MinTemperatureIcon} />
            <TemperatureBlock title="Maximum Temperature" value={max} icon={MaxTemperatureIcon} />
            <TemperatureBlock title="Apparent Temperature" value={apparent} icon={ApparentTemperatureIcon} />
        </div>
    );
};

export default Temperature;
