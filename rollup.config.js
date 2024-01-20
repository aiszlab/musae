import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import stylexPlugin from "@stylexjs/rollup-plugin";
import commonjs from "@rollup/plugin-commonjs";

import pkg from "./package.json" assert { type: "json" };

import { fileURLToPath } from "url";
import { dirname } from "path";

/** @type {import("rollup").RollupOptions} */
const configuration = {
  input: "./src/index.ts",

  output: {
    format: "es",
    dir: "./dist",
    banner: (chunk) => {
      if (chunk.isEntry) {
        return 'import "./stylex.css";';
      }
    },
    preserveModules: true,
    preserveModulesRoot: "src",
  },

  treeshake: {
    moduleSideEffects: false,
  },

  plugins: [
    commonjs(),
    resolve({
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    }),
    typescript(),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
    }),
    stylexPlugin({
      fileName: "stylex.css",
      classNamePrefix: "musae-",
      unstable_moduleResolution: {
        type: "commonJS",
        rootDir: dirname(fileURLToPath(import.meta.url)),
      },
    }),
  ],

  external: [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies)],
};

export default configuration;
