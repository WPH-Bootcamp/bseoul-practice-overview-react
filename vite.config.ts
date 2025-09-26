// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)), // <— alias @
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "@materi": fileURLToPath(new URL("./src/materi", import.meta.url)),
    },
  },
});
