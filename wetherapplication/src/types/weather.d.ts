// src/types/weather.d.ts

// --- Common Interfaces ---
export interface WeatherCondition {
  id: number;
  main: string; // E.g., "Clouds", "Rain"
  description: string; // E.g., "scattered clouds", "light rain"
  icon: string; // E.g., "04d"
}

export interface MainData {
  temp: number; // Temperature in Celsius
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number; // hPa
  humidity: number; // %
  sea_level?: number;
  grnd_level?: number;
}

export interface WindData {
  speed: number; // m/s
  deg: number; // Wind direction, degrees (meteorological)
  gust?: number; // m/s (optional)
}

export interface CloudsData {
  all: number; // Cloudiness, %
}

// Precipitation volume for last 1 hour, 3 hours (mm)
export interface PrecipitationVolume {
  "1h"?: number;
  "3h"?: number;
}

export interface SystemData {
  type: number;
  id: number;
  message?: string; // Optional for some responses
  country: string; // Country code (e.g., "US", "IN")
  sunrise: number; // Unix timestamp
  sunset: number; // Unix timestamp
}

export interface Coordinates {
  lon: number;
  lat: number;
}

// --- Current Weather Data ---
export interface CurrentWeatherData {
  coord: Coordinates;
  weather: WeatherCondition[];
  base: string; // Internal parameter
  main: MainData;
  visibility: number; // meters
  wind: WindData;
  clouds: CloudsData;
  rain?: PrecipitationVolume; // Optional: Present only if there is rain
  snow?: PrecipitationVolume; // Optional: Present only if there is snow
  dt: number; // Time of data calculation, Unix, UTC
  sys: SystemData;
  timezone: number; // Shift in seconds from UTC
  id: number; // City ID
  name: string; // City name
  cod: number; // Internal parameter
}

// --- Forecast Data (for 5-day / 3-hour forecast) ---
export interface ForecastListItem {
  dt: number; // Time of data forecasted, Unix, UTC
  main: MainData;
  weather: WeatherCondition[];
  clouds: CloudsData;
  wind: WindData;
  visibility: number; // meters
  pop: number; // Probability of precipitation (0 to 1)
  rain?: PrecipitationVolume; // Optional
  snow?: PrecipitationVolume; // Optional
  sys: {
    pod: 'd' | 'n'; // Part of the day (d = day, n = night)
  };
  dt_txt: string; // Date in text format (e.g., "2024-06-06 12:00:00")
}

export interface CityForecastData {
  id: number;
  name: string;
  coord: Coordinates;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface WeatherForecastData {
  cod: string; // Internal parameter
  message: number; // Internal parameter
  cnt: number; // Number of timestamps returned in the forecast
  list: ForecastListItem[];
  city: CityForecastData;
}