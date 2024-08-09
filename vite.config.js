import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [react(),eslintPlugin()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
          return;
        }
        warn(warning);
      },
    },
  },
  server: {
    port: 3000,
  },
});
