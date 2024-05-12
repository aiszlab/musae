/**
 * @type {import("@babel/core").ConfigFunction}
 */
const config = (api) => {
  const env = api.env();
  api.cache(false);

  console.log("env=====", env);

  return {
    presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
  };
};

export default config;
