import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import stylexPlugin from "@stylexjs/rollup-plugin";
import commonjs from "@rollup/plugin-commonjs";

import pkg from "./package.json" assert { type: "json" };

import { fileURLToPath } from "url";
import { dirname } from "path";

const CSS_ASSET_FILENAME = "stylex.css";

/** @type {import("rollup").RollupOptions} */
const configuration = {
  input: "./src/index.ts",

  output: {
    format: "es",
    dir: "./dist",
    banner: (chunk) => {
      if (chunk.isEntry) {
        // configuration readme: https://rollupjs.org/configuration-options/#output-banner-output-footer
        // update imports, importedBindings
        // add css to entry chunk
        chunk.imports.push(CSS_ASSET_FILENAME);
        Object.assign(chunk.importedBindings, {
          [CSS_ASSET_FILENAME]: [],
        });

        return `import "./${CSS_ASSET_FILENAME}";`;
      }
    },
    preserveModules: true,
    preserveModulesRoot: "src",
  },

  treeshake: {
    moduleSideEffects: false,
  },

  strictDeprecations: true,

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
