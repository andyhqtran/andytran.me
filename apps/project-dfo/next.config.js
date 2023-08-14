/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img-api.dfoneople.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}',
      preventFullImport: true,
    },
    'lodash-es': {
      transform: 'lodash-es/{{member}}',
      preventFullImport: true,
    },
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/ranking',
        destination: '/rankings',
        permanent: true,
      },
      {
        source: '/ranking/:path*',
        destination: '/rankings/:path*',
        permanent: true,
      },
    ];
  },
  transpilePackages: [
    'lodash-es',
    '@several-ui/badge',
    '@several-ui/banner',
    '@several-ui/button',
    '@several-ui/collapsible-card',
    '@several-ui/dialog',
    '@several-ui/icon-button',
    '@several-ui/progress',
    '@several-ui/separator',
    '@several-ui/spinner',
    '@several-ui/tooltip',
    '@several-ui/visually-hidden',
  ],
};

module.exports = nextConfig;
