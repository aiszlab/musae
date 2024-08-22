import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import stylex from "@stylexjs/rollup-plugin";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pkg = require("./package.json");
const CSS_ASSET_FILENAME = "stylex.css";
const ENTRY = "index";
const EXTENSIONS = [".ts", ".tsx", ".js", ".jsx"];

/**
 * @type {import("rollup").RollupOptions["input"]}
 */
const input = {
  [ENTRY]: "./src/index",
  "components/icon/icons/index": "./src/components/icon/icons/index",
  "locale/locales/index": "./src/locale/locales/index",
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
        extensions: EXTENSIONS,
      }),
      typescript(),

      // bundler will generate when production mode
      isProd &&
        stylex({
          fileName: CSS_ASSET_FILENAME,
          classNamePrefix: "musae-",
          unstable_moduleResolution: {
            type: "commonJS",
            rootDir: dirname(fileURLToPath(import.meta.url)),
          },
        }),

      babel({
        babelHelpers: "runtime",
        extensions: EXTENSIONS,
      }),
    ].filter(Boolean),

    // use regexp to external dependencies
    // like `@aiszlab/relax`, we may use `@aiszlab/relax/dom` as submodule
    external: [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies)].map(
      (dependency) => new RegExp(`^${dependency}`),
    ),
  };
};

export default config;
