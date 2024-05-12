/**
 * @type {import("@babel/core").ConfigFunction}
 */
const config = (api) => {
  api.cache.never();

  return {
    presets: [],
  };
};

export default config;
