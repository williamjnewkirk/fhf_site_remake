const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.GITHUB_PAGES_BASE_PATH || "";
export const BASE_PATH = envBasePath.startsWith("/") ? envBasePath : envBasePath ? `/${envBasePath}` : "";

export function withBasePath(path: string) {
  if (!path) return path;
  if (path.startsWith("/")) {
    return `${BASE_PATH}${path}`;
  }
  return `${BASE_PATH}/${path}`;
}
