import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'cdn.panama.com', // Add your Panama image CDN domain here
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
