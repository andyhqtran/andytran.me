/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@several-ui/badge',
    '@several-ui/button',
    '@several-ui/dialog',
    '@several-ui/icon-button',
    '@several-ui/spinner',
    '@several-ui/tooltip',
  ],
};

module.exports = nextConfig;
