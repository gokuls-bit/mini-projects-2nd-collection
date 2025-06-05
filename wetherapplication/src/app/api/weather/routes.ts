// src/app/api/weather/route.ts
// Handles GET requests to /api/weather

import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { CurrentWeatherData } from '@/types/weather';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get('city');
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  if (!apiKey) {
    console.error('NEXT_PUBLIC_WEATHER_API_KEY is not set in .env.local');
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
  }

  let apiUrl = '';
  if (city) {
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
  } else if (lat && lon) {
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  } else {
    return NextResponse.json({ error: 'City or coordinates (lat, lon) are required' }, { status: 400 });
  }

  try {
    const response = await axios.get<CurrentWeatherData>(apiUrl);
    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error(`Error fetching current weather from OpenWeatherMap for ${city || `${lat},${lon}`}:`, error.response?.data || error.message);
    const errorMessage = error.response?.data?.message || 'Failed to fetch current weather data';
    const statusCode = error.response?.status || 500;
    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}