import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["dist/**/*", "node_modules/**/*", "*.config.{js,cjs}"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReactHooks.configs["recommended-latest"],
  {
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
      "react/display-name": "off",
      "react-hooks/rules-of-hooks": "off",
      "@typescript-eslint/no-unsafe-function-type": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
