import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";

<<<<<<< HEAD
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
=======
export default defineConfig(() => ({
>>>>>>> 79eac8f (Update struktur direktori dan perbaikan proyek chatbot NLP)
  server: {
    host: "::",
    port: 8080,
    fs: {
<<<<<<< HEAD
      allow: ["./client", "./shared"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
  build: {
    outDir: "dist/spa",
  },
  plugins: [react(), expressPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
=======
      allow: [
        // Izinkan root project
        path.resolve(__dirname),

        // Izinkan folder client
        path.resolve(__dirname, "client"),

        // Izinkan folder shared
        path.resolve(__dirname, "shared"),
      ],
      deny: [
        ".env",
        ".env.*",
        "*.{crt,pem}",
        "**/.git/**"
      ],
    },
  },

  // Output untuk build SPA
  build: {
    outDir: "dist/spa",
  },

  plugins: [react(), expressPlugin()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client"),
      "@shared": path.resolve(__dirname, "shared"),
>>>>>>> 79eac8f (Update struktur direktori dan perbaikan proyek chatbot NLP)
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
<<<<<<< HEAD
    apply: "serve", // Only apply during development (serve mode)
    configureServer(server) {
      const app = createServer();

      // Add Express app as middleware to Vite dev server
=======
    apply: "serve",
    configureServer(server) {
      const app = createServer();
>>>>>>> 79eac8f (Update struktur direktori dan perbaikan proyek chatbot NLP)
      server.middlewares.use(app);
    },
  };
}
