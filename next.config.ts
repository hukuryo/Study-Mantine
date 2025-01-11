import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    dynamicIO: true,
    reactCompiler: {
      compilationMode: "annotation",
    },
  },
};

export default nextConfig;
