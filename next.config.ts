/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  output: 'export',
  assetPrefix: '',
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'development',
  },
  images: {
    domains: [
      'img.pokemondb.net',
      'pm1.aminoapps.com',
      'www.primecomics.com.co',
    ],
  },
};

module.exports = nextConfig;
