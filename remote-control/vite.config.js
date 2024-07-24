import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import dns from "dns";
dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        homepage: "http://localhost:5000/assets/homepage.js",
      },
      shared: ["react"],
    }),
  ],
  preview: {
    host: "localhost",
    port: 5001,
    strictPort: true,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
