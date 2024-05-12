/**
 * @type {import("@babel/core").ConfigFunction}
 */
const config = (api) => {
  api.cache.never();

  return {
    presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
  };
};

export default config;
