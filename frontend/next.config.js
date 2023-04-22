/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // distDir: 'dist' // redundant
  images: { unoptimized: true },
};

module.exports = nextConfig;
