import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
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
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-navigation-menu']
        }
      }
    }
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    {
      name: "html-base-path",
      transformIndexHtml(html) {
        if (mode !== "production" || basePath === "/") return html;
        return html
          .replace(
            /content="supporticon-uploads\//g,
            `content="${basePath}supporticon-uploads/`
          )
          .replace(/href="favicon\.ico"/g, `href="${basePath}favicon.ico"`);
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
