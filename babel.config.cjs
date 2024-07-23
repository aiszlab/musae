const stylex = require("@stylexjs/babel-plugin");

/**
 * @type {import("@babel/core").ConfigFunction}
 */
const config = (api) => {
  const isTest = api.env("test");
  const isDev = api.env("development");
  const isProd = api.env("production");

  if (isTest) {
    api.cache.never();
  }

  return {
    presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],

    // not in production mode
    // use stylex babel plugin to shot styles
    ...(!isProd && {
      plugins: [
        [
          stylex,
          {
            dev: isDev,
            test: isTest,
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
