import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
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
    resolve({
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    }),
    typescript(),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
    }),
  ],

  external: [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies), /.css/],

  makeAbsoluteExternalsRelative: false,
};

export default configuration;
