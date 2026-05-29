import type { NextConfig } from "next";

const rawGithubPagesBasePath = process.env.GITHUB_PAGES_BASE_PATH || "";
const githubPagesBasePath = rawGithubPagesBasePath
  ? `/${rawGithubPagesBasePath.replace(/^\/+|\/+$/g, "")}`
  : "";
const nextConfig: NextConfig = {
  output: "export",
  basePath: githubPagesBasePath,
  assetPrefix: githubPagesBasePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
