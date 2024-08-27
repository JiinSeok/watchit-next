/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/movies/:id',
  //       destination: '/films/:id',
  //       permanent: true,
  //     },
  //   ];
  // },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/watchit/**',
      },
    ],
  },
};

module.exports = nextConfig;