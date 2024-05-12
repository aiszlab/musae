import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import stylex from "@stylexjs/rollup-plugin";
import commonjs from "@rollup/plugin-commonjs";

import pkg from "./package.json" assert { type: "json" };

import { fileURLToPath } from "url";
import { dirname } from "path";

const CSS_ASSET_FILENAME = "stylex.css";
const ENTRY = "index";

/**
 * @type {import("rollup").RollupOptions["input"]}
 */
const input = {
  [ENTRY]: "./src/index",
  "components/icon/icons/index": "./src/components/icon/icons/index",
};

/**
 * @type {import("rollup").RollupOptionsFunction}
 */
const config = () => {
  const isProd = process.env.NODE_ENV === "production";

  return {
    input,

    output: {
      format: "es",
      dir: "./dist",
      banner: (chunk) => {
        if (isProd && chunk.isEntry && chunk.name === ENTRY) {
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

      stylex({
        fileName: CSS_ASSET_FILENAME,
        classNamePrefix: "musae-",
        unstable_moduleResolution: {
          type: "commonJS",
          rootDir: dirname(fileURLToPath(import.meta.url)),
        },
      }),
    ],

    external: [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies)],
  };
};

export default config;
