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
const STYLES_EXPORT = "styles.css";
const ENTRY = "index";
const EXTENSIONS = [".ts", ".tsx", ".js", ".jsx"];
const STYLES_IMPORT = [pkg.name, STYLES_EXPORT].join("/");

/**
 * @param {import("rollup").RenderedChunk} chunk
 * @param {import("rollup").ModuleFormat} format
 * @param {boolean} isProd
 * @returns {string}
 */
const banner = (chunk, format, isProd) => {
  if (!isProd) return;
  if (!chunk.isEntry) return;
  if (chunk.name !== ENTRY) return;

  // configuration readme: https://rollupjs.org/configuration-options/#output-banner-output-footer
  // update imports, importedBindings
  // add css to entry chunk
  chunk.imports.push(STYLES_IMPORT);
  Object.assign(chunk.importedBindings, {
    [STYLES_IMPORT]: [],
  });

  switch (format) {
    case "esm":
    case "es":
      return `import "${STYLES_IMPORT}";`;
    default:
      return `require("${STYLES_IMPORT}")`;
  }
};

/**
 * @type {import("rollup").OutputOptions[]}
 */
const OUTPUS = [
  {
    format: "esm",
    entryFileNames: "[name].mjs",
  },
  {
    format: "commonjs",
    entryFileNames: "[name].cjs",
  },
];

/**
 * @type {import("rollup").RollupOptions["input"]}
 */
const input = {
  // components
  [ENTRY]: "./src/index",
  // locale
  "locale/locales/index": "./src/locale/locales/index",
  // icons
  "components/icon/icons/index": "./src/components/icon/icons/index",
  "components/icon/icons/action/index": "./src/components/icon/icons/action/index",
  "components/icon/icons/alert/index": "./src/components/icon/icons/alert/index",
  "components/icon/icons/content/index": "./src/components/icon/icons/content/index",
  "components/icon/icons/editor/index": "./src/components/icon/icons/editor/index",
  "components/icon/icons/hardware/index": "./src/components/icon/icons/hardware/index",
  "components/icon/icons/image/index": "./src/components/icon/icons/image/index",
  "components/icon/icons/mock/index": "./src/components/icon/icons/mock/index",
  "components/icon/icons/navigation/index": "./src/components/icon/icons/navigation/index",
  "components/icon/icons/toggle/index": "./src/components/icon/icons/toggle/index",
};

/**
 * @type {import("rollup").RollupOptionsFunction}
 */
const config = () => {
  const isProd = process.env.NODE_ENV === "production";

  return {
    input,

    output: OUTPUS.map((_output) => ({
      ..._output,
      dir: "./dist",
      strict: false,
      exports: "named",
      preserveModules: true,
      preserveModulesRoot: "src",
      banner: (chunk) => banner(chunk, _output.format, isProd),
    })),

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
          fileName: STYLES_EXPORT,
          classNamePrefix: "musaex-",
          useCSSLayers: true,
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
