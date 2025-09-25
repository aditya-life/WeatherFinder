import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Noida",
        feelsLike: 20.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <>
            <SearchBox setWeatherInfo={setWeatherInfo} />
            <InfoBox weatherInfo={weatherInfo} />
        </>
    )

}