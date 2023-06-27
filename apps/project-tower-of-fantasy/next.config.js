/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['@several/hooks'],
};

module.exports = nextConfig;
