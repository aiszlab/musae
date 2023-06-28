import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pkg from "./package.json" assert { type: "json" };
import postcssNested from "postcss-nested";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: "./components/index.ts",
      output: {
        preserveModules: true,
        format: "es",
        entryFileNames: "[name].js",
      },
      preserveEntrySignatures: "exports-only",
      external: [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies)],
    },
    minify: false,
  },
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
  ],

  css: {
    postcss: {
      plugins: [postcssNested()],
    },
  },
});
