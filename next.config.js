/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["imagedelivery.net", "img1.daumcdn.net"],
  },
};

module.exports = nextConfig;
