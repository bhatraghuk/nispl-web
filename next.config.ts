import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build static export for hosting on static hosts (e.g. Hostinger static)
  output: 'export',
  trailingSlash: true,
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  devIndicators: false,
  reactStrictMode: false,
};

export default nextConfig;
