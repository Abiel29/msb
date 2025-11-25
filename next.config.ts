import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { 
        protocol: 'https', 
        hostname: 'images.unsplash.com',
        pathname: '/**'
      },
      { 
        protocol: 'https', 
        hostname: 'static.cdnlogo.com',
        pathname: '/**'
      },
      { 
        protocol: 'https', 
        hostname: 'cdnlogo.com',
        pathname: '/**'
      },
    ],
  },
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
