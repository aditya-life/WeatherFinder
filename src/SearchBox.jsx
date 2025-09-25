import Button from "@mui/material/Button"
import { TextField } from "@mui/material"
import { useState, useEffect } from "react"


export default function SearchBox({ setWeatherInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    let getWeatherInfo = async () => {
        try {
            let respons = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await respons.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMax: jsonResponse.main.temp_max,
                tempMin: jsonResponse.main.temp_min,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            return result;
        } catch (err) {
            throw err;
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    function getUserLocation() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    resolve({ latitude, longitude });
                },
                (error) => {
                    reject(error);
                }
            );
        });
    };

    async function fetchWeatherData(lat, lon) {
        const response = await fetch(`${API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        return {
            city: data.name,
            temp: data.main.temp,
            tempMax: data.main.temp_max,
            tempMin: data.main.temp_min,
            humidity: data.main.humidity,
            feelsLike: data.main.feels_like,
            weather: data.weather[0].description,
        };
    };

    useEffect(() => {
        getUserLocation()
            .then(({ latitude, longitude }) => fetchWeatherData(latitude, longitude))
            .then((weather) => setWeatherInfo(weather))
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            setCity("");
            let newInfo = await getWeatherInfo();
            setWeatherInfo(newInfo);
            setError(false);
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div>
            <h2>Find Out the Weather in Your City</h2>
            <form onSubmit={handleSubmit} >
                <TextField id="outlined-size-small" size="small" label="City Name" variant="outlined" onChange={handleChange} value={city} required />
                &nbsp; <Button variant="contained" type="submit">Submit</Button>
            </form>
            <br />
            {error && <p style={{ color: "red" }}>No such place found!</p>}
            <br />
        </div>

    )
};