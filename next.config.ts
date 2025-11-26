import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {}, // Habilita Turbopack (por defecto)
  webpack(config, { dev }) {
    if (dev) {
      config.devtool = false; // Desactiva los source maps en desarrollo
    }
    return config;
  },
};

export default nextConfig;
