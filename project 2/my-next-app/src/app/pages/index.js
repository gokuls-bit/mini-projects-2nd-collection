import dynamic from 'next/dynamic';
import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Map = dynamic(() => import('../components/Map'), { ssr: false });

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (lat, lon) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
      );
      setWeather(res.data);
    } catch (err) {
      console.error('Error fetching weather:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-indigo-200 flex flex-col items-center p-4">
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-gray-800 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🌍 Click Anywhere to See the Weather
      </motion.h1>
      <Map onMapClick={fetchWeather} />

      {loading && <p className="text-gray-600 mt-4 animate-pulse">Fetching weather...</p>}

      {weather && !loading && (
        <motion.div
          className="mt-6 p-4 bg-white/70 backdrop-blur-md shadow-xl rounded-xl max-w-md text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800">{weather.name}</h2>
          <p className="text-lg">☀ Temp: {weather.main.temp}°C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌬 Wind: {weather.wind.speed} m/s</p>
        </motion.div>
      )}
    </main>
  );
}
