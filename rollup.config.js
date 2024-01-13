import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json" assert { type: "json" };

const TO_CLIENT = new Set(
  [
    "avatar",
    "breadcrumb",
    "button",
    "calendar",
    "cascader",
    "checkbox",
    "chip",
    "clock",
    "date-picker",
    "date-range-picker",
    "dialog",
    "divider",
    "drawer",
    "empty",
    "icon",
    "input",
  ]
    .map((path) => `components/${path}/${path}`)
    .concat([
      "components/config/provider",
      "components/theme/provider",
      "components/grid/row",
      "components/grid/col",
      "components/form/form",
      "components/form/item",
    ])
);

/** @type {import("rollup").RollupOptions} */
const configuration = {
  input: "./src/index.ts",

  output: {
    format: "es",
    dir: "./dist",
    banner: (chunk) => (TO_CLIENT.has(chunk.name) ? '"use client"' : void 0),
    preserveModules: true,
    preserveModulesRoot: "src",
  },

  treeshake: {
    moduleSideEffects: false,
  },

  plugins: [
    resolve({
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    }),
    typescript(),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
    }),
  ],

  external: [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies)],
};

export default configuration;
