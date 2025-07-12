import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn.dummyjson.com'], // ✅ Allow external image domain
  },
};

export default nextConfig;
