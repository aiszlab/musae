// import stylex from "@stylexjs/babel-plugin";
// import { fileURLToPath } from "url";
// import { dirname } from "path";

const stylex = require("@stylexjs/babel-plugin");

/**
 * @type {import("@babel/core").ConfigFunction}
 */
const config = (api) => {
  const isTest = api.env("test");

  // not in test env, we always use rollup to compile the code
  // in rollup, it already has stylex plugin (includes babel config)
  if (!isTest) {
    return {};
  }

  api.cache.never();

  return {
    presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
    plugins: [
      [
        stylex,
        {
          dev: true,
          test: false,
          unstable_moduleResolution: {
            type: "commonJS",
            rootDir: __dirname,
          },
        },
      ],
    ],
  };
};

module.exports = config;
