/**
 * @returns {Promise<import('jest').Config>}
 */
const config = async () => {
  return {
    testEnvironment: "jsdom",
    transformIgnorePatterns: ["node_modules/(?!(.pnpm|@aiszlab/relax)/)"],
    transform: {
      "\\.[jt]sx?$": "babel-jest",
    },
  };
};

export default config;
