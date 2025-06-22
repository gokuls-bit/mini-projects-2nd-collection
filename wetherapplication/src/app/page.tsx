// src/app/page.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';
import SearchBar from '@/components/SearchBar';
import WeatherCard from '@/components/WeatherCard';
import HourlyForecast from '@/components/HourlyForecast';
import DailyForecast from '@/components/DailyForecast';
import { CurrentWeatherData, WeatherForecastData, ForecastListItem } from '@/types/weather';

export default function Home() {
  const [weatherData, setWeatherData] = useState<CurrentWeatherData | null>(null);
  const [forecastData, setForecastData] = useState<WeatherForecastData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentLocationFetched, setCurrentLocationFetched] = useState(false);

  // Memoize fetch function to prevent re-renders of useEffect
  const fetchWeatherAndForecast = useCallback(async (queryType: 'city' | 'coords', value: string | { lat: number; lon: number }) => {
    setLoading(true);
    setError(null);
    try {
      let weatherUrl = '/api/weather?';
      let lat: number | undefined;
      let lon: number | undefined;

      if (queryType === 'city') {
        weatherUrl += `city=${encodeURIComponent(value as string)}`;
        // For forecast, we'll need coords, so we'll fetch current weather first to get them
        const weatherResponse = await fetch(weatherUrl);
        if (!weatherResponse.ok) {
          const errorData = await weatherResponse.json();
          throw new Error(errorData.error || 'Failed to fetch current weather data');
        }
        const currentData: CurrentWeatherData = await weatherResponse.json();
        setWeatherData(currentData);
        lat = currentData.coord.lat;
        lon = currentData.coord.lon;
      } else {
        const coords = value as { lat: number; lon: number };
        lat = coords.lat;
        lon = coords.lon;
        weatherUrl += `lat=${lat}&lon=${lon}`;

        const weatherResponse = await fetch(weatherUrl);
        if (!weatherResponse.ok) {
          const errorData = await weatherResponse.json();
          throw new Error(errorData.error || 'Failed to fetch current weather data');
        }
        const currentData: CurrentWeatherData = await weatherResponse.json();
        setWeatherData(currentData);
      }

      if (lat && lon) {
        const forecastUrl = `/api/forecast?lat=${lat}&lon=${lon}`;
        const forecastResponse = await fetch(forecastUrl);
        if (!forecastResponse.ok) {
          const errorData = await forecastResponse.json();
          throw new Error(errorData.error || 'Failed to fetch forecast data');
        }
        const forecastData: WeatherForecastData = await forecastResponse.json();
        setForecastData(forecastData);
      }

    } catch (err: any) {
      setError(err.message);
      setWeatherData(null); // Clear previous data on error
      setForecastData(null); // Clear previous data on error
    } finally {
      setLoading(false);
    }
  }, []); // Empty dependency array means it's created once

  const handleSearch = (city: string) => {
    fetchWeatherAndForecast('city', city);
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherAndForecast('coords', { lat: latitude, lon: longitude });
        },
        (err) => {
          setError('Failed to retrieve your location. Please enable location services or search by city.');
          console.error(err);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  };

  useEffect(() => {
    if (!currentLocationFetched) {
      handleGetLocation();
      setCurrentLocationFetched(true);
    }
  }, [currentLocationFetched, handleGetLocation]); // Include handleGetLocation in dependencies

  // Filter forecast data for hourly and daily views
  const now = new Date();
  const hourlyData = forecastData?.list.filter(item => new Date(item.dt * 1000) > now) || [];

  return (
    <div className="min-h-screen flex flex-col items-center p-4" style={{ backgroundColor: 'var(--background-color)' }}>
      <h1 className="text-4xl font-bold text-white mb-8">Weather App</h1>
      <SearchBar onSearch={handleSearch} onGetLocation={handleGetLocation} />

      {loading && <p className="text-gray-300 text-lg mt-4">Loading weather data...</p>}
      {error && <p className="text-red-400 text-lg mt-4">{error}</p>}

      {weatherData && !loading && !error && (
        <div className="mt-8 w-full max-w-lg space-y-6">
          <WeatherCard data={weatherData} />
          {hourlyData.length > 0 && <HourlyForecast hourlyData={hourlyData} />}
          {forecastData && forecastData.list.length > 0 && <DailyForecast dailyData={forecastData.list} />}
        </div>
      )}

      {!weatherData && !loading && !error && (
        <p className="text-gray-300 text-lg mt-8">Search for a city or get your current location's weather.</p>
      )}
    </div>
  );
}