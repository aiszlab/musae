const stylex = require("@stylexjs/babel-plugin");

/**
 * @type {import("@babel/core").ConfigFunction}
 */
const config = (api) => {
  const isTest = api.env("test");

  if (isTest) {
    api.cache.never();
  }

  // not in test env, we always use rollup to compile the code
  // in rollup, it already has stylex plugin (includes babel config)
  return {
    presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],

    ...(isTest && {
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
    }),
  };
};

module.exports = config;
