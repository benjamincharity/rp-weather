import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  server: {
    host: true,
    strictPort: true,
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    css: true,
  },
  resolve: {
    alias: {
      "@common": path.resolve(__dirname, "src/common"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@ui": path.resolve(__dirname, "src/components/ui"),
    },
  },
});
