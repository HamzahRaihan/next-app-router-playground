/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'static.nike.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
