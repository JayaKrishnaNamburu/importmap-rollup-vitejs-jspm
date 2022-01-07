import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jspmRollup from "@jspm/plugin-rollup";
import inputMap from "./import-map.mjs";

export default defineConfig({
  clearScreen: true,
  build: {
    outDir: "build",
    rollupOptions: {
      plugins: [
        jspmRollup({
          baseUrl: new URL("./", import.meta.url),
          defaultProvider: "jspm",
          env: ["browser"],
          inputMap,
        }),
      ],
    },
  },
  css: {
    modules: {
      scopeBehaviour: "local",
    },
  },
  plugins: [react()],
});
