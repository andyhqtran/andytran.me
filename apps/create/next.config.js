/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  transpilePackages: ['@several-ui/spinner', '@several/primitives'],
};

module.exports = nextConfig;
