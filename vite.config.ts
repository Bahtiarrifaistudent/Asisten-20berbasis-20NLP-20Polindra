import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  // 🔴 PENTING untuk GitHub Pages
  // ganti sesuai nama repo kamu
  base:
    command === "build"
      ? "/Asisten-20berbasis-20NLP-20Polindra/"
      : "/",

  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: [
        path.resolve(__dirname),
        path.resolve(__dirname, "client"),
        path.resolve(__dirname, "shared"),
      ],
      deny: [
        ".env",
        ".env.*",
        "*.{crt,pem}",
        "**/.git/**",
        "server/**",
      ],
    },
  },

  build: {
    outDir: "dist/spa",
    emptyOutDir: true,
  },

  plugins: [
    react(),
    expressPlugin(), // hanya aktif saat dev
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
}));

/**
 * Plugin Express
 * Hanya berjalan saat `vite dev`
 * Tidak ikut ke GitHub Pages (karena Pages hanya static)
 */
function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // ⬅️ hanya saat dev
    configureServer(viteServer) {
      const app = createServer();
      viteServer.middlewares.use(app);
    },
  };
}
