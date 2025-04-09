/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Keep this for static site generation
  images: {
    unoptimized: true, // Disable Image Optimization API
  },
};

module.exports = nextConfig;