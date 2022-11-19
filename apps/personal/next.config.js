/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    transpilePackages: ['lodash-es'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
