import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/distance",
        destination: "/length",
        permanent: true,
      },
      {
        source: "/distance/:path*",
        destination: "/length",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
