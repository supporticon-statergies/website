/** Prefix a public-folder path with Vite's deploy base (e.g. /website-testing/). */
export function assetUrl(path: string): string {
  const normalized = path.replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${normalized}`;
}

/** Absolute URL for meta tags (og:image, JSON-LD) — works on GitHub Pages subpaths. */
export function absoluteAssetUrl(path: string): string {
  const url = path.startsWith("http")
    ? path
    : path.startsWith("/")
      ? path
      : assetUrl(path);

  if (typeof window === "undefined") {
    return url;
  }

  return new URL(url, window.location.origin).href;
}
