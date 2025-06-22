// src/utils/weatherUtils.ts

/**
 * Generates the URL for OpenWeatherMap weather icons.
 * @param iconCode The icon code from the OpenWeatherMap API.
 * @param size Optional: '2x' or '4x' for larger icons. Defaults to '1x'.
 * @returns The URL for the weather icon.
 */
export const getWeatherIconUrl = (iconCode: string, size: '2x' | '4x' | '1x' = '2x'): string => {
  if (!iconCode) return '';
  return `https://openweathermap.org/img/wn/${iconCode}@${size}.png`;
};

/**
 * Formats precipitation amount, showing 0 if null/undefined.
 * @param amount The precipitation amount in mm.
 * @returns Formatted string with 'mm'.
 */
export const formatPrecipitation = (amount: number | undefined | null): string => {
  return `${(amount || 0).toFixed(1)} mm`;
};

/**
 * Converts a Unix timestamp to a readable time string.
 * @param timestamp The Unix timestamp.
 * @returns Time string (e.g., "05:00 PM").
 */
export const formatTime = (timestamp: number): string => {
  return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
};

/**
 * Converts a Unix timestamp to a readable day of the week.
 * @param timestamp The Unix timestamp.
 * @returns Day of the week (e.g., "Mon").
 */
export const formatDayOfWeek = (timestamp: number): string => {
  return new Date(timestamp * 1000).toLocaleDateString([], { weekday: 'short' });
};

/**
 * Capitalizes the first letter of a string.
 * @param text The input string.
 * @returns The string with the first letter capitalized.
 */
export const capitalizeFirstLetter = (text: string): string => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
};