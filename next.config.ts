import type { NextConfig } from "next";

const repoRoot = process.cwd();

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['venky-core'],
  outputFileTracingRoot: repoRoot,
  turbopack: { root: repoRoot },
};

export default nextConfig;
