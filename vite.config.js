import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pkg from "./package.json" assert { type: "json" };

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "./components/index.ts",
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        preserveModules: true,
      },
      external: [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies)],
    },
    minify: false,
    cssCodeSplit: true,
  },
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
  ],
});
