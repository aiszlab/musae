/**
 * @returns {Promise<import('jest').Config>}
 */
const config = async () => {
  return {
    transformIgnorePatterns: [],
    transform: {
      "\\.[jt]sx?$": "babel-jest",
      "\\.mjs$": "babel-jest",
    },
  };
};

export default config;
