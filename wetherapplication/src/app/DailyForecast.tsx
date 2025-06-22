// src/components/DailyForecast.tsx
import React from 'react';
import { ForecastListItem } from '@/types/weather';

interface DailyForecastProps {
  dailyData: ForecastListItem[];
}

const DailyForecast: React.FC<DailyForecastProps> = ({ dailyData }) => {
  // Filter to get one entry per day (e.g., around noon for max/min temps)
  const dailyAggregatedData: { [key: string]: ForecastListItem } = {};
  dailyData.forEach(item => {
    const date = new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    // Take the data point around noon for each day (e.g., 12 PM - 3 PM)
    const hour = new Date(item.dt * 1000).getHours();
    if (!dailyAggregatedData[date] || (hour >= 12 && hour <= 15)) { // Prioritize noon data
        dailyAggregatedData[date] = item;
    }
  });

  const displayData = Object.values(dailyAggregatedData).slice(1, 8); // Skip today, show next 7 days

  return (
    <div className="glass-card p-4 rounded-[20px] w-full mt-6">
      <h3 className="text-lg font-semibold text-gray-200 mb-4">7 Day Forecast</h3>
      <div className="space-y-4">
        {displayData.map((item) => {
          const dayName = new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });
          const iconUrl = `http://openweathermap.org/img/w/${item.weather[0]?.icon}.png`;
          const maxTemp = Math.round(item.main.temp_max);
          const minTemp = Math.round(item.main.temp_min);

          return (
            <div key={item.dt} className="flex items-center justify-between py-2 border-b border-gray-700 last:border-b-0">
              <p className="text-md font-medium w-1/4">{dayName}</p>
              <img src={iconUrl} alt={item.weather[0]?.description} className="w-10 h-10" />
              <div className="flex items-center space-x-2 w-1/4 justify-end">
                <p className="text-md font-semibold text-white">{maxTemp}°</p>
                <p className="text-md text-gray-400">{minTemp}°</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailyForecast;