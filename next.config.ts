import type { NextConfig } from "next";

const githubPagesBasePath = process.env.GITHUB_PAGES_BASE_PATH || "";
const nextConfig: NextConfig = {
  output: "export",
  basePath: githubPagesBasePath,
  assetPrefix: githubPagesBasePath ? `/${githubPagesBasePath}` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
