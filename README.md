# Weather App

A simple React weather application that fetches and displays weather data based on the user's location or a searched city name.

## Features

- **Automatic location detection**: When the user allows location access, the app automatically fetches weather data for their current location.
- **City search**: Users can manually search for weather information by entering any city name.
- Displays temperature, humidity, weather description, and more.

## How it works

1. On app load, it requests permission to access the user's location.
2. If permission is granted, it fetches weather data based on latitude and longitude.
3. Users can also search for any city manually, and the app fetches and displays the weather for that city.

## Technologies Used

- React
- OpenWeatherMap API
- Geolocation API (browser)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-app.git
2. Install dependencies:
    npm install
3. Create a .env file in the root with your API key:
    - VITE_API_KEY=your_openweathermap_api_key
    - VITE_API_URL=https://api.openweathermap.org/  data/2.5/weather

Notes

The app requires location permission to fetch weather automatically.

If location access is denied, users can still search for cities manually.

Feel free to customize or let me know if you want it more detailed!

