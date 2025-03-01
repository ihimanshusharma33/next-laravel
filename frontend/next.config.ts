import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "../backend/public/build/",
  basePath: "/build",
  assetPrefix: "/build/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
