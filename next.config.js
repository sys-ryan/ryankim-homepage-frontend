const { PHASE_DEVELOPMENT_SERVER } = require("next/dist/shared/lib/constants");

/** @type {import('next').NextConfig} */
const nextConfig = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      swcMinify: true,
      images: {
        domains: [
          "img.freepik.com",
          "igstorysize.com",
          "images.unsplash.com",
          "ryan-blog.s3.amazonaws.com",
        ],
      },
      env: {
        backendBaseUrl: "http://localhost:3002/api/v1",
        appBaseUrl: "http://localhost:3000",
      },
    };
  }

  return {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ["ryan-blog.s3.amazonaws.com"],
    },
    env: {
      backendBaseUrl: "http://75.101.228.40/api/v1",
      appBaseUrl: "https://www.ryankim.co.kr",
    },
  };
};

module.exports = nextConfig;
