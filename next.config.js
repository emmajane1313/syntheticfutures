/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "f3manifesto.infura-ipfs.io",
        pathname: "/ipfs/**",
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
