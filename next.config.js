const { PHASE_DEVELOPMENT_SERVER } = require("next/dist/shared/lib/constants");

/** @type {import('next').NextConfig} */
const nextConfig = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      images: {
        domains: [
          "img.freepik.com",
          "igstorysize.com",
          "images.unsplash.com",
          "ryan-blog.s3.amazonaws.com",
        ],
      },

      reactStrictMode: true,
      swcMinify: true,

      env: {
        backendBaseUrl: "http://localhost:8080/api/v1",
        appBaseUrl: "http://localhost:3000",
      },
    };
  }

  return {
    images: {
      domains: ["ryan-blog.s3.amazonaws.com"],
    },
    reactStrictMode: true,
    swcMinify: true,
    env: {
      backendBaseUrl: "http://75.101.228.40/api/v1",
      appBaseUrl: "https://www.ryankim.co.kr",
    },
  };
};

module.exports = nextConfig;
