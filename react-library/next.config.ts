import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [ { hostname:'images-na.ssl-images-amazon.com' } ],
  }
};

export default nextConfig;
