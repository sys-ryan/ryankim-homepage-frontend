/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["img.freepik.com", "igstorysize.com", "images.unsplash.com"],
  },
  env: {
    backendBaseUrl: "http://localhost:3002/api/v1",
  },
};

module.exports = nextConfig;
