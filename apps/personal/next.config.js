/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      {
        loader: '@next/font/google',
        options: {
          subsets: ['latin'],
        },
      },
    ],
    transpilePackages: ['@several/hooks'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
