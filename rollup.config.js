import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import typescript from "@rollup/plugin-typescript";

import tailwindcss from "tailwindcss";
import nesting from "tailwindcss/nesting/index.js";
import autoprefixer from "autoprefixer";
import pkg from "./package.json" assert { type: "json" };

/** @type {import("rollup").RollupOptions} */
const configuration = {
  input: "./components/index.ts",

  output: {
    format: "es",
    dir: "./dist",
    preserveModules: true,
    preserveModulesRoot: "./components",
  },

  plugins: [
    typescript(),
    resolve({
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    }),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
    }),
    postcss({
      plugins: [nesting(), tailwindcss(), autoprefixer()],
    }),
  ],

  external: [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies)],
};

export default configuration;
