const stylex = require("@stylexjs/babel-plugin");
const pkg = require("./package.json");

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

    plugins: [
      // not in production mode
      // use stylex babel plugin to transform stylex
      !isProd && [
        stylex,
        {
          dev: isDev,
          test: isTest,
          useCSSLayers: "true",
          unstable_moduleResolution: {
            type: "commonJS",
            rootDir: __dirname,
          },
        },
      ],

      // add runtime helpers
      // must add version, in babel runtime, default version is 7.0.0
      // at next time, @babel/runtime had upgrade many times and add many new apis
      // jusy like `_objectSpread`, if use old version, this api will be bundled into every entry file
      ["@babel/plugin-transform-runtime", { version: pkg.dependencies["@babel/runtime"] }],
    ].filter(Boolean),
  };
};

module.exports = config;
