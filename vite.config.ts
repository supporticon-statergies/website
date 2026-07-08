import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import viteCompression from "vite-plugin-compression";
import { componentTagger } from "lovable-tagger";

// GitHub Pages project sites are served from /{repo-name}/ — set VITE_BASE_PATH in CI.
// Custom domain (supporticon.com) uses VITE_BASE_PATH=/ or omit it.
const basePath = process.env.VITE_BASE_PATH ?? "/";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? basePath : "/",
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'vendor-framer';
            if (id.includes('@radix-ui')) return 'vendor-radix';
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) return 'vendor-react';
            if (id.includes('@dotlottie')) return 'vendor-lottie';
            return 'vendor';
          }
        }
      }
    }
  },
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      webp: { quality: 80 },
      avif: { quality: 70 },
    }),
    viteCompression({ algorithm: "gzip", ext: ".gz" }),
    viteCompression({ algorithm: "brotliCompress", ext: ".br" }),
    mode === "development" && componentTagger(),
    {
      name: "html-base-path",
      transformIndexHtml(html: string) {
        if (mode !== "production" || basePath === "/") return html;
        return html
          .replace(
            /content="supporticon-uploads\//g,
            `content="${basePath}supporticon-uploads/`
          )
          .replace(/href="favicon\.ico"/g, `href="${basePath}favicon.ico"`);
      },
    },
    {
      name: "defer-css-plugin",
      enforce: "post",
      transformIndexHtml(html: string) {
        if (mode !== "production") return html;
        return html.replace(
          /<link rel="stylesheet"([^>]*?)href="([^"]+\.css)"([^>]*?)>/gi,
          (match: string, beforeHref: string, href: string, afterHref: string) => {
            const hasCrossorigin = beforeHref.includes("crossorigin") || afterHref.includes("crossorigin");
            const crossoriginAttr = hasCrossorigin ? " crossorigin" : "";
            return `<link rel="preload" href="${href}" as="style"${crossoriginAttr} onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet"${crossoriginAttr} href="${href}"></noscript>`;
          }
        );
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.lottie"],
}));
