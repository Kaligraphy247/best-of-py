/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // output: "export",
  // distDir: 'dist' // redundant
  images: { unoptimized: true },
};

module.exports = nextConfig;
