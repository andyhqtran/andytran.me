/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@several-ui/button', '@several-ui/icon-button', '@several-ui/spinner'],
};

module.exports = nextConfig;
