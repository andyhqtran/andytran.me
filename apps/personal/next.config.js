/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@several/hooks",
    "@several/components",
    "@several/primitives",
  ],
};

module.exports = nextConfig;
