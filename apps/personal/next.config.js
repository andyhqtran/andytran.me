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
    transpilePackages: ['@several/components', '@several/hooks', '@several/primitives'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
