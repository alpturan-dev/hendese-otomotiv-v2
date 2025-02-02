import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/v0/b/hendese-otomotiv.appspot.com/o/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
