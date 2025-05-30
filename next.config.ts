import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  experimental: {
    scrollRestoration: true,
    optimizeCss: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "thedial.infura-ipfs.io",
        pathname: "/ipfs/**",
      },
      {
        protocol: "https",
        hostname: "syntheticfutures.xyz",
        pathname: "/api/infura/**",
      },
      {
        protocol: "https",
        hostname: "live.staticflickr.com",
        pathname: "/*",
      },
    ],

    unoptimized: true,
  },
  trailingSlash: true,
  async headers() {
    let headersConfig: any[] = [];

    const allowedOrigins = [
      "https://thedial.infura-ipfs.io",
      "https://syntheticfutures.xyz",
      "https://live.staticflickr.com",
    ];
    allowedOrigins.forEach((origin) => {
      headersConfig.push({
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: origin,
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "Origin, X-Requested-With, Content-Type, Accept, Authorization",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
        ],
      });
    });

    return headersConfig;
  },
};

export default nextConfig;
