'use client';

import { useEffect, useState } from 'react';
import './WeatherApp.css';

export default function WeatherDashboard() {
  const [city, setCity] = useState('New York'); // Default city
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    setError('');
    setWeather(null);
    if (!city) return setError('Please enter a city');

    try {
      const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      const data = await res.json();

      if (res.ok) {
        setWeather(data);
      } else {
        setError(data.message);
      }
    } catch {
      setError('Failed to fetch weather data');
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="weather-container">
      <div className="weather-card">
        <div className="top-section">
          <div className="search">
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="input"
              placeholder="Enter city"
            />
            <button onClick={fetchWeather} className="button">
              Get Weather
            </button>
          </div>

          {error && <p className="error-text">{error}</p>}

          {weather && (
            <div className="weather-info">
              <h1 className="temperature">{Math.round(weather.main.temp)}°C</h1>
              <p className="description">{weather.weather[0].description}</p>
              <p className="location">{city}, {weather.sys.country}</p>
              <div className="details">
                <p>💨 Wind: {weather.wind.speed} m/s</p>
                <p>💧 Humidity: {weather.main.humidity}%</p>
              </div>
            </div>
          )}
        </div>

        {weather && (
          <div className="icon-section">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt="weather icon"
              className="weather-icon"
            />
            <p className="date">{new Date().toLocaleDateString()}</p>
          </div>
        )}

        <div className="forecast">
          <h2>Hourly Forecast</h2>
          <div className="hourly">
            {[9, 12, 15, 18, 21, 0, 3].map((hour, idx) => (
              <div key={idx} className="hour-block">
                <p>{hour}:00</p>
                <div className="hour-icon">☁️</div>
                <p>{18 + idx}°</p>
              </div>
            ))}
          </div>
        </div>

        <div className="forecast">
          <h2>5-Day Forecast</h2>
          <div className="daily">
            {['Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday'].map((day, idx) => (
              <div key={day} className="day-card">
                <p className="day-name">{day}</p>
                <div className="day-icon">⛈️</div>
                <p>Min: {12 + idx}°C</p>
                <p>Max: {20 + idx}°C</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}