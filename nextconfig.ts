/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GNEWS_API_KEY: process.env.GNEWS_API_KEY,
  },
};

module.exports = nextConfig;
