/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for production build
  swcMinify: true, // Recommended for faster minification
  images: {
    // Add domains if you're loading images from external sources (e.g., a CDN or CMS)
    // For local images, you generally don't need to specify domains, but if you run into issues,
    // ensure your local paths are correct.
    // domains: ['example.com'], // Example: if you fetch project images from a specific domain 
    formats: ['image/avif', 'image/webp'], // Optimize image formats
    minimumCacheTTL: 60, // seconds
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

module.exports = nextConfig;
