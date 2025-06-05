// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Specify domains for images that Next.js Image component will optimize
    // This is crucial if you use <Image> component with external URLs
    remotePatterns: [
      {
        protocol: 'http', // OpenWeatherMap uses http for icons
        hostname: 'openweathermap.org',
        port: '',
        pathname: '/img/wn/**', // Specific path for weather icons
      },
      {
        protocol: 'https',
        hostname: 'openweathermap.org', // If they start using https for icons too
        port: '',
        pathname: '/img/wn/**',
      },
      // Add other domains if you use images from different sources
    ],
  },
  // Other Next.js configurations can go here
};

export default nextConfig;