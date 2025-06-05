// src/components/HourlyForecast.tsx
import React from 'react';
import { ForecastListItem } from '@/types/weather';

interface HourlyForecastProps {
  hourlyData: ForecastListItem[];
}

const HourlyForecast: React.FC<HourlyForecastProps> = ({ hourlyData }) => {
  // Take only the next 8-10 entries for a concise hourly view
  const displayData = hourlyData.slice(0, 8);

  return (
    <div className="glass-card p-4 rounded-[20px] w-full overflow-x-auto mt-6">
      <h3 className="text-lg font-semibold text-gray-200 mb-4">Today</h3>
      <div className="flex space-x-4 pb-2"> {/* pb-2 for scrollbar */}
        {displayData.map((item) => {
          const time = new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          const iconUrl = `http://openweathermap.org/img/w/${item.weather[0]?.icon}.png`;
          const temperature = Math.round(item.main.temp);

          return (
            <div key={item.dt} className="flex-shrink-0 text-center w-20">
              <p className="text-sm text-gray-300 mb-1">{time}</p>
              <img src={iconUrl} alt={item.weather[0]?.description} className="w-12 h-12 mx-auto" />
              <p className="text-md font-medium text-white mt-1">{temperature}°</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HourlyForecast;