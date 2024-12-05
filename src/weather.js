// Weather.js
import React, { useState, useEffect } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("New York"); // Default city

  // Replace with your OpenWeatherMap API key
  const API_KEY = "664311333033f9dadb20efd07bca7d7e";

  useEffect(() => {
    // Fetch weather data
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div>
      <h2>Weather Forecast</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      {weatherData ? (
        <div>
          <h3>{weatherData.name}</h3>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;
